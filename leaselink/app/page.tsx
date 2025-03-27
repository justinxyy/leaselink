"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import {
  Search as SearchIcon,
  MapPin,
  MessageSquare,
  Home as HomeIcon,
  Facebook,
  Twitter,
  Instagram,
  Heart as HeartIcon,
  Star as StarIcon,
} from "lucide-react"
import Image from "next/image"
import { Parallax } from "@/components/parallax"

interface Property {
  id: number
  title: string
  location: string
  price: number
  rating: number
  image: string
}

const featuredProperties: Property[] = [
  {
    id: 1,
    title: "Luxury Apartment",
    location: "Downtown, NY",
    price: 2500,
    rating: 4.8,
    image: "/placeholder-property.jpg"
  },
  {
    id: 2,
    title: "Modern Studio",
    location: "West Side, NY",
    price: 1800,
    rating: 4.9,
    image: "/placeholder-property.jpg"
  },
  {
    id: 3,
    title: "Cozy Loft",
    location: "East Village, NY",
    price: 2200,
    rating: 4.7,
    image: "/placeholder-property.jpg"
  }
]

const testimonials = [
  {
    id: 1,
    quote: "Found my perfect sublease in NYC through LeaseLink. The process was smooth and the property owner was great to work with!",
    author: "Sarah Chen",
    role: "Graduate Student, NYU",
    image: "/placeholder-user.jpg"
  },
  {
    id: 2,
    quote: "As a young professional moving to a new city, LeaseLink made it easy to find temporary housing. The verification process gave me peace of mind.",
    author: "Michael Rodriguez",
    role: "Software Engineer, San Francisco",
    image: "/placeholder-user.jpg"
  },
  {
    id: 3,
    quote: "The platform is perfect for students looking for short-term housing. I found my sublease for the summer internship in just a few days!",
    author: "Emily Thompson",
    role: "Business Student, Boston",
    image: "/placeholder-user.jpg"
  }
]

const stats = [
  { id: 1, label: "Active Listings", value: "10,000+" },
  { id: 2, label: "Cities Covered", value: "50+" },
  { id: 3, label: "Happy Users", value: "25,000+" },
  { id: 4, label: "Success Rate", value: "95%" }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <Parallax
          imageUrl="/banner-image.jpg"
          alt="Two women discussing housing options on brownstone steps"
          className="h-[500px] md:h-[600px] flex flex-col items-center justify-center text-white px-4"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 max-w-3xl">
            Living Made Easy
          </h1>
          <p className="mt-3 max-w-xl mx-auto text-lg md:text-xl text-center text-gray-100">
            Find your perfect short term lease
          </p>

          {/* Search form */}
          <div className="w-full max-w-4xl mt-8 bg-white rounded-xl shadow-lg p-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-grow">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="w-full pl-10 bg-gray-50 border-gray-200 h-10 rounded-full text-sm"
                  />
                </div>
              </div>
              <button className="h-10 px-6 bg-primary hover:bg-primary/90 text-white rounded-full text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg">
                Search
              </button>
            </div>
          </div>
        </Parallax>
      </section>

      {/* Featured Properties */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-display text-2xl font-semibold text-black">Featured Properties</h2>
          <Link href="/browse" className="text-primary hover:text-primary/90 transition-all duration-200 hover:translate-x-1">
            View all properties →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <Parallax
                  imageUrl={property.image}
                  alt={property.title}
                  className="h-48"
                >
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-all duration-200 hover:scale-110 hover:shadow-md">
                      <HeartIcon className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </Parallax>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-medium text-black">{property.title}</h3>
                  <div className="flex items-center">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{property.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{property.location}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold text-black">${property.price}</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section with Parallax */}
      <Parallax
        imageUrl="/stats-bg.jpg"
        alt="Background pattern"
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-3xl font-bold text-white mb-2 font-display">{stat.value}</div>
                <div className="text-gray-100 font-poppins">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Parallax>

      {/* Target Audience Section with Parallax */}
      <Parallax
        imageUrl="/audience-bg.jpg"
        alt="College town background"
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white">Perfect for College Towns & Cities</h2>
            <p className="mt-4 text-lg text-gray-100 max-w-3xl mx-auto font-poppins">
              From vibrant college towns to major metropolitan areas, LeaseLink connects you with verified subleases and temporary housing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">College Towns</h3>
              <p className="text-gray-600 font-poppins">
                Discover housing in vibrant college towns like Ann Arbor, Madison, Boulder, and more. Perfect for semester exchanges, internships, and summer programs.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Major Cities</h3>
              <p className="text-gray-600 font-poppins">
                Access verified listings in major metropolitan areas including NYC, SF, Boston, Chicago, and more.
              </p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">Young Professionals</h3>
              <p className="text-gray-600 font-poppins">
                Secure temporary housing for job assignments, relocation periods, or while searching for permanent housing.
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      {/* Testimonials with Parallax */}
      <Parallax
        imageUrl="/testimonials-bg.jpg"
        alt="Testimonials background"
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-display font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500 font-poppins">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 italic font-poppins">"{testimonial.quote}"</p>
                <div className="mt-4 flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Parallax>

      {/* How It Works */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold text-gray-900 text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <SearchIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-medium text-gray-900">Search Properties</h3>
              <p className="mt-2 text-sm text-gray-500 font-poppins">
                Browse through our extensive collection of verified properties
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-medium text-gray-900">Contact Owners</h3>
              <p className="mt-2 text-sm text-gray-500 font-poppins">
                Connect directly with property owners through our messaging system
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-medium text-gray-900">Find Your Home</h3>
              <p className="mt-2 text-sm text-gray-500 font-poppins">
                Schedule viewings and find the perfect place to call home
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">About LeaseLink</h3>
              <p className="text-gray-400 text-sm font-poppins">
                Your trusted platform for finding the perfect rental property.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/browse" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1">
                    Browse Properties
                  </Link>
                </li>
                <li>
                  <Link href="/list" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1">
                    List Your Property
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 hover:translate-x-1">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">support@leaselink.com</li>
                <li className="text-gray-400 text-sm">1-800-123-4567</li>
                <li className="text-gray-400 text-sm">123 Main St, City, Country</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2024 LeaseLink. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

