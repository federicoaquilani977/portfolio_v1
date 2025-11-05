"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "@/lib/data/about";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <p className="text-lg text-gray-400">Professional qualifications and achievements</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {aboutData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-black/50 border border-white/10 rounded-2xl hover:border-accent-purple/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent-purple transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-accent-purple font-medium mb-2">{cert.issuer}</p>
                  {cert.description && (
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                  )}
                </div>
                <div className="text-gray-500 text-sm md:text-right">
                  {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
