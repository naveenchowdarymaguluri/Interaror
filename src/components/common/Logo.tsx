import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark" | "default";
  className?: string;
  showTagline?: boolean;
}

export default function Logo({ variant = "default", className = "", showTagline = false }: LogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 transition-opacity hover:opacity-95 focus:outline-none ${className}`}
      aria-label="Terraform Modular home"
    >
      {isDark ? (
        <div className="flex flex-col">
          <div className="bg-white/95 rounded-xl px-3 py-1.5 shadow-sm border border-white/20 inline-flex items-center">
            <div className="relative h-9 w-40 sm:w-44">
              <Image
                src="/images/terraform-modular-logo.png"
                alt="Terraform Modular logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
          {showTagline && (
            <span className="text-[10px] tracking-wider text-slate-300 font-medium mt-1 pl-1">
              Interior Design & Modular Furniture
            </span>
          )}
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="relative h-10 sm:h-11 w-40 sm:w-48">
            <Image
              src="/images/terraform-modular-logo.png"
              alt="Terraform Modular logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          {showTagline && (
            <span className="text-[10px] tracking-wider text-slate-500 font-medium mt-0.5 pl-0.5">
              Interior Design & Modular Furniture
            </span>
          )}
        </div>
      )}
    </Link>
  );
}
