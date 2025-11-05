"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { projectsData } from "@/lib/data/projects";

export default function ProjectsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories = ["all", "web", "cybersecurity", "design"];
  
  const filteredProjects = selectedCategory === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section ref={ref} className="py-32 bg-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-accent-purple to-accent-blue text-white"
                    : "bg-white/5 border border-white/10 text-gray-400 hover:border-accent-purple/50 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              layout
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-300 hover:border-accent-purple/50 hover:shadow-glow-purple h-full flex flex-col">
                  <div className="aspect-video bg-linear-to-br from-dark-200 to-dark-300 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-accent-purple/20 to-accent-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <svg
                      className="w-16 h-16 text-gray-600 group-hover:text-accent-purple transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs text-accent-purple font-semibold uppercase">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent-purple transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs text-gray-500">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 bg-accent-purple rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No projects found in this category</p>
          </div>
        )}
      </div>
    </section>
  );
}
