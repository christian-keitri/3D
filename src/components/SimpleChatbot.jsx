// Alternative: Simple keyword-based chatbot (100% FREE, no API needed)
// This is a basic version that uses pre-written responses instead of AI
// Replace AIChatbot with this if you want zero costs

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend, FiMinimize2 } from 'react-icons/fi'
import { FaRobot } from 'react-icons/fa'
import { BsRobot } from 'react-icons/bs'

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm here to help you learn more about this portfolio. Ask me about skills, experience, projects, or availability!",
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Pre-written responses based on keywords (100% free, no API needed)
  const getResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()

    // Skills & Technologies
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
      return "Christian specializes in:\n\n• Backend: .NET 8.0, ASP.NET Core, Entity Framework Core, PostgreSQL\n• Frontend: React, TypeScript, TailwindCSS, GSAP\n• Mobile: Flutter, Dart, RxDart, GoRouter\n• Cloud: AWS (ECS, RDS, Cognito, S3, SQS, CloudWatch, CloudFront)\n• DevOps: Docker, CI/CD, Terraform\n\nCheck out the Core Competencies section for more details!"
    }

    // Experience
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
      return "Current role: Full-Stack Developer at Keitri Software Solutions (March 2025 - Present)\n\nKey achievements:\n• Built enterprise applications with .NET 8.0 and Flutter\n• Deployed cloud infrastructure on AWS\n• Integrated third-party services (Stream Chat, Sentry, etc.)\n• Reduced API response times by 40%\n\nPrevious: Electronics Technician at Zamony Ventures Corp (2024-2025)\n\nSee the Experience section for full details!"
    }

    // Projects
    if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('app')) {
      return "Notable projects include:\n\n• Food Delivery App - Full-featured with real-time tracking\n• Think Board - Collaborative whiteboard application\n• Portfolio Website - This site with 3D animations\n• Various mobile and web applications\n\nVisit the Projects section to see more!"
    }

    // Availability/Hire
    if (lowerMessage.includes('available') || lowerMessage.includes('hire') || lowerMessage.includes('job') || lowerMessage.includes('opportunity')) {
      return "Yes! Christian is currently available for:\n\n• Full-time positions\n• Contract work\n• Freelance projects\n\n100% on-time delivery record. Open to discussing how they can contribute to your team's success.\n\nUse the Contact section or download the resume to get in touch!"
    }

    // Contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return "You can reach out through:\n\n• Contact form (scroll to Contact section)\n• Download resume (PDF available)\n• GitHub: github.com/christian-keitri\n• LinkedIn profile\n\nCheck the Contact section for all links!"
    }

    // Resume
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return "You can download the resume from the Experience or Contact section. It includes full details about skills, experience, and projects!"
    }

    // Default responses
    const defaultResponses = [
      "I can help you learn about Christian's skills, experience, projects, and availability. What would you like to know?",
      "Feel free to ask about technologies used, work experience, projects, or how to get in touch!",
      "I'm here to help! Try asking about skills, experience, projects, or availability. Or check out the Contact section to reach out directly.",
      "You can ask me about:\n• Skills and technologies\n• Work experience\n• Projects\n• Availability\n• How to contact\n\nWhat interests you?"
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = {
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    const response = getResponse(input.trim())
    
    setTimeout(() => {
      const assistantMessage = {
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
    }, 500) // Small delay to simulate thinking

    setInput('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const suggestedQuestions = [
    "What technologies do you use?",
    "Tell me about your experience",
    "What projects have you worked on?",
    "Are you available for hire?"
  ]

  // Debug: Log when component renders
  useEffect(() => {
    console.log('SimpleChatbot component mounted, isOpen:', isOpen)
  }, [isOpen])

  return (
    <>
      {/* Chat Button - Floating Bubble */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[99999]"
          style={{ 
            pointerEvents: 'auto',
            position: 'fixed',
            zIndex: 99999
          }}
        >
          {/* Main Bubble Button */}
          <motion.button
            onClick={() => {
              setIsOpen(true)
              setIsMinimized(false)
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              y: [0, -12, 0],
            }}
            transition={{
              y: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 0.3,
              },
              opacity: {
                duration: 0.3,
              }
            }}
            whileHover={{ 
              scale: 1.2,
              y: -8,
              rotate: [0, -15, 15, -15, 0],
            }}
            whileTap={{ scale: 0.95 }}
            className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 
            rounded-full shadow-2xl flex items-center justify-center text-white
            hover:shadow-[0_0_40px_rgba(168,85,247,0.8)] transition-all duration-300
            border-3 border-white/30 backdrop-blur-sm
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/20 before:to-transparent"
            aria-label="Open Chatbot"
            style={{
              boxShadow: '0 10px 40px rgba(168, 85, 247, 0.4), 0 0 20px rgba(236, 72, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            {/* Notification Badge */}
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <AnimatePresence mode="wait">
              {isOpen ? null : (
                <motion.div
                  initial={{ rotate: -180, opacity: 0, scale: 0 }}
                  animate={{ 
                    rotate: 0, 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -4, 0],
                  }}
                  exit={{ rotate: 180, opacity: 0, scale: 0 }}
                  transition={{
                    y: {
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }
                  }}
                  className="text-3xl sm:text-4xl relative z-10"
                >
                  🤖
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : window.innerWidth < 640 ? '500px' : '600px'
            }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[99999] w-[calc(100vw-2rem)] sm:w-96 max-w-[calc(100vw-2rem)] sm:max-w-[calc(100vw-3rem)] 
            bg-gradient-to-b from-black/95 via-violet-900/30 to-black/95 
            backdrop-blur-md rounded-2xl shadow-2xl border border-purple-500/30
            flex flex-col ${isMinimized ? 'h-auto' : 'h-[500px] sm:h-[600px]'}`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-purple-600/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 
                flex items-center justify-center">
                  <FaRobot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Im Bob 🤖</h3>
                  <p className="text-xs text-purple-300">Ask me anything!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-purple-300 hover:text-white"
                  aria-label={isMinimized ? "Expand" : "Minimize"}
                >
                  <FiMinimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-purple-300 hover:text-white"
                  aria-label="Close"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
                  {messages.map((message, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          message.role === 'user'
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                            : 'bg-white/10 text-purple-100 border border-purple-600/30'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggested Questions */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-purple-300/70 mb-2">Suggested questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((question, idx) => (
                        <button
                          key={idx}
                          onClick={() => {
                            setInput(question)
                            setTimeout(() => handleSend(), 100)
                          }}
                          className="text-xs px-3 py-1.5 bg-white/5 hover:bg-white/10 
                          border border-purple-600/30 rounded-full text-purple-200 
                          hover:text-white transition-all duration-200"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 border-t border-purple-600/30">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-white/5 border border-purple-600/30 rounded-lg
                      text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 
                      focus:ring-purple-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 
                      text-white rounded-lg hover:from-purple-500 hover:to-pink-500
                      disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                      flex items-center justify-center"
                    >
                      <FiSend className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SimpleChatbot

