"use client";

import { motion } from "framer-motion";
import { Shield, Landmark, Network, UserCheck } from "lucide-react";

export default function CreditSection() {
  const cards = [
    {
      title: "Asset-Light Model",
      desc: "Minimum asset ownership reduces direct exposure to maritime asset impairment, freight rate loss, or hull liability — the primary balance sheet risks in shipping",
      icon: <Shield className="w-8 h-8 text-white" />,
    },
    {
      title: "Institutional Counterparty Exposure",
      desc: "Experience in managing chartering contracts with reputable international companies, ensuring reliability and strong industry relationships.",
      icon: <Landmark className="w-8 h-8 text-white" />,
    },
    {
      title: "Durable Relationship Network",
      desc: "Established owner and charterer relationships built over more than a decade represent a significant barrier to entry and source of recurring revenue",
      icon: <Network className="w-8 h-8 text-white" />,
    },
    {
      title: "Experienced Management",
      desc: "Principal-led structure with 20+ years of sector experience ensures commercial judgment, relationship continuity, and operational accountability",
      icon: <UserCheck className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-[#007385] text-4xl md:text-5xl font-bold mb-4">Credit Narrative.</h2>
          <p className="text-gray-800 text-lg font-medium leading-tight max-w-3xl">
            AE Marine Pte Ltd presents a profile consistent with a well-structured, 
            low-risk chartering platform operating in a strategically important sector.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl border border-gray-100 shadow-lg p-0 overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl"
            >
              <div className="bg-[#007385] p-4 flex items-center justify-center group-hover:bg-[#002a3a] transition-colors duration-500">
                 {card.icon}
              </div>
              <div className="p-8 pb-12 flex-1">
                <h4 className="text-[#171717] text-xl font-bold mb-4">{card.title}</h4>
                <p className="text-gray-500 text-md leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
