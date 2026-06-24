"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../../lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none hover:scale-105",
  {
    variants: {
      variant: {
        default: "bg-transparent text-white",
        primary: "bg-transparent text-white",
        gold: "bg-transparent text-[#C8A84E]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 text-xs gap-1.5 px-4",
        lg: "h-11 px-6",
        xl: "h-12 px-8",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "lg",
    },
  }
)

function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter
          id="container-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.05 0.05"
            numOctaves="1"
            seed="1"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="70"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

export function LiquidButton({
  className,
  variant,
  size,
  children,
  href,
  ...props
}) {
  const Comp = href ? 'a' : 'button'

  return (
    <>
      <Comp
        href={href}
        className={cn(
          "relative",
          liquidbuttonVariants({ variant, size, className })
        )}
        {...props}
      >
        <div className="absolute top-0 left-0 z-0 h-full w-full rounded-xl
            shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(255,255,255,0.3),inset_-3px_-3px_0.5px_-3px_rgba(255,255,255,0.25),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.2),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.2),inset_0_0_6px_6px_rgba(255,255,255,0.05),inset_0_0_2px_2px_rgba(255,255,255,0.03),0_0_12px_rgba(255,255,255,0.08)]
        transition-all" />
        <div
          className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-xl"
          style={{ backdropFilter: 'blur(12px)' }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Comp>
      <GlassFilter />
    </>
  )
}

export { liquidbuttonVariants }
