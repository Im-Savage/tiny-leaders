'use client'

import type { FormEvent } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="bg-gradient-to-b from-mist to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              áƒ™áƒáƒœáƒ¢áƒáƒ¥áƒ¢áƒ˜ áƒ“áƒ áƒ©áƒáƒ¬áƒ”áƒ áƒ
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              áƒ“áƒáƒ’áƒ”áƒ’áƒ›áƒ”áƒ— áƒ‘áƒáƒ•áƒ¨áƒ•áƒ˜áƒ¡ áƒ’áƒ–áƒ áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ¨áƒ˜
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              áƒ›áƒáƒ’áƒ•áƒ¬áƒ”áƒ áƒ”áƒ—, áƒ’áƒáƒ˜áƒœáƒ¢áƒ”áƒ áƒ”áƒ¡áƒ”áƒ‘áƒ— áƒ¡áƒáƒ‘áƒáƒ•áƒ¨áƒ•áƒ áƒ‘áƒáƒ¦áƒ˜, áƒ“áƒáƒ¬áƒ§áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒ¡áƒ™áƒáƒšáƒ˜áƒ¡ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ,
              áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ£áƒšáƒ˜ áƒ¡áƒ”áƒ áƒ•áƒ˜áƒ¡áƒ”áƒ‘áƒ˜, áƒ¨áƒ”áƒ›áƒáƒ¥áƒ›áƒ”áƒ“áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ˜, áƒªáƒ”áƒ™áƒ•áƒ, áƒ—áƒ”áƒáƒ¢áƒ áƒ˜, áƒ’áƒáƒ áƒ”
              áƒáƒ¥áƒ¢áƒ˜áƒ•áƒáƒ‘áƒ”áƒ‘áƒ˜ áƒ—áƒ£ áƒ¦áƒáƒœáƒ˜áƒ¡áƒ«áƒ˜áƒ”áƒ‘áƒ”áƒ‘áƒ˜. áƒ©áƒ•áƒ”áƒœáƒ˜ áƒ’áƒ£áƒœáƒ“áƒ˜ áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’ áƒœáƒáƒ‘áƒ˜áƒ¯áƒ”áƒ‘áƒ¡ áƒ’áƒáƒ’áƒáƒªáƒœáƒáƒ‘áƒ—.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-lg bg-white p-8 shadow-xl"
            >
              <div className="relative mb-6 h-44 overflow-hidden rounded-lg">
                <Image
                  src="/images/tiny-leaders/hero-classroom.png"
                  alt="áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜áƒ¡ áƒ¡áƒ˜áƒ•áƒ áƒªáƒ” áƒ•áƒ˜áƒ–áƒ˜áƒ¢áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-ink">áƒ©áƒáƒ¬áƒ”áƒ áƒ˜áƒ¡ áƒ˜áƒœáƒ¤áƒáƒ áƒ›áƒáƒªáƒ˜áƒ</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-ink">áƒ›áƒ˜áƒ¡áƒáƒ›áƒáƒ áƒ—áƒ˜</h4>
                    <p className="text-muted">áƒáƒ¬áƒ§áƒ£áƒ áƒ˜áƒ¡ áƒ¥áƒ£áƒ©áƒ 10</p>
                    <p className="text-muted">áƒ—áƒ‘áƒ˜áƒšáƒ˜áƒ¡áƒ˜, áƒ¡áƒáƒ¥áƒáƒ áƒ—áƒ•áƒ”áƒšáƒ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-ink">áƒ¢áƒ”áƒšáƒ”áƒ¤áƒáƒœáƒ˜</h4>
                    <a href="tel:+995579970568" className="text-muted transition-colors hover:text-primary">
                      +995 579 970 568
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-ink">áƒ”áƒš. áƒ¤áƒáƒ¡áƒ¢áƒ</h4>
                    <a href="mailto:info@tinyleaders.ge" className="text-muted transition-colors hover:text-primary">
                      info@tinyleaders.ge
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-ink">áƒ•áƒ˜áƒ–áƒ˜áƒ¢áƒ˜áƒ¡ áƒ“áƒáƒ’áƒ”áƒ’áƒ›áƒ•áƒ</h4>
                    <p className="text-muted">áƒ“áƒáƒ’áƒ”áƒ’áƒ›áƒ”áƒ— áƒ•áƒ˜áƒ–áƒ˜áƒ¢áƒ˜ áƒ‘áƒáƒ•áƒ¨áƒ•áƒ˜áƒ¡ áƒáƒ¡áƒáƒ™áƒ˜áƒ¡, áƒ›áƒ˜áƒ–áƒœáƒ”áƒ‘áƒ˜áƒ¡áƒ áƒ“áƒ áƒ¡áƒáƒ­áƒ˜áƒ áƒáƒ”áƒ‘áƒ”áƒ‘áƒ˜áƒ¡ áƒ’áƒáƒœáƒ¡áƒáƒ®áƒ˜áƒšáƒ•áƒ”áƒšáƒáƒ“.</p>
                    <p className="text-muted">áƒ’áƒáƒ’áƒáƒªáƒœáƒáƒ‘áƒ— áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ¡, áƒ¯áƒ’áƒ£áƒ¤áƒ”áƒ‘áƒ˜áƒ¡ áƒ–áƒáƒ›áƒáƒ¡, áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ˜áƒ¡ áƒ¨áƒ”áƒ¡áƒáƒ«áƒšáƒ”áƒ‘áƒšáƒáƒ‘áƒ”áƒ‘áƒ¡ áƒ“áƒ áƒ©áƒáƒ¬áƒ”áƒ áƒ˜áƒ¡ áƒœáƒáƒ‘áƒ˜áƒ¯áƒ”áƒ‘áƒ¡.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-sky-wash p-6">
                <MapPin className="mb-3 h-10 w-10 text-primary" />
                <h4 className="mb-2 text-xl font-bold text-ink">áƒ’áƒ•áƒ”áƒ¬áƒ•áƒ˜áƒ”áƒ— áƒ—áƒ‘áƒ˜áƒšáƒ˜áƒ¡áƒ¨áƒ˜</h4>
                <p className="leading-relaxed text-muted">
                  áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ˜áƒ¡ áƒáƒ áƒ©áƒ”áƒ•áƒáƒ›áƒ“áƒ” áƒœáƒáƒ®áƒ”áƒ— áƒ¡áƒáƒ™áƒšáƒáƒ¡áƒ áƒáƒ—áƒáƒ®áƒ”áƒ‘áƒ˜, áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ£áƒšáƒ˜ áƒ¡áƒ˜áƒ•áƒ áƒªáƒ”áƒ”áƒ‘áƒ˜,
                  áƒ¨áƒ”áƒ›áƒáƒ¥áƒ›áƒ”áƒ“áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒ¡áƒ¢áƒ£áƒ“áƒ˜áƒ”áƒ‘áƒ˜ áƒ“áƒ áƒáƒ¥áƒ¢áƒ˜áƒ•áƒáƒ‘áƒ”áƒ‘áƒ˜áƒ¡ áƒ’áƒáƒ áƒ”áƒ›áƒ.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg bg-paper p-8 shadow-xl"
            >
              <div className="relative mb-6 h-44 overflow-hidden rounded-lg">
                <Image
                  src="/images/tiny-leaders/learning-program.png"
                  alt="áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜áƒ¡ áƒ©áƒáƒ¬áƒ”áƒ áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡ áƒ›áƒ–áƒ áƒ¡áƒáƒ¡áƒ¬áƒáƒ•áƒšáƒ áƒ¡áƒ˜áƒ•áƒ áƒªáƒ”"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/44 to-transparent" />
              </div>
              <h3 className="mb-6 text-2xl font-bold text-ink">áƒ’áƒáƒ’áƒ–áƒáƒ•áƒœáƒ”áƒ— áƒ©áƒáƒ¬áƒ”áƒ áƒ˜áƒ¡ áƒ›áƒáƒ—áƒ®áƒáƒ•áƒœáƒ</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="parent-name" className="mb-2 block text-sm font-bold text-ink/80">
                      áƒ›áƒ¨áƒáƒ‘áƒšáƒ˜áƒ¡ áƒ¡áƒáƒ®áƒ”áƒšáƒ˜
                    </label>
                    <input
                      id="parent-name"
                      type="text"
                      className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="áƒ›áƒáƒ’áƒáƒšáƒ˜áƒ—áƒáƒ“: áƒœáƒ˜áƒœáƒ"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-bold text-ink/80">
                      áƒ¢áƒ”áƒšáƒ”áƒ¤áƒáƒœáƒ˜
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                      placeholder="+995 579 970 568"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="child-age" className="mb-2 block text-sm font-bold text-ink/80">
                      áƒ‘áƒáƒ•áƒ¨áƒ•áƒ˜áƒ¡ áƒáƒ¡áƒáƒ™áƒ˜
                    </label>
                    <select
                      id="child-age"
                      defaultValue=""
                      className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    >
                      <option value="" disabled>
                        áƒáƒ˜áƒ áƒ©áƒ˜áƒ”áƒ— áƒáƒ¡áƒáƒ™áƒ˜
                      </option>
                      <option>6 áƒ—áƒ•áƒ” - 1 áƒ¬áƒ”áƒšáƒ˜</option>
                      <option>1 - 2 áƒ¬áƒ”áƒšáƒ˜</option>
                      <option>2 - 5 áƒ¬áƒ”áƒšáƒ˜</option>
                      <option>5 áƒ¬áƒ”áƒšáƒ˜</option>
                      <option>6 - 10 áƒ¬áƒ”áƒšáƒ˜</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="program" className="mb-2 block text-sm font-bold text-ink/80">
                      áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ˜áƒ¡ áƒ˜áƒœáƒ¢áƒ”áƒ áƒ”áƒ¡áƒ˜
                    </label>
                    <select
                      id="program"
                      defaultValue=""
                      className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    >
                      <option value="" disabled>
                        áƒáƒ˜áƒ áƒ©áƒ˜áƒ”áƒ— áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ
                      </option>
                      <option>áƒ¡áƒáƒ‘áƒáƒ•áƒ¨áƒ•áƒ áƒ‘áƒáƒ¦áƒ˜áƒ¡ áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ˜</option>
                      <option>áƒ“áƒáƒ¬áƒ§áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒ¡áƒ™áƒáƒšáƒ˜áƒ¡ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ</option>
                      <option>áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ£áƒšáƒ˜ áƒ¡áƒ”áƒ áƒ•áƒ˜áƒ¡áƒ”áƒ‘áƒ˜</option>
                      <option>áƒ‘áƒáƒ•áƒ¨áƒ•áƒ—áƒ áƒ—áƒ”áƒáƒ¢áƒ áƒ˜</option>
                      <option>áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜ áƒªáƒ”áƒ™áƒ•áƒ˜áƒ¡ áƒ¡áƒ¢áƒ£áƒ“áƒ˜áƒ</option>
                      <option>áƒ’áƒáƒ áƒ” áƒ“áƒ áƒ’áƒáƒ¡áƒ•áƒšáƒ˜áƒ—áƒ˜ áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ˜</option>
                      <option>áƒ¦áƒáƒœáƒ˜áƒ¡áƒ«áƒ˜áƒ”áƒ‘áƒ”áƒ‘áƒ˜ áƒ“áƒ áƒ–áƒ”áƒ˜áƒ›áƒ”áƒ‘áƒ˜</option>
                      <option>Safe Transportation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink/80">
                    áƒ”áƒš. áƒ¤áƒáƒ¡áƒ¢áƒ
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    placeholder="info@tinyleaders.ge"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink/80">
                    áƒ¨áƒ”áƒ¢áƒ§áƒáƒ‘áƒ˜áƒœáƒ”áƒ‘áƒ
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border-2 border-brand-line px-4 py-3 transition-colors focus:border-primary focus:outline-none"
                    placeholder="áƒ›áƒáƒ’áƒ•áƒ¬áƒ”áƒ áƒ”áƒ— áƒ‘áƒáƒ•áƒ¨áƒ•áƒ˜áƒ¡ áƒ¨áƒ”áƒ¡áƒáƒ®áƒ”áƒ‘, áƒ¡áƒáƒ¡áƒ£áƒ áƒ•áƒ”áƒšáƒ˜ áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ, áƒ¡áƒáƒ¡áƒ™áƒáƒšáƒ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ˜áƒ¡ áƒ¡áƒáƒ­áƒ˜áƒ áƒáƒ”áƒ‘áƒ”áƒ‘áƒ˜, áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ˜áƒ¡ áƒ™áƒ˜áƒ—áƒ®áƒ•áƒ”áƒ‘áƒ˜ áƒáƒœ áƒ•áƒ˜áƒ–áƒ˜áƒ¢áƒ˜áƒ¡ áƒ¡áƒáƒ¡áƒ£áƒ áƒ•áƒ”áƒšáƒ˜ áƒ“áƒ áƒ..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="brand-button flex w-full items-center justify-center gap-2 rounded-lg px-8 py-4 font-bold transition-all"
                >
                  áƒ›áƒáƒ—áƒ®áƒáƒ•áƒœáƒ˜áƒ¡ áƒ’áƒáƒ’áƒ–áƒáƒ•áƒœáƒ
                  <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
