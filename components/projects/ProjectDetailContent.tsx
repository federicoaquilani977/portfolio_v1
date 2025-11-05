"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/lib/types";

interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-dark-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About the Project</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:border-accent-purple/50 hover:bg-white/10 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 bg-black/50 border border-white/10 rounded-xl hover:border-accent-purple/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center mt-1">
                        <svg className="w-4 h-4 text-accent-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
