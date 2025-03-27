"use client"

import { useState, useEffect } from "react"
import { MapPin, Calendar, Users } from "lucide-react"

export function StickySearch() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-vrbo"
      style={{
        transform: `translateY(${scrollY}px)`,
        willChange: "transform"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2">
          <div className="flex-grow flex gap-2">
            <div className="relative flex-grow">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vrbo-gray h-5 w-5" />
              <input
                type="text"
                placeholder="Where to?"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-vrbo-border rounded-md text-sm focus:outline-none focus:border-vrbo-blue focus:ring-1 focus:ring-vrbo-blue"
              />
            </div>
            <div className="relative w-48">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vrbo-gray h-5 w-5" />
              <input
                type="text"
                placeholder="Check in - Check out"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-vrbo-border rounded-md text-sm focus:outline-none focus:border-vrbo-blue focus:ring-1 focus:ring-vrbo-blue"
              />
            </div>
            <div className="relative w-40">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-vrbo-gray h-5 w-5" />
              <select
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-vrbo-border rounded-md text-sm focus:outline-none focus:border-vrbo-blue focus:ring-1 focus:ring-vrbo-blue appearance-none"
              >
                <option>2 travelers</option>
                <option>3 travelers</option>
                <option>4 travelers</option>
                <option>5+ travelers</option>
              </select>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-vrbo-blue hover:bg-vrbo-navy text-white rounded-md text-sm font-semibold transition-all duration-200 hover:shadow-vrbo">
            Search
          </button>
        </div>
      </div>
    </div>
  )
} 