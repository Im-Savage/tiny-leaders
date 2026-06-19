'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Gallery() {
  const galleryItems = [
    {
      src: '/images/tiny-leaders/hero-classroom.png',
      title: 'áƒœáƒáƒ—áƒ”áƒšáƒ˜ áƒ“áƒ áƒ£áƒ¡áƒáƒ¤áƒ áƒ—áƒ®áƒ áƒ¡áƒáƒ¡áƒ¬áƒáƒ•áƒšáƒ áƒ¡áƒ˜áƒ•áƒ áƒªáƒ”',
      category: 'áƒ¡áƒáƒ‘áƒáƒ•áƒ¨áƒ•áƒ áƒ‘áƒáƒ¦áƒ˜',
      tall: true,
    },
    {
      src: '/images/tiny-leaders/learning-program.png',
      title: 'áƒ˜áƒœáƒ¢áƒ”áƒ áƒáƒ¥áƒ¢áƒ˜áƒ£áƒšáƒ˜ áƒáƒ™áƒáƒ“áƒ”áƒ›áƒ˜áƒ£áƒ áƒ˜ áƒ¡áƒ¬áƒáƒ•áƒšáƒ”áƒ‘áƒ',
      category: 'áƒ¡áƒáƒ¡áƒ™áƒáƒšáƒ áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒ',
    },
    {
      src: '/images/tiny-leaders/therapy-services.png',
      title: 'áƒžáƒ áƒáƒ¤áƒ”áƒ¡áƒ˜áƒ£áƒšáƒ˜ áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒ£áƒšáƒ˜ áƒ›áƒ®áƒáƒ áƒ“áƒáƒ­áƒ”áƒ áƒ',
      category: 'áƒ’áƒáƒœáƒ•áƒ˜áƒ—áƒáƒ áƒ”áƒ‘áƒ˜áƒ¡ áƒªáƒ”áƒœáƒ¢áƒ áƒ˜',
    },
    {
      src: '/images/tiny-leaders/field-programs.png',
      title: 'áƒ’áƒáƒ áƒ” áƒ“áƒ áƒ’áƒáƒ¡áƒ•áƒšáƒ˜áƒ—áƒ˜ áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ˜',
      category: 'áƒ’áƒáƒ›áƒáƒªáƒ“áƒ˜áƒšáƒ”áƒ‘áƒ˜áƒ— áƒ¡áƒ¬áƒáƒ•áƒšáƒ',
    },
    {
      src: '/images/tiny-leaders/theater-dance.png',
      title: 'áƒ‘áƒáƒ•áƒ¨áƒ•áƒ—áƒ áƒ—áƒ”áƒáƒ¢áƒ áƒ˜ áƒ“áƒ áƒ¥áƒáƒ áƒ—áƒ£áƒšáƒ˜ áƒªáƒ”áƒ™áƒ•áƒ',
      category: 'áƒ¨áƒ”áƒ›áƒáƒ¥áƒ›áƒ”áƒ“áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒ¡áƒ¢áƒ£áƒ“áƒ˜áƒ”áƒ‘áƒ˜',
      tall: true,
    },
    {
      src: '/images/tiny-leaders/celebrations.png',
      title: 'áƒ¦áƒáƒœáƒ˜áƒ¡áƒ«áƒ˜áƒ”áƒ‘áƒ”áƒ‘áƒ˜ áƒ‘áƒáƒ•áƒ¨áƒ•áƒ”áƒ‘áƒ˜áƒ¡áƒ áƒ“áƒ áƒáƒ¯áƒáƒ®áƒ”áƒ‘áƒ˜áƒ¡áƒ—áƒ•áƒ˜áƒ¡',
      category: 'áƒ–áƒ”áƒ˜áƒ›áƒ”áƒ‘áƒ˜',
    },
    {
      src: '/images/tiny-leaders/creative-classroom.png',
      title: 'áƒ®áƒ”áƒšáƒáƒ•áƒœáƒ”áƒ‘áƒ, áƒ®áƒ”áƒšáƒ¡áƒáƒ¥áƒ›áƒ” áƒ“áƒ áƒ¨áƒ”áƒ›áƒáƒ¥áƒ›áƒ”áƒ“áƒ”áƒ‘áƒ˜áƒ—áƒ˜ áƒžáƒ áƒáƒ”áƒ¥áƒ¢áƒ”áƒ‘áƒ˜',
      category: 'áƒ§áƒáƒ•áƒ”áƒšáƒ“áƒ¦áƒ˜áƒ£áƒ áƒ˜ áƒáƒ¥áƒ¢áƒ˜áƒ•áƒáƒ‘áƒ”áƒ‘áƒ˜',
    },
    {
      src: '/images/tiny-leaders/safe-transportation.svg',
      title: 'Safe and supervised transportation service',
      category: 'Safe Transportation',
    },
  ]

  return (
    <section id="gallery" className="bg-white py-20">
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
              áƒ’áƒáƒšáƒ”áƒ áƒ”áƒ
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              áƒ—áƒ‘áƒ˜áƒšáƒ˜, áƒ—áƒáƒœáƒáƒ›áƒ”áƒ“áƒ áƒáƒ•áƒ” áƒ“áƒ áƒáƒ¥áƒ¢áƒ˜áƒ£áƒ áƒ˜ áƒ¡áƒáƒ¡áƒ¬áƒáƒ•áƒšáƒ áƒ’áƒáƒ áƒ”áƒ›áƒ
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              áƒ—áƒáƒ˜áƒœáƒ˜ áƒšáƒ˜áƒ“áƒ”áƒ áƒ¡áƒ˜áƒ¡ áƒ’áƒáƒ›áƒáƒªáƒ“áƒ˜áƒšáƒ”áƒ‘áƒ áƒáƒ”áƒ áƒ—áƒ˜áƒáƒœáƒ”áƒ‘áƒ¡ áƒ¡áƒáƒ‘áƒáƒ•áƒ¨áƒ•áƒ áƒ‘áƒáƒ¦áƒ˜áƒ¡ áƒ–áƒ áƒ£áƒœáƒ•áƒáƒ¡, áƒáƒ™áƒáƒ“áƒ”áƒ›áƒ˜áƒ£áƒ 
              áƒ›áƒáƒ›áƒ–áƒáƒ“áƒ”áƒ‘áƒáƒ¡, áƒ—áƒ”áƒ áƒáƒžáƒ˜áƒáƒ¡, áƒ¨áƒ”áƒ›áƒáƒ¥áƒ›áƒ”áƒ“áƒ”áƒ‘áƒ˜áƒ— áƒ®áƒ”áƒšáƒáƒ•áƒœáƒ”áƒ‘áƒáƒ¡, áƒ’áƒáƒ áƒ” áƒžáƒ áƒáƒ’áƒ áƒáƒ›áƒ”áƒ‘áƒ¡ áƒ“áƒ áƒáƒ¯áƒáƒ®áƒ£áƒ  áƒ–áƒ”áƒ˜áƒ›áƒ”áƒ‘áƒ¡.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`group relative overflow-hidden rounded-lg shadow-lg ${
                  item.tall ? 'lg:row-span-2' : ''
                }`}
                style={{ minHeight: item.tall ? '430px' : '260px' }}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/82 via-ink/12 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="mb-1 text-sm font-bold text-secondary">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
