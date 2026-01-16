"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/3 w-[480px] h-[480px] bg-purple-600/20 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 220, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/2 right-1/3 w-[480px] h-[480px] bg-cyan-500/20 rounded-full blur-[180px]"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-black/50 backdrop-blur-2xl p-12 md:p-20 shadow-[0_40px_120px_rgba(0,0,0,0.7)]"
        >
          <p className="text-sm uppercase tracking-widest text-purple-400">
            Get Started Today
          </p>

          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold leading-tight">
            Ready to Explore a Real-World <br className="hidden md:block" />
            Next.js & Express Application?
          </h2>

          <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Experience a clean architecture, dynamic item fetching, and modern
            routing built with Next.js App Router. This project is designed to
            help learners understand how frontend and backend work together in
            a practical way.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/items">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold shadow-lg"
              >
                Browse Items
              </motion.button>
            </Link>

            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
              >
                Login to Continue
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
