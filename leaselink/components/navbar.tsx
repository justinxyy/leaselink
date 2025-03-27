import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
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
  )
} 