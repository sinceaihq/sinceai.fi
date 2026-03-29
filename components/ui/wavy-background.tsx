"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = useMemo(() => createNoise3D(), []);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>(0);
  const isVisibleRef = useRef(true);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const dimensionsRef = useRef({ w: 0, h: 0 });
  const ntRef = useRef(0);
  
  const speedValue = useMemo(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const waveColors = useMemo(() => colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ], [colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;
    ctxRef.current = ctx;
    
    const updateSize = () => {
      dimensionsRef.current.w = canvas.width = window.innerWidth;
      dimensionsRef.current.h = canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };
    
    updateSize();
    
    const drawWave = (n: number) => {
      const { w, h } = dimensionsRef.current;
      ntRef.current += speedValue;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        // Increase step size for better performance (from 5 to 10)
        for (let x = 0; x < w; x += 10) {
          const y = noise(x / 800, 0.3 * i, ntRef.current) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };
    
    const render = () => {
      if (!isVisibleRef.current) {
        animationIdRef.current = requestAnimationFrame(render);
        return;
      }
      
      const { w, h } = dimensionsRef.current;
      ctx.fillStyle = backgroundFill || "black";
      ctx.globalAlpha = waveOpacity || 0.5;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationIdRef.current = requestAnimationFrame(render);
    };
    
    // Use Intersection Observer to pause animation when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    const handleResize = () => {
      updateSize();
    };
    
    window.addEventListener('resize', handleResize, { passive: true });
    animationIdRef.current = requestAnimationFrame(render);
    
    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, [blur, backgroundFill, waveOpacity, waveWidth, speedValue, waveColors, noise]);

  const [isSafari, setIsSafari] = useState(false);
  
  useEffect(() => {
    // Detect Safari after hydration to avoid SSR mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 w-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
