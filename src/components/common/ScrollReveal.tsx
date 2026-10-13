"use client";

import React, { useEffect, useState, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delayMs?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  delayMs = 0,
  className = "",
  threshold = 0.1,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div
      ref={domRef}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
