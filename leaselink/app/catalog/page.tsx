"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  CalendarIcon,
  FilterIcon,
  MapIcon,
  MapPinIcon,
  SearchIcon,
  StarIcon,
  UsersIcon,
  WifiIcon,
  TvIcon,
  ShowerHeadIcon as ShowerIcon,
  UtensilsIcon,
} from "lucide-react"

// This is a mock data array. In a real application, you would fetch this data from an API or database.
const subleases = [
  {
    id: 1,
    title: "Studio Near Campus",
    location: "University District",
    price: 800,
    duration: "3 mo",
    capacity: 1,
    rating: 4.8,
    reviews: 24,
    image: "/placeholder.svg?height=400&width=600",
    lat: 47.6553,
    lng: -122.3035,
    type: "room",
    gender: "any",
    amenities: ["wifi", "tv", "kitchen"],
  },
  {
    id: 2,
    title: "2BR Apartment",
    location: "Downtown, NY",
    price: 1500,
    duration: "6 mo",
    capacity: 3,
    rating: 4.9,
    reviews: 42,
    image: "/placeholder.svg?height=400&width=600",
    lat: 40.7128,
    lng: -74.006,
    type: "entire",
    gender: "any",
    amenities: ["wifi", "tv", "kitchen", "laundry"],
  },
  {
    id: 3,
    title: "Modern Loft",
    location: "Silicon Valley",
    price: 2000,
    duration: "4 mo",
    capacity: 2,
    rating: 4.7,
    reviews: 18,
    image: "/placeholder.svg?height=400&width=600",
    lat: 37.3875,
    lng: -122.0575,
    type: "entire",
    gender: "any",
    amenities: ["wifi", "tv", "kitchen", "gym"],
  },
  {
    id: 4,
    title: "1BR with Balcony",
    location: "Back Bay, Boston",
    price: 1200,
    duration: "5 mo",
    capacity: 2,
    rating: 4.6,
    reviews: 31,
    image: "/placeholder.svg?height=400&width=600",
    lat: 42.3505,
    lng: -71.0825,
    type: "entire",
    gender: "any",
    amenities: ["wifi", "kitchen", "laundry"],
  },
  {
    id: 5,
    title: "Student Studio",
    location: "Hyde Park",
    price: 900,
    duration: "4 mo",
    capacity: 1,
    rating: 4.5,
    reviews: 15,
    image: "/placeholder.svg?height=400&width=600",
    lat: 41.7948,
    lng: -87.5907,
    type: "room",
    gender: "female",
    amenities: ["wifi", "kitchen"],
  },
  {
    id: 6,
    title: "Luxury Condo",
    location: "Downtown, LA",
    price: 2500,
    duration: "3 mo",
    capacity: 2,
    rating: 4.9,
    reviews: 27,
    image: "/placeholder.svg?height=400&width=600",
    lat: 34.0522,
    lng: -118.2437,
    type: "entire",
    gender: "any",
    amenities: ["wifi", "tv", "kitchen", "gym", "pool"],
  },
]

