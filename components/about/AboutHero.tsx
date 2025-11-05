"use client";
import { motion } from "framer-motion";
import { aboutData } from "@/lib/data/about";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />
      
      <div className="container-custom relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">{aboutData.hero.title}</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            {aboutData.hero.subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
