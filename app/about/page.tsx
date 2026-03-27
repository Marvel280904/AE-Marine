"use client";

import { motion } from "framer-motion";
import OverviewSection from "../components/about/OverviewSection";
import WhySection from "../components/about/WhySection";

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      {/* About Hero Section */}
      <section className="relative w-full h-[80vh] flex items-end overflow-hidden bg-[#002a3a]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/about-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)"
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full pb-20">
          <div className="max-w-3xl text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-5xl md:text-6xl font-bold mb-6"
            >
              About AE Marine.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Independent shipbrokers and commercial managers focusing on oil and chemical
              tanker chartering. Delivering global excellence from the heart of Singapore.
            </motion.p>
          </div>
        </div>
      </section>

      <OverviewSection />
      <WhySection />

      {/* Future sections (Team, History, etc.) */}
    </main>
  );
}
