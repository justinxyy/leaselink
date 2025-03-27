"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Navbar } from "@/components/navbar"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: "Finding Listings",
    question: "How do I search for properties?",
    answer: "You can search for properties using our search bar at the top of the page. Enter your desired location, dates, and any specific requirements. Use filters to narrow down your search by price range, property type, and amenities."
  },
  {
    category: "Finding Listings",
    question: "How do I save properties I'm interested in?",
    answer: "Click the heart icon on any property card to save it to your Interested Listings. You can access these saved properties from your account dashboard under 'Interested Listings'."
  },
  {
    category: "Finding Listings",
    question: "How do I contact property owners?",
    answer: "Once you've found a property you're interested in, click the 'Contact Owner' button on the property page. You'll be able to send a message directly to the property owner through our messaging system."
  },
  {
    category: "Listing Your Property",
    question: "How do I list my property?",
    answer: "Click the 'List Your Property' button in the navigation bar. You'll be guided through a step-by-step process to add your property details, photos, pricing, and availability. Make sure to provide accurate information and high-quality photos to attract potential tenants."
  },
  {
    category: "Listing Your Property",
    question: "What information do I need to list my property?",
    answer: "You'll need to provide: property type, location, number of rooms, amenities, high-quality photos, pricing, and availability dates. You can also add a detailed description and house rules to help potential tenants understand your property better."
  },
  {
    category: "Listing Your Property",
    question: "How do I manage my property listing?",
    answer: "You can manage your property listing from your account dashboard under 'My Listings'. Here you can update photos, pricing, availability, and respond to inquiries from potential tenants."
  },
  {
    category: "Verification",
    question: "How does property verification work?",
    answer: "Our verification process includes checking property ownership documents, address verification, and photo verification. We may also conduct virtual or in-person inspections to ensure the property meets our quality standards."
  },
  {
    category: "Verification",
    question: "How do I verify my identity?",
    answer: "To verify your identity, go to your account settings and click on 'Verify Identity'. You'll need to provide a valid government ID and complete our verification process. This helps ensure a safe and trustworthy community."
  },
  {
    category: "Verification",
    question: "What documents do I need for verification?",
    answer: "For property verification, you'll need: proof of ownership (deed or lease agreement), government-issued ID, and recent utility bills. For identity verification, you'll need a valid government ID and possibly additional documentation depending on your location."
  }
]

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const categories = Array.from(new Set(faqs.map(faq => faq.category)))

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          {categories.map((category) => (
            <div key={category} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenCategory(openCategory === category ? null : category)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h2 className="text-lg font-semibold text-gray-900">{category}</h2>
                {openCategory === category ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openCategory === category && (
                <div className="px-6 pb-4">
                  <div className="space-y-4">
                    {faqs
                      .filter((faq) => faq.category === category)
                      .map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                          <button
                            onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                            className="w-full flex items-center justify-between text-left"
                          >
                            <h3 className="text-base font-medium text-gray-900">{faq.question}</h3>
                            {openQuestion === index ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </button>
                          {openQuestion === index && (
                            <p className="mt-2 text-gray-600">{faq.answer}</p>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 