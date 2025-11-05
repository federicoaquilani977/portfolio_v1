"use client";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-black overflow-hidden">
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
            <span className="gradient-text">My Projects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400"
          >
            Explore my work in web development, cybersecurity, and design
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
