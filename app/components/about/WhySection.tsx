"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Ship, Clock, Settings, Zap, ShieldCheck, Droplets, Fuel, Anchor } from "lucide-react";

export default function WhySection() {
  const whyItems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "50+ Years Experience.",
      desc: "Combined team expertise navigating through various market cycles and complexities.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Agile Structure.",
      desc: "Streamlined decision-making processes allowing us to respond rapidly to market shifts.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Execution.",
      desc: "High-speed fixture processing and operational turnaround for maximum efficiency.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Reliable Performance.",
      desc: "A proven track record of successful deliveries and long-term partnership stability.",
    },
  ];

  const cargoes = [
    { name: "Dirty Petroleum Products", icon: <Droplets className="w-6 h-6 text-[#007385]" /> },
    { name: "Crude Oil Tanker", icon: <Ship className="w-6 h-6 text-[#007385]" /> },
    { name: "Clean Petroleum Products", icon: <Droplets className="w-6 h-6 text-[#007385]" /> },
    { name: "Fuel Oil", icon: <Fuel className="w-6 h-6 text-[#007385]" /> },
    { name: "Base Oil", icon: <Anchor className="w-6 h-6 text-[#007385]" /> },
    { name: "Palm Oil", icon: <Droplets className="w-6 h-6 text-[#007385]" /> },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Why AE Marine */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 border border-gray-100 rounded-[32px] p-6 md:p-8 xl:p-14 shadow-sm h-fit"
          >
            <h3 className="text-[#002a3a] text-4xl md:text-5xl font-bold mb-4">Why AE Marine?</h3>
            <p className="text-gray-500 text-lg leading-relaxed mb-12">
               Our competitive edge lies in the combination of deep-rooted experience and modern operational efficiency.
            </p>

            <div className="space-y-7">
              {whyItems.map((item, i) => (
                <div key={i}>
                  <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#007385]/5 flex items-center justify-center transition-all duration-300 group-hover:bg-[#007385] group-hover:rotate-6">
                      <div className="transition-colors text-[#007385] group-hover:text-white">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[#002a3a] font-bold text-lg mb-1 group-hover:text-[#007385] transition-colors">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-[15px]">{item.desc}</p>
                    </div>
                  </div>
                  {i < whyItems.length - 1 && <div className="w-full h-[1px] bg-gray-100 mt-8" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Images and Cargoes */}
          <div className="flex-1 space-y-16">
            {/* Top Image */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative rounded-[32px] overflow-hidden shadow-2xl group"
            >
              <Image 
                src="/images/img3.png"
                alt="AE Marine Operational"
                width={800}
                height={500}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Cargoes Grid */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="space-y-8"
            >
              <div>
                <h3 className="text-[#002a3a] text-4xl md:text-5xl font-bold mb-4">Cargoes We Manage.</h3>
                <p className="text-gray-500 text-[15px] max-w-lg leading-relaxed">
                  AE Marine handles a diverse portfolio of critical marine energy cargoes with precision and safety.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cargoes.map((cargo, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white border border-gray-100 p-3 rounded-2xl flex items-center gap-5 shadow-sm hover:shadow-lg transition-all border-l-4 hover:border-l-[#007385]"
                  >
                    <div className="w-14 h-14 bg-[#f0f8f9] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#007385]/10">
                       <div className="text-[#007385]">
                         {cargo.icon}
                       </div>
                    </div>
                    <span className="text-[#002a3a] font-bold text-[15px] leading-tight">{cargo.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
