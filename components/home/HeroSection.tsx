"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { heroData } from "@/lib/data/hero";
import { unsplashImages } from "@/lib/unsplash-images";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={unsplashImages.hero.cyber}
          alt="Cyber background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Animated Mesh Overlay */}
      <div className="absolute inset-0 bg-cinema-mesh" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      
      <motion.div style={{ opacity }} className="container-custom relative z-10 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            {/* Main Title with Glow */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="gradient-text glow-gradient inline-block">
                {heroData.name}
              </span>
            </h1>
            
            {/* Subtitle with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative inline-block"
            >
              <p className="text-2xl md:text-4xl text-accent-purple font-bold mb-4 relative z-10">
                {heroData.role}
              </p>
              <div className="absolute inset-0 blur-xl bg-accent-purple/30" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-6"
            >
              {heroData.tagline}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-lg text-gray-400 max-w-3xl mx-auto"
            >
              {heroData.description}
            </motion.p>
          </motion.div>

          {/* CTA Buttons with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              href={heroData.cta.primary.href}
              className="group relative px-12 py-6 bg-linear-to-r from-accent-purple to-accent-blue rounded-full text-white text-lg font-bold overflow-hidden shadow-cinema-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] transition-all duration-500 hover:scale-110"
            >
              <span className="relative z-10 flex items-center gap-3">
                {heroData.cta.primary.text}
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <Link
              href={heroData.cta.secondary.href}
              className="group px-12 py-6 glass-strong rounded-full text-white text-lg font-bold hover-glow-purple transition-all duration-500 hover:scale-110 border border-white/20 hover:border-accent-purple relative overflow-hidden"
            >
              <span className="relative z-10">{heroData.cta.secondary.text}</span>
              <div className="absolute inset-0 bg-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-24"
          >
            <div className="flex flex-col items-center gap-3 text-gray-400 float-animation">
              <span className="text-sm uppercase tracking-widest font-semibold">Esplora</span>
              <div className="w-6 h-10 border-2 border-accent-purple/50 rounded-full flex items-start justify-center p-2">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-accent-purple rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
