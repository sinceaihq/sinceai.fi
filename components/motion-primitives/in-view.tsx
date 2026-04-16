'use client';
import { ReactNode, useRef } from 'react';
import {
  motion,
  useInView,
  Variant,
  Transition,
  UseInViewOptions,
} from 'motion/react';

export type InViewProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: React.ElementType;
  once?: boolean
};

const defaultVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function InView({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = 'div',
  once = true // Default to true for better performance
}: InViewProps) {
  const ref = useRef(null);
  // Use the built-in once option from useInView for better performance
  const isInView = useInView(ref, { ...viewOptions, once });

  const MotionComponent = motion[as as keyof typeof motion] as typeof as;

  return (
    <MotionComponent
      ref={ref}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      style={{ willChange: 'opacity, transform' }}
    >
      {children}
    </MotionComponent>
  );
}
