"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { contactData } from "@/lib/data/contact";

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-dark-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {contactData.hero.title}
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            {contactData.hero.subtitle}
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-5 bg-linear-to-r from-accent-purple to-accent-blue rounded-full text-white text-lg font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-glow-purple"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
