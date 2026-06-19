'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/995579970568"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-leaf text-white shadow-lg transition-transform"
      title="დაგვიკავშირდით ვოთსაფზე"
      aria-label="დაგვიკავშირდით ვოთსაფზე"
    >
      <MessageCircle size={28} />
    </motion.a>
  )
}
