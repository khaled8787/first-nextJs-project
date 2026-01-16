"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ItemsPreviewSection() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/items") // Express API
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="relative py-32 bg-black text-white overflow-hidden">
      
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 left-1/3 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 right-1/3 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px]"
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
            Items Preview
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
            Explore Featured Products
          </h2>
          <p className="mt-6 text-white/70 text-base md:text-lg leading-relaxed">
            Browse some of the key items available in this project. Each item
            is dynamically fetched from the backend Express.js API to
            demonstrate real-world full-stack data handling.
          </p>
        </motion.div>

        {/* Items Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.length === 0 && (
            <p className="text-white/50 col-span-full text-center">
              Loading items...
            </p>
          )}

          {items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="/items">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold shadow-lg hover:scale-105 transition">
              View All Items
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

/* 🔹 Item Card Component */
function ItemCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
      <p className="mt-2 text-white/70 text-sm">{item.description}</p>
      <p className="mt-4 font-bold text-purple-400">${item.price}</p>
    </motion.div>
  );
}
