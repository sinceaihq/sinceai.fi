"use client";
import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  goals: string;
  message: string;
  phone: string;
  source: string;
  honeypot: string; // Spam prevention
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  goals?: string;
  message?: string;
  phone?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

const subjectOptions = [
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "sponsorship", label: "Sponsorship Inquiry" },
  { value: "community", label: "Community Question" },
  { value: "job", label: "Job Opportunity" },
  { value: "press", label: "Press/Media" },
  { value: "other", label: "Other" },
];

const sourceOptions = [
  { value: "social", label: "Social media" },
  { value: "word-of-mouth", label: "Word of mouth" },
  { value: "discord", label: "Discord" },
  { value: "search", label: "Search engine" },
  { value: "event", label: "Event" },
  { value: "other", label: "Other" },
];

const initialFormData: FormData = {
  name: "",
  email: "",
  company: "",
  subject: "",
  goals: "",
  message: "",
  phone: "",
  source: "",
  honeypot: "",
};

interface ContactFormProps {
  preselectedSubject?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedSubject }) => {
  const [formData, setFormData] = useState<FormData>({
    ...initialFormData,
    subject: preselectedSubject || "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Check if conditional field should show
  const showGoalsField = formData.subject === "partnership" || formData.subject === "sponsorship";

  // Character counts
  const goalsCount = formData.goals.length;
  const messageCount = formData.message.length;

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Optional field
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phoneRegex.test(phone) && phone.length >= 7;
  };

  const validateField = useCallback((name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        if (value.length > 100) return "Name must be less than 100 characters";
        return undefined;
      
      case "email":
        if (!value.trim()) return "Email is required";
        if (!validateEmail(value)) return "Please enter a valid email address";
        return undefined;
      
      case "subject":
        if (!value) return "Please select a subject";
        return undefined;
      
      case "goals":
        if (showGoalsField && value.length > 500) return "Goals must be less than 500 characters";
        return undefined;
      
      case "message":
        if (!value.trim()) return "Message is required";
        if (value.trim().length < 10) return "Message must be at least 10 characters";
        if (value.length > 2000) return "Message must be less than 2000 characters";
        return undefined;
      
      case "phone":
        if (value && !validatePhone(value)) return "Please enter a valid phone number";
        return undefined;
      
      default:
        return undefined;
    }
  }, [showGoalsField]);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    
    const fieldsToValidate: (keyof FormData)[] = ["name", "email", "subject", "message", "phone"];
    if (showGoalsField) fieldsToValidate.push("goals");
    
    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field as keyof FormErrors] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, showGoalsField, validateField]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FormData, formData[name as keyof FormData]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (formData.honeypot) {
      setStatus("success"); // Fake success for bots
      return;
    }
    
    // Mark all fields as touched
    const allTouched: Record<string, boolean> = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);
    
    if (!validateForm()) {
      return;
    }
    
    setStatus("submitting");
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          goals: showGoalsField ? formData.goals : undefined,
          message: formData.message,
          phone: formData.phone,
          source: formData.source,
        }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }
      
      setStatus("success");
      setFormData(initialFormData);
      setTouched({});
      
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "Oops! Something went wrong. Please try again."
      );
    }
  };

  const getFieldClasses = (fieldName: keyof FormErrors): string => {
    const baseClasses = "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-white/20";
    const hasError = touched[fieldName] && errors[fieldName];
    const isValid = touched[fieldName] && !errors[fieldName] && formData[fieldName as keyof FormData];
    
    if (hasError) return `${baseClasses} !border-red-500/50 !ring-red-500/20`;
    if (isValid) return `${baseClasses} !border-green-500/30`;
    return baseClasses;
  };

  return (
    <section className="w-full bg-black py-16 px-6">
      <div className="max-w-xl mx-auto">
        {/* Section header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Send us a message
          </h2>
          <p className="text-white/60 font-light">
            Tell us what&apos;s on your mind. We&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Success State */}
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Message sent!
              </h3>
              <p className="text-white/60 mb-6">
                Thanks for reaching out. We&apos;ll be in touch within 24 hours.
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={() => setStatus("idle")}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Send another message
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Honeypot field - hidden from users */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                  className={getFieldClasses("name")}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={!!errors.name}
                />
                {touched.name && errors.name && (
                  <p id="name-error" className="text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email <span className="text-red-400">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                  className={getFieldClasses("email")}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={!!errors.email}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium text-white">
                  Company <span className="text-white/40 text-xs">(optional)</span>
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Your company (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={100}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-white/20"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-white">
                  Subject <span className="text-red-400">*</span>
                </label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => handleSelectChange("subject", value)}
                >
                  <SelectTrigger
                    id="subject"
                    className={`w-full bg-white/5 border-white/10 text-white ${
                      !formData.subject ? "text-white/40" : ""
                    } ${touched.subject && errors.subject ? "!border-red-500/50" : ""}`}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  >
                    <SelectValue placeholder="--Select a subject--" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    {subjectOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-white hover:bg-white/10 focus:bg-white/10"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {touched.subject && errors.subject && (
                  <p id="subject-error" className="text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Goals - Conditional field */}
              <AnimatePresence>
                {showGoalsField && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <label htmlFor="goals" className="block text-sm font-medium text-white">
                      What are your goals?
                    </label>
                    <Textarea
                      id="goals"
                      name="goals"
                      placeholder="Tell us about your company, goals, and how we can partner together."
                      value={formData.goals}
                      onChange={handleChange}
                      onBlur={() => handleBlur("goals")}
                      maxLength={500}
                      className={`min-h-[100px] bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-white/30 focus:ring-white/20 ${
                        touched.goals && errors.goals ? "!border-red-500/50" : ""
                      }`}
                      aria-describedby="goals-count"
                    />
                    <div className="flex justify-between items-center">
                      {errors.goals && (
                        <p className="text-sm text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.goals}
                        </p>
                      )}
                      <p id="goals-count" className="text-xs text-white/40 ml-auto">
                        {goalsCount}/500
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message <span className="text-red-400">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur("message")}
                  maxLength={2000}
                  className={`min-h-[150px] ${getFieldClasses("message")}`}
                  aria-describedby={errors.message ? "message-error message-count" : "message-count"}
                  aria-invalid={!!errors.message}
                />
                <div className="flex justify-between items-center">
                  {touched.message && errors.message && (
                    <p id="message-error" className="text-sm text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                  <p id="message-count" className="text-xs text-white/40 ml-auto">
                    {messageCount}/2000
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Phone{" "}
                  <span className="text-white/40 text-xs">
                    (optional{showGoalsField ? " - recommended for partnerships" : ""})
                  </span>
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+358 (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={() => handleBlur("phone")}
                  className={getFieldClasses("phone")}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {touched.phone && errors.phone && (
                  <p id="phone-error" className="text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Source */}
              <div className="space-y-2">
                <label htmlFor="source" className="block text-sm font-medium text-white">
                  How did you hear about us?{" "}
                  <span className="text-white/40 text-xs">(optional)</span>
                </label>
                <Select
                  value={formData.source}
                  onValueChange={(value) => handleSelectChange("source", value)}
                >
                  <SelectTrigger
                    id="source"
                    className={`w-full bg-white/5 border-white/10 text-white ${
                      !formData.source ? "text-white/40" : ""
                    }`}
                  >
                    <SelectValue placeholder="--Select an option--" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-white/10">
                    {sourceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-white hover:bg-white/10 focus:bg-white/10"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Error Message */}
              {status === "error" && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-400">{errorMessage}</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-white text-black hover:bg-white/90 font-medium py-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;
