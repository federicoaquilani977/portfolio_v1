"use client";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectNavigationProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  return (
    <section className="py-16 bg-black border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex-1 p-6 bg-dark-100 border border-white/10 rounded-2xl hover:border-accent-purple/50 transition-all"
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous Project
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors">
                {prevProject.title}
              </h3>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex-1 p-6 bg-dark-100 border border-white/10 rounded-2xl hover:border-accent-purple/50 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-gray-400 text-sm mb-2">
                Next Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold group-hover:text-accent-purple transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </section>
  );
}
