"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface ParallaxProps {
  imageUrl: string
  alt: string
  children: React.ReactNode
  className?: string
}

export function Parallax({ imageUrl, alt, children, className = "" }: ParallaxProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrolled = window.scrollY
      const rate = scrolled * 0.5

      sectionRef.current.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div
        ref={sectionRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: "transform" }}
      >
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  )
} 