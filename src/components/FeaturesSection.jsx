"use client";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      
      {/* 🌌 Animated Background (same vibe) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 left-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]"
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
            Core Functionalities
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
            Designed to Demonstrate
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Full-Stack Development
            </span>
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg">
            This project focuses on implementing essential full-stack concepts
            including authentication, public and protected routes, and dynamic
            data handling using a clean and scalable architecture.
          </p>
        </motion.div>

        {/* 🔹 Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Feature 1 */}
          <FeatureCard
            title="Mock Authentication System"
            desc="Implements a secure mock login mechanism using cookies to control user access and protect sensitive routes."
          />

          {/* Feature 2 */}
          <FeatureCard
            title="Public & Protected Routing"
            desc="Allows public access to item listings while restricting item creation features to authenticated users only."
          />

          {/* Feature 3 */}
          <FeatureCard
            title="Dynamic Item Management"
            desc="Fetches and manages item data from an Express.js REST API, demonstrating real-world client-server interaction."
          />

          {/* Feature 4 */}
          <FeatureCard
            title="Modern Responsive Interface"
            desc="Built with Tailwind CSS and Framer Motion to ensure a responsive, accessible, and visually engaging user experience."
          />

        </div>
      </div>
    </section>
  );
}

/* 🔹 Feature Card Component */
function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
    >
      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>
      <p className="mt-4 text-white/70 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}
