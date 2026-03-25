"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full h-[500px] flex items-center overflow-hidden bg-black">
      {/* Background Image with Parallax-like effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/img-cta.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full flex justify-end">
        <div className="max-w-2xl text-right flex flex-col items-end">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Ready to Discuss Your
            <br />
            Shipping Requirements?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white/80 text-lg mb-10 max-w-lg leading-relaxed"
          >
            Our experienced team is here to provide you with tailored solutions for all your marine
            transportation needs. Contact us today for a consultation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Link
              href="/contact"
              className="inline-flex group"
            >
              <div className="flex items-center p-1 bg-white rounded-[2px] overflow-hidden transition-all duration-300">
                <span className="px-5 text-black text-lg font-medium">
                  Email Us Directly
                </span>
                <div className="bg-[#007385] p-2 flex items-center justify-center border-l border-white/10">
                  <div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