export default function Catalog() {
  const [showMap, setShowMap] = useState(false)
  const [priceRange, setPriceRange] = useState([500, 3000])

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-primary">LeaseLink</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-1">
              <Button asChild variant="ghost" className="text-gray-700 hover:text-primary hover:bg-gray-50">
                <Link href="/">Home</Link>
              </Button>
              <Button asChild variant="ghost" className="text-gray-700 hover:text-primary hover:bg-gray-50">
                <Link href="/catalog">Browse Listings</Link>
              </Button>
              <Button asChild variant="ghost" className="text-gray-700 hover:text-primary hover:bg-gray-50">
                <Link href="/list">List Your Property</Link>
              </Button>
              <Button asChild variant="ghost" className="text-gray-700 hover:text-primary hover:bg-gray-50">
                <Link href="/faq">FAQ</Link>
              </Button>
              <Button asChild variant="ghost" className="text-gray-700 hover:text-primary hover:bg-gray-50">
                <Link href="/messages">Messages</Link>
              </Button>
              <Button asChild className="bg-primary text-white hover:bg-primary/90">
                <Link href="/account">Account</Link>
              </Button>
            </nav>
            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            {/* Connected search bar with filters */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-secondary">
              <div className="flex flex-col md:flex-row">
                <div className="flex-grow p-3 md:p-4 border-b md:border-b-0 md:border-r border-secondary">
                  <div className="relative">
                    <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      type="text"
                      placeholder="Where are you going?"
                      className="pl-10 bg-gray-50 border-gray-200 h-10 rounded-full text-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row">
                  <div className="p-3 md:p-3 border-b md:border-b-0 md:border-r border-secondary">
                    <Select>
                      <SelectTrigger className="bg-gray-50 border-gray-200 h-10 w-full md:w-24 text-xs rounded-full">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-1 h-3 w-3 text-gray-400" />
                          <SelectValue placeholder="Check in" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jan">January</SelectItem>
                        <SelectItem value="feb">February</SelectItem>
                        <SelectItem value="mar">March</SelectItem>
                        <SelectItem value="apr">April</SelectItem>
                        <SelectItem value="may">May</SelectItem>
                        <SelectItem value="jun">June</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-3 md:p-3 border-b md:border-b-0 md:border-r border-secondary">
                    <Select>
                      <SelectTrigger className="bg-gray-50 border-gray-200 h-10 w-full md:w-24 text-xs rounded-full">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-1 h-3 w-3 text-gray-400" />
                          <SelectValue placeholder="Check out" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jan">January</SelectItem>
                        <SelectItem value="feb">February</SelectItem>
                        <SelectItem value="mar">March</SelectItem>
                        <SelectItem value="apr">April</SelectItem>
                        <SelectItem value="may">May</SelectItem>
                        <SelectItem value="jun">June</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-3 md:p-3 border-b md:border-b-0 md:border-r border-secondary">
                    <Select>
                      <SelectTrigger className="bg-gray-50 border-gray-200 h-10 w-full md:w-24 text-xs rounded-full">
                        <div className="flex items-center">
                          <UsersIcon className="mr-1 h-3 w-3 text-gray-400" />
                          <SelectValue placeholder="Guests" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 person</SelectItem>
                        <SelectItem value="2">2 people</SelectItem>
                        <SelectItem value="3">3 people</SelectItem>
                        <SelectItem value="4">4+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="p-3 md:p-3 border-b md:border-b-0 md:border-r border-secondary">
                    <Button className="h-10 w-full bg-primary hover:bg-primary/90 text-white rounded-full text-sm">
                      <SearchIcon className="h-4 w-4 mr-1" />
                      Search
                    </Button>
                  </div>
                  <div className="p-3 md:p-3">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          className="h-10 w-full rounded-full text-sm border-secondary text-primary"
                        >
                          <FilterIcon className="h-4 w-4 mr-1" />
                          Filters
                        </Button>
                      </SheetTrigger>
                      <SheetContent className="w-[300px] sm:w-[540px] overflow-y-auto">
                        <SheetHeader>
                          <SheetTitle>Filters</SheetTitle>
                          <SheetDescription>Refine your search with these filters</SheetDescription>
                        </SheetHeader>
                        <div className="py-6 space-y-6">
                          <div>
                            <h3 className="text-lg font-medium mb-4">Price Range</h3>
                            <div className="px-2">
                              <Slider
                                defaultValue={[500, 3000]}
                                min={0}
                                max={5000}
                                step={100}
                                value={priceRange}
                                onValueChange={setPriceRange}
                                className="mb-6"
                              />
                              <div className="flex justify-between">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-4">Property Type</h3>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="entire-place" />
                                <Label htmlFor="entire-place">Entire place</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="private-room" />
                                <Label htmlFor="private-room">Private room</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="shared-room" />
                                <Label htmlFor="shared-room">Shared room</Label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-4">Gender Preference</h3>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="any-gender" />
                                <Label htmlFor="any-gender">Any</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="male-only" />
                                <Label htmlFor="male-only">Male only</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="female-only" />
                                <Label htmlFor="female-only">Female only</Label>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-4">Amenities</h3>
                            <div className="grid grid-cols-2 gap-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox id="wifi" />
                                <Label htmlFor="wifi" className="flex items-center">
                                  <WifiIcon className="h-4 w-4 mr-2" />
                                  WiFi
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="tv" />
                                <Label htmlFor="tv" className="flex items-center">
                                  <TvIcon className="h-4 w-4 mr-2" />
                                  TV
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="kitchen" />
                                <Label htmlFor="kitchen" className="flex items-center">
                                  <UtensilsIcon className="h-4 w-4 mr-2" />
                                  Kitchen
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="laundry" />
                                <Label htmlFor="laundry" className="flex items-center">
                                  <ShowerIcon className="h-4 w-4 mr-2" />
                                  Laundry
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="gym" />
                                <Label htmlFor="gym">Gym</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox id="pool" />
                                <Label htmlFor="pool">Pool</Label>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-end gap-3 pt-4">
                            <Button variant="outline">Clear All</Button>
                            <Button className="bg-primary hover:bg-primary/90 text-white">Apply Filters</Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </div>

            {/* Map toggle */}
            <div className="flex items-center justify-end mt-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="map-mode" className="text-sm font-medium">
                  Map View
                </Label>
                <Switch id="map-mode" checked={showMap} onCheckedChange={setShowMap} />
              </div>
            </div>
          </div>

          {/* Map view or listings */}
          {showMap ? (
            <div className="h-[calc(100vh-200px)] bg-secondary/20 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapIcon className="h-16 w-16 text-primary/30" />
                <span className="sr-only">Map View</span>
              </div>

              {/* Map markers */}
              {subleases.map((sublease) => (
                <div
                  key={sublease.id}
                  className="absolute bg-white rounded-md shadow-lg p-2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:z-10 hover:scale-105 transition-transform"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                  }}
                >
                  <div className="font-bold text-primary">${sublease.price}</div>
                  <div className="text-xs text-gray-500">{sublease.type === "entire" ? "Entire place" : "Room"}</div>
                </div>
              ))}

              {/* Sidebar for map view */}
              <div className="absolute top-4 right-4 w-72 bg-white rounded-md shadow-lg max-h-[calc(100%-32px)] overflow-y-auto">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-medium">6 listings found</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {subleases.map((sublease) => (
                    <div key={sublease.id} className="p-4 hover:bg-gray-50 cursor-pointer">
                      <div className="flex gap-3">
                        <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={sublease.image || "/placeholder.svg"}
                            alt={sublease.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{sublease.title}</h4>
                          <p className="text-xs text-gray-500">{sublease.location}</p>
                          <div className="flex items-center mt-1">
                            <StarIcon className="h-3 w-3 text-yellow-500" />
                            <span className="text-xs ml-1">{sublease.rating}</span>
                          </div>
                          <p className="font-bold text-sm mt-1">${sublease.price}/mo</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subleases.map((sublease) => (
                <Card
                  key={sublease.id}
                  className="overflow-hidden transition-all hover:shadow-lg border border-gray-100"
                >
                  <div className="relative h-72">
                    <Image
                      src={sublease.image || "/placeholder.svg"}
                      alt={sublease.title}
                      fill
                      className="object-cover"
                    />
                    {sublease.id <= 3 && <Badge className="absolute top-2 right-2 bg-primary">Featured</Badge>}
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-sm">{sublease.title}</h3>
                        <p className="text-gray-500 text-xs flex items-center">
                          <MapPinIcon className="h-3 w-3 mr-0.5" />
                          {sublease.location}
                        </p>
                      </div>
                      <p className="font-bold text-sm">${sublease.price}/mo</p>
                    </div>
                    <div className="flex items-center mt-2 text-xs text-gray-600 justify-between">
                      <div className="flex items-center">
                        <CalendarIcon className="h-3 w-3 mr-0.5" />
                        <span>{sublease.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <UsersIcon className="h-3 w-3 mr-0.5" />
                        <span>
                          {sublease.capacity} {sublease.capacity === 1 ? "person" : "people"}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <StarIcon className="h-3 w-3 mr-0.5 text-yellow-500" />
                        <span>{sublease.rating}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-white text-xs py-1 h-8 rounded-full">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

