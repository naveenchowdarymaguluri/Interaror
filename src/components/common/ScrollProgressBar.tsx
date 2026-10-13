"use client";

import React, { useState, useEffect } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#1F3B6B] via-[#EEC10E] to-[#F3C920] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(238,193,14,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
