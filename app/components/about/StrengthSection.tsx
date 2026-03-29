"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Zap, Award, Target, LayoutGrid } from "lucide-react";

export default function StrengthSection() {
  const strengths = [
    {
      title: "Market Activity",
      desc: "AE Marine is active in chartering petroleum and chemical tankers across Southeast Asia and East of Suez markets, consistently delivering reliable commercial performance for its principals.",
      icon: <Target className="w-6 h-6 text-[#007385]" />,
    },
    {
      title: "Expertise",
      desc: "With more than 50 years of combined experience within the team, the company provides full-cycle commercial support between shipowners and charterers, ensuring efficient negotiation, disciplined execution, and structured post-fixture management.",
      icon: <Award className="w-6 h-6 text-[#007385]" />,
    },
    {
      title: "Agility",
      desc: "Operating under an agile structure, rapid deal execution is enabled by a lean and experienced Commercial and Operations team, enhancing operational efficiency while reducing transactional risk for all stakeholders.",
      icon: <Zap className="w-6 h-6 text-[#007385]" />,
    },
  ];

  const clients = [
    {
      name: "Oil Majors",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
    {
      name: "National Oil Companies (NOCs)",
      icon: <LayoutGrid className="w-6 h-6 text-white" />,
    },
    {
      name: "Reputable Global Traders",
      icon: <Users className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f8f9] -z-0 rounded-l-[100px] hidden lg:block" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Competitive Strength */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#002a3a] text-4xl md:text-5xl font-bold mb-8">Competitive Strength.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12">
                Our strength lies in our deep industry expertise, agile decision-making, and specialized market focus.
              </p>

              <div className="space-y-10">
                {strengths.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#007385]/5 flex items-center justify-center border border-[#007385]/10 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-[#002a3a] font-bold text-xl mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed text-[15px]">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Main Clientele */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-[#002a3a] text-4xl md:text-5xl font-bold mb-8 lg:text-right">Main Clientele.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 lg:text-right">
                AE Marine serves established oil majors, national oil companies, and regional energy traders across Asia Pacific.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {clients.map((client, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group bg-white p-3 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl flex items-center gap-6"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#007385] flex items-center justify-center transition-transform group-hover:rotate-6">
                      {client.icon}
                    </div>
                    <h4 className="text-[#002a3a] font-bold text-xl mb-1">{client.name}</h4>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 p-8 bg-[#007385] rounded-3xl text-white relative overflow-hidden group hover:bg-[#002a3a] transition-colors duration-500"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                <p className="text-lg font-medium leading-relaxed relative z-10">
                  The company maintains long-standing commercial relationships built on reliability, disciplined execution, and consistent performance across regional trade corridors.
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
