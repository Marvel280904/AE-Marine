"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, FileText, Zap, Globe } from "lucide-react";

export default function WhyOurServices() {
  const points = [
    {
      title: "Reliable.",
      desc: "Consistency you can bank on for every voyage.",
      icon: <Briefcase className="w-5 h-5 text-white" />,
    },
    {
      title: "Experienced.",
      desc: "Streamlined decision-making processes allowing us to respond rapidly to market.",
      icon: <FileText className="w-5 h-5 text-white" />,
    },
    {
      title: "Efficient.",
      desc: "High-speed fixture processing and operational turnaround for maximum efficiency.",
      icon: <Zap className="w-5 h-5 text-white" />,
    },
    {
      title: "Global Network.",
      desc: "A proven track record of successful deliveries and long-term partnership stability.",
      icon: <Globe className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Background Teal Accent Layer with Slide Animation */}
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 xl:top-[6.5%] lg:top-[6%] xl:w-[87%] lg:w-[95%] h-[120px] bg-[#007385] z-0 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/img4.png"
                alt="Why Our Services"
                width={700}
                height={500}
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col">
            {/* Title Area - Intersects with Teal Bar on Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:mb-12 mb-8"
            >
              <h2 className="lg:text-white text-[#002a3a] text-4xl md:text-5xl font-bold lg:drop-shadow-none drop-shadow-md">
                Why Our Services.
              </h2>
            </motion.div>

            {/* Points Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-500 mb-7 text-lg leading-relaxed">
                With decades of expertise in the maritime industry, AE Marine delivers unparalleled
                brokerage services grounded in data, integrity, and performance.
              </p>

              <div className="space-y-8">
                {points.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#007385] shadow-sm flex items-center justify-center transition-transform group-hover:scale-110">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-[#002a3a] font-bold text-lg leading-tight mb-1">
                        {point.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
