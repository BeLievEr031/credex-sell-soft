'use client'

import { useTheme } from 'next-themes'
import { useEffect, useRef, useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { askAI } from '@/hooks/use-chat-ai'
import { motion, AnimatePresence } from 'framer-motion'

const hardcodedQuestions = [
    'How do I sell my license?',
    'Can I upgrade my plan?',
    'What are your business hours?',
]

export default function ChatWidget() {
    const { theme } = useTheme()
    const [messages, setMessages] = useState([
        { role: 'ai', content: 'Hi! 👋 How can I help you today?' },
    ])
    const [input, setInput] = useState('')
    const chatEndRef = useRef<HTMLDivElement | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    const sendMessage = async (content: string) => {
        if (!content.trim()) return
        const userMessage = { role: 'user', content }
        setMessages((prev) => [...prev, userMessage])
        setInput('')
        const response = await askAI(content)
        setMessages((prev) => [...prev, { role: 'ai', content: response }])
    }

    const handleSend = () => sendMessage(input)

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messages])

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:scale-105 transition-transform"
            >
                <MessageCircle className="w-5 h-5" />
            </button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-6 right-6 z-50 w-[320px] bg-popover text-popover-foreground border border-border shadow-xl rounded-xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-3 bg-primary text-primary-foreground font-semibold flex justify-between items-center">
                            AI Support Chat
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-xs opacity-70 hover:opacity-100"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div className="max-h-[300px] overflow-y-auto px-3 py-2 space-y-3 bg-card text-card-foreground text-sm">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`p-2 rounded-lg max-w-[80%] ${msg.role === 'user'
                                        ? 'ml-auto bg-primary text-primary-foreground'
                                        : 'bg-muted text-muted-foreground'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Predefined Questions */}
                        <div className="flex flex-wrap gap-2 px-3 py-2 bg-muted text-muted-foreground text-xs">
                            {hardcodedQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    onClick={() => sendMessage(q)}
                                    className="px-2 py-1 rounded-md border border-border hover:bg-muted-foreground/10 transition"
                                >
                                    {q}
                                </button>
                            ))}
                        </div>

                        {/* Input Bar */}
                        <div className="flex items-center border-t border-border px-3 py-2 bg-background">
                            <input
                                className="flex-1 bg-transparent outline-none text-sm placeholder-muted-foreground"
                                placeholder="Type a message..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            />
                            <button
                                onClick={handleSend}
                                className="ml-2 p-1 rounded-full hover:bg-primary/10 transition-colors"
                            >
                                <Send className="w-4 h-4 text-primary" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
