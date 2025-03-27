"use client"

import { useState } from "react"
import { ArrowLeft, Send, Smile } from "lucide-react"
import { Navbar } from "@/components/navbar"

// Mock data for conversations
const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/placeholder-user.jpg",
    lastMessage: "Hi! I'm interested in your property. Is it still available?",
    timestamp: "2:30 PM",
    unread: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/placeholder-user.jpg",
    lastMessage: "Great, I'll see you then!",
    timestamp: "Yesterday",
    unread: false,
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "/placeholder-user.jpg",
    lastMessage: "Could you send me more photos?",
    timestamp: "2 days ago",
    unread: true,
  },
]

// Mock data for messages
const messages = [
  {
    id: 1,
    sender: "user",
    text: "Hi! I'm interested in your property. Is it still available?",
    timestamp: "2:30 PM",
  },
  {
    id: 2,
    sender: "me",
    text: "Yes, it's still available! Would you like to schedule a viewing?",
    timestamp: "2:31 PM",
  },
  {
    id: 3,
    sender: "user",
    text: "That would be great! What times work for you?",
    timestamp: "2:32 PM",
  },
]

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [messageInput, setMessageInput] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="h-[calc(100vh-4rem)] flex flex-col md:flex-row">
        {/* Left Panel - Conversations List */}
        <div className="w-full md:w-[30%] border-r bg-white">
          <div className="p-4 border-b">
            <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-8rem)]">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedConversation.id === conversation.id ? "bg-gray-50" : ""
                }`}
                onClick={() => setSelectedConversation(conversation)}
              >
                <div className="relative">
                  <img
                    src={conversation.avatar}
                    alt={conversation.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conversation.unread && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="ml-4 flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{conversation.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Chat View */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header */}
          <div className="p-4 border-b flex items-center">
            <button className="md:hidden mr-4 text-gray-500 hover:text-gray-700">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <div className="flex items-center">
              <img
                src={selectedConversation.avatar}
                alt={selectedConversation.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-gray-900">
                  {selectedConversation.name}
                </h2>
                <p className="text-sm text-gray-500">Active now</p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[70%] ${message.sender === "me" ? "order-2" : "order-1"}`}>
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.sender === "me"
                        ? "bg-primary text-white rounded-br-none"
                        : "bg-gray-100 text-gray-900 rounded-bl-none"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <Smile className="h-5 w-5" />
              </button>
              <button
                className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!messageInput.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 