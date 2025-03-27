"use client"

import Link from "next/link"
import { ArrowLeft, Upload, Check, MapPin, Home, Users, DollarSign, Calendar, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { Navbar } from "@/components/navbar"

const amenities = [
  { id: "wifi", label: "WiFi", icon: "📡" },
  { id: "kitchen", label: "Kitchen", icon: "🍳" },
  { id: "ac", label: "Air Conditioning", icon: "❄️" },
  { id: "washer", label: "Washer", icon: "👕" },
  { id: "dryer", label: "Dryer", icon: "👔" },
  { id: "tv", label: "TV", icon: "📺" },
  { id: "parking", label: "Free Parking", icon: "🅿️" },
  { id: "elevator", label: "Elevator", icon: "🛗" },
  { id: "gym", label: "Gym", icon: "💪" },
  { id: "pool", label: "Pool", icon: "🏊" },
]

const steps = [
  { id: "basic", label: "Basic Info" },
  { id: "details", label: "Details" },
  { id: "photos", label: "Photos" },
  { id: "pricing", label: "Pricing" },
]

export default function ListProperty() {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [guestCount, setGuestCount] = useState("")
  const [price, setPrice] = useState("")

  const isFormValid = title && description && location && propertyType && guestCount && price && date

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Progress Steps */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    index === 0 ? "bg-primary text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {index + 1}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">{step.label}</span>
                  {index < steps.length - 1 && (
                    <div className="w-16 h-0.5 bg-gray-200 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Basic Information Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Basic Information</h2>
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Title
                </label>
                <Input
                  id="title"
                  placeholder="Give your property a catchy title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Make it stand out! A good title helps attract more guests.
                </p>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Short Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Describe your property in 150 characters or less"
                  maxLength={150}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full"
                />
                <p className="mt-1 text-sm text-gray-500">
                  {description.length}/150 characters
                </p>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="location"
                    placeholder="Enter your property's address"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Be as specific as possible to help guests find your property.
                </p>
              </div>
            </div>
          </div>

          {/* Property Details Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Property Details</h2>
            <div className="space-y-6">
              {/* Property Type and Guest Count */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="room">Room</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guest Count
                  </label>
                  <Select value={guestCount} onValueChange={setGuestCount}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "guest" : "guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Photos
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Card className="p-8 border-2 border-dashed border-gray-300 hover:border-gray-400 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center justify-center text-center">
                      <Upload className="h-12 w-12 text-gray-400 mb-4" />
                      <p className="text-gray-600">Add photos</p>
                      <p className="text-sm text-gray-500 mt-1">Drag and drop or click to upload</p>
                    </div>
                  </Card>
                  {/* Placeholder for uploaded photos */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Card key={i} className="aspect-square bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400">Photo {i}</span>
                    </Card>
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Add at least 5 photos to showcase your property. High-quality photos attract more guests.
                </p>
              </div>

              {/* Price */}
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price per night
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="price"
                    type="number"
                    placeholder="0.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="pl-10 w-full"
                  />
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Set a competitive price based on your location and amenities.
                </p>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Amenities</h2>
            <div className="grid grid-cols-2 gap-4">
              {amenities.map((amenity) => (
                <div key={amenity.id} className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-50">
                  <Checkbox
                    id={amenity.id}
                    checked={selectedAmenities.includes(amenity.id)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedAmenities([...selectedAmenities, amenity.id])
                      } else {
                        setSelectedAmenities(selectedAmenities.filter((id) => id !== amenity.id))
                      }
                    }}
                  />
                  <label htmlFor={amenity.id} className="text-sm text-gray-700 flex items-center">
                    <span className="mr-2">{amenity.icon}</span>
                    {amenity.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Availability Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Availability</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                When can guests check in?
              </label>
              <CalendarComponent
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <p className="mt-1 text-sm text-gray-500">
                Select the date when your property will be ready for guests.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            className="w-full h-12 text-lg"
            disabled={!isFormValid}
          >
            Continue to next step
          </Button>
        </div>
      </div>
    </div>
  )
} 