'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <BrandLogo variant="footer" />
              <div>
                <h3 className="text-xl font-bold">áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜</h3>
                <p className="text-sm text-white/70">áƒ’áƒáƒœáƒáƒ—áƒšáƒ”áƒ‘áƒ˜áƒ¡áƒ áƒ“áƒ áƒ’áƒáƒœáƒ•áƒ˜áƒ—áƒáƒ áƒ”áƒ‘áƒ˜áƒ¡ áƒªáƒ”áƒœáƒ¢áƒ áƒ˜</p>
              </div>
            </div>
            <p className="mb-6 leading-relaxed text-white/72">
              áƒ”áƒ áƒ—áƒ˜ áƒ¡áƒ˜áƒ•áƒ áƒªáƒ” áƒ¡áƒ¬áƒáƒ•áƒšáƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡, áƒ’áƒáƒœáƒ•áƒ˜áƒ—áƒáƒ áƒ”áƒ‘áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡, áƒ¨áƒ”áƒ›áƒáƒ¥áƒ›áƒ”áƒ“áƒ”áƒ‘áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡, áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡
              áƒ“áƒ áƒ¡áƒáƒ¡áƒ™áƒáƒšáƒ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡ 6 áƒ—áƒ•áƒ˜áƒ“áƒáƒœ 10 áƒ¬áƒšáƒáƒ›áƒ“áƒ” áƒ‘áƒáƒ•áƒ¨áƒ•áƒ”áƒ‘áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡.
            </p>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#home"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
              aria-label="áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜áƒ¡ áƒ’áƒáƒ–áƒ˜áƒáƒ áƒ”áƒ‘áƒ"
            >
              <Share2 size={20} />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-6 text-lg font-bold">áƒ¡áƒ¬áƒ áƒáƒ¤áƒ˜ áƒ‘áƒ›áƒ£áƒšáƒ”áƒ‘áƒ˜</h4>
            <ul className="space-y-3">
              {[
                ['áƒ©áƒ•áƒ”áƒœ áƒ¨áƒ”áƒ¡áƒáƒ®áƒ”áƒ‘', '#about'],
                ['áƒ¡áƒáƒ‘áƒáƒ•áƒ¨áƒ•áƒ áƒ‘áƒáƒ¦áƒ˜áƒ¡ áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ˜', '#programs'],
                ['áƒ“áƒáƒ¬áƒ§áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒ¡áƒ™áƒáƒšáƒ˜áƒ¡ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ', '#elementary-preparation'],
                ['áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ£áƒšáƒ˜ áƒ¡áƒ”áƒ áƒ•áƒ˜áƒ¡áƒ”áƒ‘áƒ˜', '#therapy'],
              ['Safe Transportation', '#transportation-services'],
                ['áƒáƒ¥áƒ¢áƒ˜áƒ•áƒáƒ‘áƒ”áƒ‘áƒ˜ áƒ“áƒ áƒ¦áƒáƒœáƒ˜áƒ¡áƒ«áƒ˜áƒ”áƒ‘áƒ”áƒ‘áƒ˜', '#activities'],
                ['áƒ’áƒáƒšáƒ”áƒ áƒ”áƒ', '#gallery'],
                ['áƒ™áƒáƒœáƒ¢áƒáƒ¥áƒ¢áƒ˜', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-white/70 transition-colors hover:text-secondary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-bold">áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ˜</h4>
            <ul className="space-y-3 text-white/70">
              <li>áƒ¡áƒáƒ‘áƒáƒ•áƒ¨áƒ•áƒ áƒ‘áƒáƒ¦áƒ˜: 6 áƒ—áƒ•áƒ” - 5 áƒ¬áƒ”áƒšáƒ˜</li>
              <li>áƒ“áƒáƒ¬áƒ§áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒ¡áƒ™áƒáƒšáƒ˜áƒ¡ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ: 6 - 10 áƒ¬áƒ”áƒšáƒ˜</li>
              <li>áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜, áƒ›áƒáƒ—áƒ”áƒ›áƒáƒ¢áƒ˜áƒ™áƒ, áƒ˜áƒœáƒ’áƒšáƒ˜áƒ¡áƒ£áƒ áƒ˜ áƒ“áƒ áƒ¡áƒáƒ¨áƒ˜áƒœáƒáƒ áƒ“áƒáƒ•áƒáƒšáƒ”áƒ‘áƒ˜áƒ¡ áƒ›áƒ®áƒáƒ áƒ“áƒáƒ­áƒ”áƒ áƒ</li>
              <li>áƒžáƒ áƒáƒ¤áƒ”áƒ¡áƒ˜áƒ£áƒšáƒ˜ áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ£áƒšáƒ˜ áƒ¡áƒ”áƒ áƒ•áƒ˜áƒ¡áƒ”áƒ‘áƒ˜</li>
              <li>áƒ—áƒ”áƒáƒ¢áƒ áƒ˜, áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜ áƒªáƒ”áƒ™áƒ•áƒ, áƒ®áƒ”áƒšáƒáƒ•áƒœáƒ”áƒ‘áƒ, áƒ›áƒ£áƒ¡áƒ˜áƒ™áƒ áƒ“áƒ áƒ¦áƒáƒœáƒ˜áƒ¡áƒ«áƒ˜áƒ”áƒ‘áƒ”áƒ‘áƒ˜</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-bold">áƒ™áƒáƒœáƒ¢áƒáƒ¥áƒ¢áƒ˜</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-white/70">
                  áƒáƒ¬áƒ§áƒ£áƒ áƒ˜áƒ¡ áƒ¥áƒ£áƒ©áƒ 10
                  <br />
                  áƒ—áƒ‘áƒ˜áƒšáƒ˜áƒ¡áƒ˜, áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-white/70">+995 579 970 568</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-secondary" />
                <span className="text-white/70">info@tinyleaders.ge</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row"
        >
          <p className="text-sm text-white/60">
            Â© 2026 áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜. áƒ§áƒ•áƒ”áƒšáƒ áƒ£áƒ¤áƒšáƒ”áƒ‘áƒ áƒ“áƒáƒªáƒ£áƒšáƒ˜áƒ.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-colors hover:bg-primary-strong"
            aria-label="áƒ’áƒ•áƒ”áƒ áƒ“áƒ˜áƒ¡ áƒ“áƒáƒ¡áƒáƒ¬áƒ§áƒ˜áƒ¡áƒ¨áƒ˜ áƒ“áƒáƒ‘áƒ áƒ£áƒœáƒ”áƒ‘áƒ"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
