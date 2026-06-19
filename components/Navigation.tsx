'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import BrandLogo from './BrandLogo'

const navItems = [
  { name: 'áƒ¡áƒáƒáƒ—áƒáƒ‘áƒ áƒ˜áƒ•áƒ˜ áƒ–áƒ áƒ£áƒœáƒ•áƒ', id: '#flexible-childcare' },
  { name: 'áƒ›áƒ—áƒáƒ•áƒáƒ áƒ˜', id: '#home' },
  { name: 'áƒ©áƒ•áƒ”áƒœ áƒ¨áƒ”áƒ¡áƒáƒ®áƒ”áƒ‘', id: '#about' },
  { name: 'áƒ¡áƒáƒ‘áƒáƒ•áƒ¨áƒ•áƒ áƒ‘áƒáƒ¦áƒ˜áƒ¡ áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ˜', id: '#programs' },
  { name: 'áƒ“áƒáƒ¬áƒ§áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒ¡áƒ™áƒáƒšáƒ˜áƒ¡ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ', id: '#elementary-preparation' },
  { name: 'áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ£áƒšáƒ˜ áƒ¡áƒ”áƒ áƒ•áƒ˜áƒ¡áƒ”áƒ‘áƒ˜', id: '#therapy' },
  { name: 'Safe Transportation', id: '#transportation-services' },
  { name: 'áƒáƒ¥áƒ¢áƒ˜áƒ•áƒáƒ‘áƒ”áƒ‘áƒ˜ áƒ“áƒ áƒ¦áƒáƒœáƒ˜áƒ¡áƒ«áƒ˜áƒ”áƒ‘áƒ”áƒ‘áƒ˜', id: '#activities' },
  { name: 'áƒ‘áƒáƒ•áƒ¨áƒ•áƒ—áƒ áƒ—áƒ”áƒáƒ¢áƒ áƒ˜', id: '#childrens-theater' },
  { name: 'áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜ áƒªáƒ”áƒ™áƒ•áƒ˜áƒ¡ áƒ¡áƒ¢áƒ£áƒ“áƒ˜áƒ', id: '#georgian-dance' },
  { name: 'áƒ’áƒáƒšáƒ”áƒ áƒ”áƒ', id: '#gallery' },
  { name: 'áƒ™áƒáƒœáƒ¢áƒáƒ¥áƒ¢áƒ˜', id: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)

    if (!element) {
      return false
    }

    const navOffset = 96
    const top = element.getBoundingClientRect().top + window.scrollY - navOffset

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: 'smooth',
    })

    setIsMobileMenuOpen(false)
    return true
  }

  const scrollToHashTarget = () => {
    const hash = window.location.hash
    if (!hash) return

    const id = hash.startsWith('#') ? hash : `#${hash}`
    let tries = 0
    const maxTries = 25

    const tryScroll = () => {
      const found = scrollToSection(id)

      if (!found && tries < maxTries) {
        tries += 1
        setTimeout(tryScroll, 120)
      }
    }

    setTimeout(tryScroll, 20)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleHashScroll = () => {
      scrollToHashTarget()
    }

    handleHashScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('hashchange', handleHashScroll)
    window.addEventListener('load', handleHashScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('hashchange', handleHashScroll)
      window.removeEventListener('load', handleHashScroll)
    }
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-brand-line bg-white/95 shadow-lg backdrop-blur-md'
          : 'border-b border-white/70 bg-white/82 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex min-h-20 items-center justify-between gap-4 py-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex min-w-fit items-center gap-2 text-left"
            onClick={() => scrollToSection('#home')}
            aria-label="áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜áƒ¡ áƒ›áƒ—áƒáƒ•áƒáƒ áƒ˜ áƒ’áƒ•áƒ”áƒ áƒ“áƒ˜"
          >
            <BrandLogo priority variant="nav" />
            <div className="hidden sm:block">
              <h1 className="brand-rainbow-text text-xl font-bold">áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜</h1>
              <p className="max-w-44 text-xs font-medium leading-snug text-muted">
                áƒ’áƒáƒœáƒáƒ—áƒšáƒ”áƒ‘áƒ˜áƒ¡, áƒ’áƒáƒœáƒ•áƒ˜áƒ—áƒáƒ áƒ”áƒ‘áƒ˜áƒ¡ áƒ“áƒ áƒ¡áƒáƒ¡áƒ™áƒáƒšáƒ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ˜áƒ¡ áƒªáƒ”áƒœáƒ¢áƒ áƒ˜
              </p>
            </div>
          </motion.button>

          <div className="hidden flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-1 xl:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-2.5 py-2 text-xs font-bold leading-tight text-ink transition-colors hover:bg-mist hover:text-primary"
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('#contact')}
            className="brand-button hidden min-w-fit rounded-full px-5 py-2.5 text-sm font-bold xl:inline-flex"
          >
            áƒ©áƒáƒ¬áƒ”áƒ áƒ
          </motion.button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-ink transition-colors hover:bg-mist xl:hidden"
            aria-label="áƒœáƒáƒ•áƒ˜áƒ’áƒáƒªáƒ˜áƒ˜áƒ¡ áƒ›áƒ”áƒœáƒ˜áƒ£"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-brand-line bg-white/97 xl:hidden"
          >
            <div className="container mx-auto grid gap-1 px-4 py-4 sm:grid-cols-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full rounded-lg px-4 py-3 text-left font-semibold text-ink transition-colors hover:bg-mist"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
