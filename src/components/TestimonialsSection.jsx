"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Arif Hossain",
      role: "Frontend Developer (Student)",
      feedback:
        "This project helped me clearly understand how Next.js App Router works with an external Express API. The structure feels like a real-world application.",
    },
    {
      name: "Nusrat Jahan",
      role: "Web Development Learner",
      feedback:
        "The clean UI, dynamic item fetching, and routing approach made this project easy to explore and learn from. It reflects proper full-stack fundamentals.",
    },
    {
      name: "Tanvir Ahmed",
      role: "Junior Software Engineer",
      feedback:
        "A well-structured application that demonstrates authentication flow, public routes, and backend integration in a simple yet effective way.",
    },
  ];

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
            What Learners Say About This Project
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
            Feedback from learners and developers who explored this application
            as part of understanding modern full-stack development using
            Next.js and Express.
          </p>
        </motion.div>

        {/* Testimonials Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              {/* Avatar */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-black font-bold text-lg mb-6">
                {item.name.charAt(0)}
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-6">
                “{item.feedback}”
              </p>

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-xs text-white/50">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
