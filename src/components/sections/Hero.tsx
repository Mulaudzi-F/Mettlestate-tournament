"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[98vh] w-full">
      <Image
        src="/hero.png"
        alt="Esports Tournament"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-4">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
            Legends of Victory: Battle Royale Cup
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Compete for glory. Only one can win.
          </p>
          <Button className="px-6 py-3 text-sm sm:text-base bg-red-600 hover:bg-red-700">
            Register Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
