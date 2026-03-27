"use client";

import { motion } from "framer-motion";
import { Compass, Globe } from "lucide-react";

export default function OverviewSection() {
  const stats = [
    { value: "500 +", label: "Fixtures Completed" },
    { value: "15 +", label: "Trade Routes" },
    { value: "10M +", label: "Tonnes Shipped" },
    { value: "24/7", label: "Availability" },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Top: Overview & Stats */}
        <div className="flex flex-col lg:flex-row gap-8 mb-24">
          {/* Left: Text Box */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-gradient-to-br from-[#f0f8f9] to-white p-10 md:p-14 rounded-3xl border border-[#007385]/10 shadow-sm relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#007385]" />
            <h2 className="text-[#171717] text-4xl md:text-5xl font-bold mb-8">Our Overview.</h2>
            <div className="space-y-6 text-gray-500 text-[17px] leading-relaxed">
              <p>
                AE Marine Pte Ltd is an independent shipbroker and consultant in Marine
                Transportation for the energy markets. The company is based and headquartered
                in Singapore and we engage ourselves actively in the Tanker Chartering market.
              </p>
              <p>
                Throughout the years, we have grown steadily in strength to focus on Vessel
                Chartering. The company has fixed and managed fixtures ranging from small
                tankers up to large parcel sizes. We cater to serve our customers, moving
                mainly Crude Oil, Petroleum Products, Chemicals, as well as Palm Products.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <div className="w-full lg:w-[45%] flex flex-wrap gap-4 items-center justify-center relative rounded-3xl overflow-hidden min-h-[400px]">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: "url('/images/img2.png')",
              }}
            />
            <div className="absolute inset-0 bg-[#001f2b]/40 backdrop-blur-[1px] z-[1]" />
            
            <div className="grid grid-cols-2 gap-6 relative z-10 w-full p-8 md:p-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="backdrop-blur-sm border border-white/20 p-4 rounded-xl group hover:bg-white/20 transition-all duration-300 text-center flex flex-col items-center justify-center"
                >
                  <p className="text-white text-2xl lg:text-3xl font-bold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-[11px] lg:text-[12px] font-medium uppercase tracking-[0.2em] whitespace-nowrap">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Top Icon Shape */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full p-2 shadow-lg z-20 flex items-center justify-center">
              <div className="w-full h-full bg-[#007385]/5 rounded-full border border-[#007385]/20 flex items-center justify-center">
                <Compass className="w-10 h-10 text-[#007385]" />
              </div>
            </div>
            {/* Card Content */}
            <div className="bg-[#f0f9fa]/50 border border-[#007385]/10 p-12 pt-16 rounded-[40px] text-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007385]/20 to-transparent" />
              <h3 className="text-[#171717] text-3xl font-bold mb-6 italic">Our Mission</h3>
              <p className="text-gray-500 text-lg leading-relaxed px-4">
                Deliver excellence in maritime chartering through strategic insights, operational integrity, and a commitment to sustainable growth for our global partners.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Top Icon Shape */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full p-2 shadow-lg z-20 flex items-center justify-center">
              <div className="w-full h-full bg-[#007385]/5 rounded-full border border-[#007385]/20 flex items-center justify-center">
                <Globe className="w-10 h-10 text-[#007385]" />
              </div>
            </div>
            {/* Card Content */}
            <div className="bg-[#f0f9fa]/50 border border-[#007385]/10 p-12 pt-16 rounded-[40px] text-center shadow-inner relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#007385]/20 to-transparent" />
              <h3 className="text-[#171717] text-3xl font-bold mb-6 italic">Our Vision</h3>
              <p className="text-gray-500 text-lg leading-relaxed px-4">
                To become a trusted global maritime chartering partner, recognized for our agility, deep industry expertise, and unwavering reliability in a dynamic market.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
