'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'ნინო გ.',
      role: '4 წლის ბავშვის მშობელი',
      text: 'თაინი ლიდერსში მივიღეთ ზუსტად ის გარემო, რასაც ვეძებდით: სითბო, უსაფრთხოება და პროფესიული მიდგომა. ჩემი შვილი ყოველ კვირას უფრო დამოუკიდებელი და გახსნილი ხდება.',
    },
    {
      name: 'თამარ კ.',
      role: 'სასკოლო მზაობის ჯგუფის მშობელი',
      text: 'სასკოლო მზაობის პროგრამამ ბავშვს კონცენტრაციაში, კომუნიკაციასა და თავდაჯერებაში ძალიან დაეხმარა. პედაგოგები მშობლებთანაც ძალიან ყურადღებიანები არიან.',
    },
    {
      name: 'ლევან მ.',
      role: '7 წლის მოსწავლის მშობელი',
      text: 'დაწყებითი სკოლის მოსამზადებელი პროგრამა ჩვენი ოჯახისთვის რეალური მხარდაჭერა გახდა. საშინაო დავალება უფრო მშვიდად მიდის, მათემატიკა გაუმარტივდა და ბავშვი უფრო მოტივირებულია.',
    },
    {
      name: 'მარიამ ს.',
      role: 'თერაპიული მხარდაჭერის მშობელი',
      text: 'თერაპიის გუნდი მშვიდად და პროფესიონალურად მუშაობს. ბავშვს თავი დაცულად აქვს, ჩვენ კი მკაფიო რეკომენდაციებს და რეალურ მხარდაჭერას ვიღებთ.',
    },
  ]

  return (
    <section id="testimonials" className="bg-gradient-to-b from-white to-mist py-20">
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
              მშობლების შეფასებები
            </p>
            <h2 className="mb-5 text-4xl font-bold text-ink md:text-5xl">
              ოჯახები თაინი ლიდერსს ზრუნვის, პროგრესისა და თავდაჯერებისთვის ენდობიან
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted">
              მშობლები აფასებენ ცენტრს, სადაც საბავშვო ბაღი, დაწყებითი სკოლის მომზადება,
              თერაპია, შემოქმედებითი აქტივობები და ოჯახთან კომუნიკაცია ერთიანად მუშაობს.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="rounded-lg border-2 border-brand-line bg-white p-8 shadow-lg transition-all hover:border-primary hover:shadow-2xl"
              >
                <Quote className="mb-4 h-10 w-10 text-primary/22" />
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-6 text-lg leading-relaxed text-ink/78">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xl font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-ink">{testimonial.name}</h3>
                    <p className="text-sm text-muted">{testimonial.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-14 rounded-lg bg-gradient-to-r from-primary via-accent to-leaf p-8 text-center text-white shadow-xl md:p-12"
          >
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              დაგეგმეთ ვიზიტი და ნახეთ თაინი ლიდერსის სრული გარემო
            </h3>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed">
              ვიზიტის დროს გაგაცნობთ პროგრამებს, სასწავლო ჯგუფებს, თერაპიულ სერვისებს,
              დღის რიტმს და თქვენს ბავშვზე მორგებულ საუკეთესო გზას.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
