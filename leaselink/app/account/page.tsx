"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"

export default function Account() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate successful authentication
    setIsAuthenticated(true)
  }

  if (isAuthenticated) {
    return <AccountDashboard />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="text-center mb-8">
              <Link href="/" className="inline-block">
                <span className="text-2xl font-bold text-primary">LeaseLink</span>
              </Link>
              <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                {isSignUp ? "Create an account" : "Welcome back"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary sm:text-sm"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={!email || !password}
                className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSignUp ? "Sign up" : "Sign in"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-primary hover:text-primary/90"
              >
                {isSignUp
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AccountDashboard() {
  const [activeTab, setActiveTab] = useState("profile")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex min-h-[calc(100vh-4rem)]">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-white border-r">
          <div className="p-6">
            <div className="flex items-center space-x-3">
              <img
                src="/placeholder-user.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-gray-500">john@example.com</p>
              </div>
            </div>
          </div>
          <nav className="flex-1 space-y-1 p-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                activeTab === "profile"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("listings")}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                activeTab === "listings"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              My Listings
            </button>
            <button
              onClick={() => setActiveTab("interested")}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                activeTab === "interested"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Interested Listings
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                activeTab === "settings"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              Account Settings
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src="/placeholder-user.jpg"
                      alt="Profile"
                      className="w-24 h-24 rounded-full"
                    />
                    <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                      Change Photo
                    </button>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Info
                    </label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                      placeholder="Your phone number"
                    />
                  </div>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "listings" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">My Listings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3].map((listing) => (
                      <div key={listing} className="border rounded-lg overflow-hidden">
                        <img
                          src="/placeholder-property.jpg"
                          alt="Property"
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-medium">Luxury Apartment</h3>
                          <p className="text-sm text-gray-500">123 Main St, City</p>
                          <div className="mt-4 flex space-x-2">
                            <button className="flex-1 px-3 py-1 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-primary/5">
                              Edit
                            </button>
                            <button className="flex-1 px-3 py-1 text-sm font-medium text-red-600 border border-red-600 rounded-lg hover:bg-red-50">
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "interested" && (
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Interested Listings</h2>
                  <div className="space-y-4">
                    {[1, 2, 3].map((listing) => (
                      <div key={listing} className="border rounded-lg p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src="/placeholder-property.jpg"
                            alt="Property"
                            className="w-20 h-20 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium">Luxury Apartment</h3>
                            <p className="text-sm text-gray-500">123 Main St, City</p>
                            <div className="mt-2 flex items-center space-x-4 text-sm">
                              <span className="text-gray-500">Added on Jan 1, 2024</span>
                              <span className="text-primary">Contact Owner</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive updates about your bookings</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-primary transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <span className="translate-x-5 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Marketing Emails</h3>
                        <p className="text-sm text-gray-500">Receive promotional content</p>
                      </div>
                      <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                        <span className="translate-x-0 pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
                      </button>
                    </div>
                  </div>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90">
                    Save Changes
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 