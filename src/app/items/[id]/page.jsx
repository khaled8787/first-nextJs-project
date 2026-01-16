"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ItemDetailsPage() {
  const router = useRouter();
  const { id } = useParams(); // dynamic route param
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/items?id=${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Item not found");
        return res.json();
      })
      .then(data => {
        setItem(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Loading item details...
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 bg-black">
        Item not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row gap-10"
      >
        {/* Image */}
        <div className="flex-1">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
            <p className="text-white/70 mb-4">{item.description}</p>

            <p className="text-lg font-semibold mb-2">
              Brand: <span className="text-white">{item.brand}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Category: <span className="text-white">{item.category}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Price: <span className="text-purple-400">${item.price}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Stock: <span className="text-green-400">{item.stock}</span>
            </p>
            <p className="text-lg font-semibold mb-2">
              Rating: <span className="text-yellow-400">{item.rating} ⭐</span> ({item.reviews} reviews)
            </p>
          </div>

          <div className="mt-8 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => router.back()}
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10"
            >
              Go Back
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
