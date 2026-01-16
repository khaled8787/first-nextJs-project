"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading items...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Our Items</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {items.map(item => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-black/40 border border-white/10 rounded-3xl backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-2xl mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-white/70 text-sm mb-4">{item.description}</p>
            <p className="font-bold text-lg mb-4">${item.price}</p>

            <Link href={`/items/${item.id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-auto py-2 px-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-black font-semibold"
              >
                View Details
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
