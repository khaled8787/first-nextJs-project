"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-black text-white">
      
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px]"
        />
      </div>

      {/* 🔹 Main Footer Container */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-3"
        >
          {/* 🔰 Brand */}
          <div>
            <h2 className="text-3xl font-extrabold">
              <span className="text-purple-400">Neo</span>Store
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              A modern full-stack application built with Next.js App Router and
              Express.js, featuring public and protected routes with a clean,
              animated user experience.
            </p>
          </div>

          {/* 🔗 Navigation */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link className="hover:text-white transition" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/items">
                  Items
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" href="/add-item">
                  Add Item
                </Link>
              </li>
            </ul>
          </div>

          {/* 🛠️ Tech Stack */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              Built With
            </h3>
            <ul className="space-y-3 text-white/70">
              <li>Next.js 15/16 (App Router)</li>
              <li>Express.js API</li>
              <li>Framer Motion</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </motion.div>

        {/* 🔻 Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/50"
        >
          © {new Date().getFullYear()} NeoStore. This project is developed for educational and demonstration purposes.
          purposes.
        </motion.div>
      </div>
    </footer>
  );
}
