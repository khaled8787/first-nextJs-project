"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Layers, Zap, Globe } from "lucide-react";

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Layers size={32} />,
      title: "Modern App Architecture",
      description:
        "Built using Next.js App Router with a clean and scalable structure, ensuring maintainability and real-world development practices."
    },
    {
      icon: <Zap size={32} />,
      title: "Dynamic Data Handling",
      description:
        "All product data is fetched from an Express.js API, demonstrating real-time data flow between frontend and backend."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Structured & Secure Approach",
      description:
        "Includes authentication flow, public routes, and a clear separation of concerns following industry standards."
    },
    {
      icon: <Globe size={32} />,
      title: "Fully Responsive Experience",
      description:
        "Designed to work seamlessly across devices with a responsive layout and smooth animations for better user experience."
    }
  ];

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-purple-600/20 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-cyan-500/20 rounded-full blur-[140px]"
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
          <p className="text-sm uppercase tracking-widest text-cyan-400">
            Why Choose This Platform
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
            Designed for Learning, Built Like a Real Product
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
            This project is not just a UI demonstration. It is structured to
            reflect real-world application development using modern tools,
            clear architecture, and dynamic data integration.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-black mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
