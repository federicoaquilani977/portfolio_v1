"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "@/lib/data/about";

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {aboutData.philosophy.title}
          </h2>
          
          <div className="relative p-8 md:p-12 bg-linear-to-br from-dark-100 to-dark-200 border border-white/10 rounded-3xl">
            <div className="absolute top-0 left-8 -translate-y-1/2">
              <span className="text-6xl text-accent-purple opacity-50">&ldquo;</span>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
              {aboutData.philosophy.content}
            </p>
            
            <div className="absolute bottom-0 right-8 translate-y-1/2">
              <span className="text-6xl text-accent-blue opacity-50">&rdquo;</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
