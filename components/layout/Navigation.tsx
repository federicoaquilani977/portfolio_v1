"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navigationData } from "@/lib/data/hero";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? "bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-24">
            
            {/* Logo con Effetto Premium */}
            <Link href="/" className="group relative z-10">
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <span className="text-3xl md:text-4xl font-black gradient-text relative z-10 tracking-tight">
                  {navigationData.logo}
                </span>
                
                {/* Glow sotto il logo on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -inset-2 blur-2xl bg-linear-to-r from-accent-purple/30 to-accent-blue/30 -z-10 rounded-lg"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation - Centered & Spaced */}
            <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navigationData.links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.1 + index * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  <Link
                    href={link.href}
                    className="relative group px-6 py-3 block"
                  >
                    {/* Active Background */}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="navBubble"
                        className="absolute inset-0 bg-linear-to-r from-accent-purple/20 via-accent-blue/20 to-accent-purple/20 rounded-2xl"
                        transition={{ 
                          type: "spring", 
                          bounce: 0.2, 
                          duration: 0.6 
                        }}
                      />
                    )}
                    
                    {/* Hover Background */}
                    <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Text */}
                    <span className={`relative z-10 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                      isActive(link.href)
                        ? "text-white"
                        : "text-gray-400 group-hover:text-white"
                    }`}>
                      {link.name}
                    </span>

                    {/* Underline Glow */}
                    <motion.div
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-transparent via-accent-purple to-transparent"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ 
                        width: isActive(link.href) ? "100%" : 0,
                        opacity: isActive(link.href) ? 1 : 0
                      }}
                      whileHover={{ width: "100%", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden md:block"
            >
              <Link
                href="/contact"
                className="group relative px-6 py-3 bg-linear-to-r from-accent-purple to-accent-blue rounded-full text-white text-sm font-bold overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              >
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute inset-0 bg-linear-to-r from-accent-blue to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 hover:scale-105"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-0.5 bg-linear-to-r from-accent-purple to-accent-blue rounded-full"
                />
                <motion.span
                  animate={{
                    opacity: isOpen ? 0 : 1,
                    scaleX: isOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-0.5 bg-linear-to-r from-accent-purple to-accent-blue rounded-full"
                />
                <motion.span
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-0.5 bg-linear-to-r from-accent-purple to-accent-blue rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-40 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300 
              }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-linear-to-br from-black via-dark-200 to-black border-l border-white/10 z-50 md:hidden overflow-y-auto shadow-[0_0_80px_rgba(139,92,246,0.3)]"
            >
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all hover:scale-110"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Logo */}
                <div className="mb-16 mt-4">
                  <span className="text-4xl font-black gradient-text">
                    {navigationData.logo}
                  </span>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-3">
                  {navigationData.links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`group block relative py-5 px-6 rounded-2xl transition-all duration-300 ${
                          isActive(link.href)
                            ? "bg-linear-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-purple/50"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-purple/30"
                        }`}
                      >
                        <span className={`relative z-10 flex items-center justify-between text-xl font-bold ${
                          isActive(link.href) ? "text-white" : "text-gray-400 group-hover:text-white"
                        }`}>
                          {link.name}
                          
                          <motion.svg
                            className="w-6 h-6"
                            animate={{
                              x: isActive(link.href) ? [0, 5, 0] : 0,
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: isActive(link.href) ? Infinity : 0,
                              ease: "easeInOut"
                            }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </motion.svg>
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="block w-full py-5 text-center bg-linear-to-r from-accent-purple to-accent-blue rounded-2xl text-white text-lg font-bold shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
