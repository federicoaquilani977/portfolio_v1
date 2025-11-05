"use client";
import { motion, useInView, useScroll, useTransform, useMotionValue, PanInfo } from "framer-motion";
import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/lib/data/projects";
import { unsplashImages } from "@/lib/unsplash-images";

const DRAG_THRESHOLD = 50;

interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  tags: string[];
  slug: string;
}

// Generate stable particle positions outside component
const PARTICLE_POSITIONS = Array.from({ length: 15 }, (_, i) => {
  const seed = i * 137.508;
  return {
    left: ((seed * 7) % 100),
    top: ((seed * 13) % 100),
    delay: (i * 0.3) % 5,
    duration: 6 + (i % 4),
    xOffset: ((i % 5) - 2) * 12.5
  };
});

export default function ProjectsPreview() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const projects = getFeaturedProjects().slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projectImages: Record<string, string> = {
    "1": unsplashImages.projects.ecommerce,
    "2": unsplashImages.projects.security,
    "3": unsplashImages.projects.portfolio,
  };

  const paginate = useCallback((newDirection: number) => {
    const newIndex = (currentIndex + newDirection + projects.length) % projects.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, projects.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying, paginate]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const lavaColors = [
    { primary: 'rgba(139, 92, 246, 0.4)', secondary: 'rgba(59, 130, 246, 0.3)' },
    { primary: 'rgba(59, 130, 246, 0.4)', secondary: 'rgba(236, 72, 153, 0.3)' },
    { primary: 'rgba(236, 72, 153, 0.4)', secondary: 'rgba(6, 182, 212, 0.3)' },
    { primary: 'rgba(6, 182, 212, 0.4)', secondary: 'rgba(139, 92, 246, 0.3)' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 md:py-24 bg-black overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      
      {/* LAVA LAMP BACKGROUND */}
      <motion.div 
        style={{ opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div
          style={{ y: y1 }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            borderRadius: ['60% 40% 30% 70%', '40% 60% 70% 30%', '60% 40% 30% 70%'],
            background: [
              lavaColors[currentIndex].primary,
              lavaColors[(currentIndex + 1) % lavaColors.length].primary,
              lavaColors[currentIndex].primary,
            ]
          }}
          transition={{
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 1.5, ease: "easeInOut" }
          }}
          className="absolute top-[10%] right-[15%] w-[500px] h-[500px] blur-[100px]"
        />

        <motion.div
          style={{ y: y2 }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
            borderRadius: ['40% 60% 70% 30%', '70% 30% 50% 50%', '40% 60% 70% 30%'],
            background: [
              lavaColors[currentIndex].secondary,
              lavaColors[(currentIndex + 2) % lavaColors.length].secondary,
              lavaColors[currentIndex].secondary,
            ]
          }}
          transition={{
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 11, repeat: Infinity, ease: "easeInOut" },
            borderRadius: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 1.5, ease: "easeInOut" }
          }}
          className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] blur-[120px]"
        />

        <motion.div
          style={{ y: y3 }}
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 50, 0],
            y: [0, -40, 0],
            borderRadius: ['50% 50% 50% 50%', '30% 70% 70% 30%', '50% 50% 50% 50%'],
            background: [
              lavaColors[(currentIndex + 1) % lavaColors.length].primary,
              lavaColors[(currentIndex + 3) % lavaColors.length].primary,
              lavaColors[(currentIndex + 1) % lavaColors.length].primary,
            ]
          }}
          transition={{
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            x: { duration: 13, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
            borderRadius: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            background: { duration: 1.5, ease: "easeInOut" }
          }}
          className="absolute top-[50%] left-[50%] w-[400px] h-[400px] blur-[90px]"
        />

        {PARTICLE_POSITIONS.map((particle, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, particle.xOffset, 0],
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full blur-sm"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/60" />
      </motion.div>

      <div className="container-custom relative z-10">
        
        {/* MINIMAL HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12 md:mb-16"
        >
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-3 font-medium"
            >
              Featured Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
            >
              Selected Projects
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.4 }}
            className="hidden md:block"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              <span>View All</span>
              <motion.svg 
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-5 h-5"
                fill="none" 
                stroke="currentColor" 
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* CAROUSEL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          
          <SwipeCarousel
            currentIndex={currentIndex}
            projects={projects}
            projectImages={projectImages}
            paginate={paginate}
          />

          {/* Bottom Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="relative group"
                  aria-label={`Go to project ${index + 1}`}
                >
                  <motion.div
                    animate={{
                      width: currentIndex === index ? 48 : 8,
                      backgroundColor: currentIndex === index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.2)'
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-1.5 rounded-full relative overflow-hidden"
                  >
                    {currentIndex === index && isAutoPlaying && (
                      <motion.div
                        key={`progress-${currentIndex}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 7, ease: "linear" }}
                        className="absolute inset-0 bg-white rounded-full"
                      />
                    )}
                  </motion.div>
                </button>
              ))}
            </div>

            <div className="text-gray-500 text-sm font-medium tabular-nums">
              {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </div>
          </div>
        </motion.div>

        {/* View All - Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9 }}
          className="md:hidden text-center mt-12"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// SWIPE CAROUSEL
function SwipeCarousel({
  currentIndex,
  projects,
  projectImages,
  paginate
}: {
  currentIndex: number;
  projects: Project[];
  projectImages: Record<string, string>;
  paginate: (dir: number) => void;
}) {
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (Math.abs(velocity) > 500 || Math.abs(offset) > DRAG_THRESHOLD) {
      if (offset > 0) {
        paginate(-1);
      } else {
        paginate(1);
      }
    }
  };

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      style={{ x }}
      className="relative aspect-video md:aspect-[2.33] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
    >
      
      {/* Glass Shell */}
      <div className="absolute inset-0 bg-linear-to-br from-white/[0.07] to-white/2 backdrop-blur-3xl border border-white/10 pointer-events-none" />

      {/* Cards Stack */}
      <div className="relative h-full">
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => {
          const normalizedIndex = (index + projects.length) % projects.length;
          const project = projects[normalizedIndex];
          const image = projectImages[project.id] || unsplashImages.projects.ecommerce;
          const offset = normalizedIndex - currentIndex;
          const isActive = offset === 0;

          return (
            <motion.div
              key={normalizedIndex}
              initial={false}
              animate={{
                x: `${offset * 100}%`,
                scale: isActive ? 1 : 0.95,
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 1 : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.32, 0.72, 0, 1],
              }}
              className="absolute inset-0"
              style={{ pointerEvents: isActive ? 'auto' : 'none' }}
            >
              <ProjectCard
                project={project}
                image={image}
                index={normalizedIndex}
                isDragging={isDragging}
                isActive={isActive}
              />
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 z-20"
        aria-label="Previous project"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-black/70 hover:scale-110 transition-all duration-300 z-20"
        aria-label="Next project"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Swipe Hint */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-10"
      >
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>Swipe to navigate</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}

// PROJECT CARD
function ProjectCard({ 
  project, 
  image, 
  index,
  isDragging,
  isActive
}: { 
  project: Project; 
  image: string; 
  index: number;
  isDragging: boolean;
  isActive: boolean;
}) {
  return (
    <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-5">
      {/* LEFT: Image */}
      <div className="relative lg:col-span-3 overflow-hidden bg-gray-900">
        <motion.div
          animate={{ scale: isDragging ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority={isActive}
            loading={isActive ? "eager" : "lazy"}
            quality={90}
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/90 lg:to-black" />
        
        {/* Counter Badge */}
        <div className="absolute top-6 md:top-10 left-6 md:left-10">
          <div className="px-4 py-2 bg-black/60 backdrop-blur-xl border border-white/20 rounded-full">
            <span className="text-white text-sm font-bold tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="relative lg:col-span-2 flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-linear-to-br from-black/95 to-black/85 backdrop-blur-sm">
        
        {/* Category */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 text-gray-400 text-xs uppercase tracking-[0.3em] font-medium">
            <div className="w-8 h-px bg-linear-to-r from-accent-purple to-accent-blue" />
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-[1.05] tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.slice(0, 4).map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href={`/projects/${project.slug}`}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            <span>View Project</span>
            <motion.svg 
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
