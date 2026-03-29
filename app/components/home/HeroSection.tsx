"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-start overflow-hidden bg-black">
      {/* Background Image Container */}
      <motion.div
        initial={{ scale: 1.1}}
        animate={{ scale: 1}}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "50% 70%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark gradient overlay on left side */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 pt-56">
        <div className="max-w-xl text-left text-balance">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white font-bold leading-tight mb-6 md:text-5xl text-4xl"
          >
            Your Trusted Partner in
            <br />
            Tanker Chartering.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-white/80 text-base md:text-lg leading-relaxed max-w-lg"
          >
            Independent shipbrokers and commercial managers specializing in oil 
            and chemical tankers. Based and headquartered in Singapore since 2012.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
