"use client";

import { motion } from "framer-motion";
import { Users, Globe, ShieldCheck } from "lucide-react";

const solutions = [
  {
    title: "Experienced Team",
    description:
      "Our team brings years of experience in maritime operations, vessel management, and global chartering services to ensure efficient and professional solutions.",
    icon: Users,
  },
  {
    title: "Global Partnerships",
    description:
      "We support international partners and major corporations worldwide, providing dependable logistics services across global shipping routes.",
    icon: Globe,
  },
  {
    title: "Reliable Execution",
    description:
      "Every operation is handled with accuracy and integrity, ensuring smooth coordination from planning to voyage completion.",
    icon: ShieldCheck,
  },
];

export default function SolutionSection() {
  return (
    <section className="relative w-full bg-white pt-20">
      {/* Top Background Area */}
      <div className="relative h-[500px] mx-4 md:mx-10 rounded-xl overflow-hidden shadow-lg">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/img1.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-12 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
              Reliable Maritime
              <br />
              Chartering Solutions.
            </h2>
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Delivering excellence in global maritime logistics through
              precision, expertise, and reliable operational support across
              every voyage.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards Area */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 md:-mt-32 -mt-24 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded-lg shadow-xl border border-gray-50 flex flex-col h-full"
            >
              <div className="w-10 h-10 bg-[#d9e7ef] rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-[#007385]" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#171717] text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
