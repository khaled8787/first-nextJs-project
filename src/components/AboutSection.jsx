"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      
      {/* 🌌 Animated Background (matching vibe) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 left-1/3 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 right-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔹 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400">
            About NeoStore
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
            A Full-Stack Academic Project
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
            NeoStore is a modern web application built to demonstrate core full-stack 
            development skills including authentication, public and protected routing, 
            and dynamic item management. The project leverages Next.js App Router 
            for frontend development and an Express.js REST API for backend data handling. 
            This application serves as a practical example of implementing secure and scalable 
            web platforms suitable for real-world scenarios.
          </p>
        </motion.div>

       

      </div>
    </section>
  );
}
