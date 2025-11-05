"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { aboutData } from "@/lib/data/about";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    { title: "Frontend", skills: aboutData.skills.frontend, color: "accent-purple" },
    { title: "Backend", skills: aboutData.skills.backend, color: "accent-blue" },
    { title: "Cybersecurity", skills: aboutData.skills.cybersecurity, color: "accent-purple" },
    { title: "Tools & DevOps", skills: aboutData.skills.tools, color: "accent-blue" },
  ];

  return (
    <section ref={ref} className="py-32 bg-black">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-400">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="p-8 bg-dark-100 border border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + index * 0.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-accent-purple/50 hover:bg-white/10 transition-all"
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
