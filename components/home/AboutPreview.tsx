"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { unsplashImages } from "@/lib/unsplash-images";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "20+", label: "Projects Completed" },
    { number: "15+", label: "Technologies" },
  ];

  const skills = [
    "React & Next.js",
    "TypeScript",
    "Node.js",
    "Cybersecurity",
    "PostgreSQL",
    "Tailwind CSS",
  ];

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cinema-mesh opacity-50" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-cinema-lg group">
              <Image
                src={unsplashImages.about.workspace}
                alt="Developer workspace"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="absolute bottom-8 left-8 bg-linear-to-r from-accent-purple to-accent-blue p-6 rounded-2xl shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              >
                <div className="text-white">
                  <div className="text-4xl font-black mb-1">100%</div>
                  <div className="text-sm font-semibold opacity-90">Commitment</div>
                </div>
              </motion.div>
            </div>

            {/* Small Image Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute -bottom-12 -right-12 w-64 h-64 rounded-3xl overflow-hidden shadow-cinema-lg border-4 border-black hidden lg:block"
            >
              <Image
                src={unsplashImages.about.learning}
                alt="Learning"
                fill
                className="object-cover"
                sizes="256px"
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-linear-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/50 text-accent-purple text-sm font-bold uppercase tracking-wider">
                About Me
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
            >
              Building{" "}
              <span className="gradient-text">Secure Digital</span>{" "}
              Experiences
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              I&apos;m a full-stack developer with a strong passion for cybersecurity and modern web technologies. 
              I specialize in creating performant, secure, and user-friendly applications that make a difference.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6 py-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-black gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: 0.8 + index * 0.05, type: "spring", stiffness: 200 }}
                  className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-semibold text-gray-300 hover:bg-white/10 hover:border-accent-purple/50 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/about"
                className="group relative px-8 py-4 bg-linear-to-r from-accent-purple to-accent-blue rounded-full text-white font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-accent-blue to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold hover:bg-white/10 hover:border-accent-purple/50 transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
