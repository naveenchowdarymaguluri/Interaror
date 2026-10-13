"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  durationMs?: number;
  className?: string;
}

export default function AnimatedCounter({
  value,
  durationMs = 1200,
  className = "",
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse prefix, number, decimals, and suffix from string like "500+", "0.5mm", "10 Yrs*"
  const parseValue = (raw: string) => {
    const match = raw.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) {
      return { prefix: "", num: 0, decimals: 0, suffix: raw };
    }
    const prefix = match[1] || "";
    const numStr = match[2];
    const suffix = match[3] || "";
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const num = parseFloat(numStr);
    return { prefix, num, decimals, suffix };
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    const { prefix, num, decimals, suffix } = parseValue(value);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let startTime: number | null = null;

            const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

            const animate = (currentTime: number) => {
              if (startTime === null) startTime = currentTime;
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / durationMs, 1);
              const eased = easeOutCubic(progress);
              const currentNum = eased * num;

              const formatted =
                decimals > 0
                  ? currentNum.toFixed(decimals)
                  : Math.round(currentNum).toString();

              setDisplayValue(`${prefix}${formatted}${suffix}`);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setDisplayValue(value);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [value, durationMs, hasAnimated]);

  return (
    <span ref={elementRef} className={`tabular-nums ${className}`}>
      {hasAnimated ? displayValue : parseValue(value).prefix + "0" + parseValue(value).suffix}
    </span>
  );
}
