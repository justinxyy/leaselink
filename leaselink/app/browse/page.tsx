"use client"

import { Navbar } from "@/components/navbar"
import { StickySearch } from "@/components/sticky-search"
import { Parallax } from "@/components/parallax"
import { Heart as HeartIcon, Star as StarIcon, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

interface Property {
  id: number
  title: string
  location: string
  price: number
  rating: number
  image: string
  description: string
  amenities: string[]
}

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Downtown, NY",
    price: 2500,
    rating: 4.8,
    image: "/placeholder-property.jpg",
    description: "Beautiful luxury apartment in the heart of downtown. Perfect for young professionals.",
    amenities: ["Gym", "Pool", "Parking"]
  },
  {
    id: 2,
    title: "Modern Studio",
    location: "West Side, NY",
    price: 1800,
    rating: 4.9,
    image: "/placeholder-property.jpg",
    description: "Modern studio apartment with high ceilings and great natural light.",
    amenities: ["Laundry", "Bike Storage"]
  },
  {
    id: 3,
    title: "Cozy Loft",
    location: "East Village, NY",
    price: 2200,
    rating: 4.7,
    image: "/placeholder-property.jpg",
    description: "Charming loft apartment in a historic building. Close to restaurants and nightlife.",
    amenities: ["High Ceilings", "Exposed Brick"]
  },
  // Add more properties as needed
]

export default function BrowsePage() {
  return (
    <div className="min-h-screen bg-vrbo-lightGray">
      <Navbar />
      <StickySearch />

      {/* Hero Section */}
      <section className="relative pt-[60px]">
        <Parallax
          imageUrl="/banner-image.jpg"
          alt="Browse properties"
          className="h-[300px] flex flex-col items-center justify-center text-white px-4"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-4">
            You're about to make it a LeaseLink
          </h1>
          <p className="text-lg md:text-xl text-center text-white/90 max-w-2xl font-light">
            Find your perfect short-term rental from our extensive collection of verified properties
          </p>
        </Parallax>
      </section>

      {/* Filters and Search */}
      <div className="bg-white border-b border-vrbo-border sticky top-[60px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button className="flex items-center text-vrbo-gray hover:text-vrbo-blue">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                <span className="font-medium">Filters</span>
              </button>
              <span className="text-vrbo-gray">
                {properties.length} properties found
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <select className="text-sm border border-vrbo-border rounded-md px-3 py-2 focus:outline-none focus:border-vrbo-blue focus:ring-1 focus:ring-vrbo-blue">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-vrbo hover:shadow-vrbo-hover transition-shadow">
              <div className="relative">
                <Parallax
                  imageUrl={property.image}
                  alt={property.title}
                  className="h-48"
                >
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white rounded-full shadow-vrbo hover:shadow-vrbo-hover transition-all duration-200">
                      <HeartIcon className="h-5 w-5 text-vrbo-gray hover:text-vrbo-blue" />
                    </button>
                  </div>
                </Parallax>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-medium text-vrbo-navy text-lg">{property.title}</h3>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-vrbo-blue fill-current" />
                    <span className="ml-1 text-sm text-vrbo-gray font-medium">{property.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-vrbo-gray mb-2">{property.location}</p>
                <p className="text-sm text-vrbo-gray mb-3 line-clamp-2">{property.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.amenities.map((amenity, index) => (
                    <span key={index} className="text-xs bg-vrbo-lightGray text-vrbo-gray px-2 py-1 rounded-md">
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-vrbo-navy">${property.price}</span>
                  <span className="text-sm text-vrbo-gray">/month</span>
                </div>
                <Link
                  href={`/property/${property.id}`}
                  className="block w-full text-center bg-vrbo-blue hover:bg-vrbo-navy text-white rounded-md py-2.5 text-sm font-semibold transition-all duration-200 hover:shadow-vrbo"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 