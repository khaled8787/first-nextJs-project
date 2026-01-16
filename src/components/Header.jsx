"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* 🔮 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px]"
        />
      </div>

      {/* 🔹 Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto mt-4 w-[95%] rounded-2xl backdrop-blur-xl bg-black/40 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between px-6 py-4">
          {/* 🔰 Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="text-2xl font-bold text-white"
          >
            <span className="text-purple-400">Neo</span>Store
          </motion.div>

          {/* 🖥️ Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/items">Items</NavLink>
            <NavLink href="/login">Login</NavLink>
          </div>

          {/* 📱 Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {/* 📱 Mobile Menu */}
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="md:hidden px-6 pb-6 space-y-4"
          >
            <MobileNav href="/" setOpen={setOpen}>Home</MobileNav>
            <MobileNav href="/items" setOpen={setOpen}>Items</MobileNav>
            <MobileNav href="/login" setOpen={setOpen}>Login</MobileNav>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
}

/* 🔹 Desktop Nav Link */
function NavLink({ href, children }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Link
        href={href}
        className="relative text-white/80 hover:text-white transition"
      >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}

/* 🔹 Mobile Nav Link */
function MobileNav({ href, children, setOpen }) {
  return (
    <Link
      onClick={() => setOpen(false)}
      href={href}
      className="block text-white/80 hover:text-white transition"
    >
      {children}
    </Link>
  );
}
