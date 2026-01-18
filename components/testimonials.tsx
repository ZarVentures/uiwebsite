"use client"

import { motion } from "framer-motion"

export default function Testimonials() {
  const testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO, Modern Living Spaces",
      content: "Urban Innovation transformed our office space into a stunning, functional environment. Their attention to detail and professional approach exceeded our expectations. The project was completed on time and within budget.",
      rating: 5,
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "Property Developer",
      content: "Working with Urban Innovation has been an absolute pleasure. Their team's expertise in interior design and project management is outstanding. They delivered a premium finish that perfectly reflects our brand identity.",
      rating: 5,
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      content: "The design team at Urban Innovation created an incredible atmosphere for our restaurant. Their creative vision and technical expertise resulted in a space that not only looks beautiful but functions perfectly for our business needs.",
      rating: 5,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-5 py-2.5 bg-white/80 backdrop-blur-sm text-primary rounded-full text-xs font-semibold tracking-wider uppercase luxury-shadow border border-primary/20 mb-6">
          TESTIMONIALS
        </span>
      </motion.div>
      <motion.h2
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 text-center tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Testimonials
      </motion.h2>
      <motion.p
        className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto text-lg font-light leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        What our clients say about working with us
      </motion.p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="group bg-[#D4AF37] luxury-shadow rounded-2xl p-8 elegant-border premium-hover relative overflow-hidden h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-bl-full"></div>
            <div className="relative">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-white text-xl drop-shadow-sm">★</span>
                ))}
              </div>
              <p className="text-white text-base leading-relaxed font-light mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-white/20 pt-4">
                <h4 className="font-bold text-white mb-1">{testimonial.name}</h4>
                <p className="text-white/80 text-sm font-light uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

