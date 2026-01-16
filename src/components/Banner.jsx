"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      
      {/* 🔮 Animated Background (Same Navbar Vibe) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.15, 1] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[140px]"
        />
      </div>

      {/* 🔹 Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative max-w-5xl mx-auto px-6"
      >
        <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] p-10 md:p-16 text-center">

          {/* 🚀 Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm tracking-widest uppercase text-purple-400 mb-4"
          >
            Next.js • Express • Modern UI
          </motion.p>

          {/* 🔥 Main Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Discover & Manage <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Products
            </span>{" "}
            Seamlessly
          </motion.h1>

          {/* 📝 Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-2xl mx-auto text-white/70 text-base md:text-lg"
          >
            A feature-rich Next.js application with authentication, public and
            protected routes, and dynamic product management powered by an
            Express.js API.
          </motion.p>

          {/* 🔘 CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link href="/items">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold shadow-lg"
              >
                View Items
              </motion.button>
            </Link>

            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl border border-white/20 text-white backdrop-blur-md hover:bg-white/10 transition"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
