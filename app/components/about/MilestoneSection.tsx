"use client";

import { motion } from "framer-motion";

export default function MilestoneSection() {
  const milestones = [
    {
      year: "2013",
      title: "OPERATIONS",
      desc: "Started Full Operations, with Oil Traders and National Oil Companies as initial anchor clientele",
      position: "top",
    },
    {
      year: "2017",
      title: "FIRST COA",
      desc: "Executed First Contract of Affreightment (COA) with Oil Major (Shell)",
      position: "bottom",
    },
    {
      year: "2019",
      title: "FIRST T/C",
      desc: "Fixed First Time-Charter of Coastal Tankers Oil Tanker with Oil Major (Shell)",
      position: "top",
    },
    {
      year: "2022",
      title: "3 T/Cs",
      desc: "Fixed 3 Time-Charter of Coastal Tankers with National Oil Company (Petronas)",
      position: "bottom",
    },
    {
      year: "2023",
      title: "STEADY GROWTH",
      desc: "Portfolio grew to 5 Time-Charter Vessels (Coastal Size Tankers) with Oil Major, National Oil Company and Vessel Operator (BTS Tanker)",
      position: "top",
    },
    {
      year: "2024",
      title: "REPUTABLE CONTRACTS",
      desc: "Portfolio grew to 7 Time-Charter contract regionally, inclusive of 1 with Oil Major contract in European Market",
      position: "bottom",
    },
    {
      year: "2025",
      title: "DIVERSIFIED PORTFOLIOS",
      desc: "Total of 8 Time-Charter Vessels (Oil Major and National Oil Company), and multiple Contract of Affreightment (COA) with Oil Majors (Shell, ExxonMobil), Refiners (Petron), Traders (PT AKR Corporindo)",
      position: "top",
    },
  ];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#007385] text-4xl md:text-5xl lg:text-6xl font-bold mb-12"
        >
          Company Milestone.
        </motion.h2>

        {/* DESKTOP TIMELINE (lg and above) */}
        <div className="hidden xl:block w-full">
          {/* Timeline Container - fixed min-width strictly preserves zigzag on all devices */}
          <div className="relative min-w-[1000px] h-[550px] mt-10">
            
            {/* Horizontal Dotted Line */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] border-t-[3px] border-dashed border-[#007385]/30 -translate-y-1/2 z-0" />

            {/* Milestone Items */}
            <div className="flex justify-between items-center w-full h-full relative z-10 px-6">
              {milestones.map((item, i) => (
                <div key={i} className="relative w-44 h-full flex flex-col items-center">
                  
                  {/* TOP HALF */}
                  <div className="h-1/2 w-full flex flex-col justify-end items-center pb-[1px] relative group">
                    {item.position === "top" ? (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 60 }}
                        className="flex flex-col items-center"
                      >
                        {/* Circle */}
                        <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-white border-[5px] border-[#007385]/80 shadow-xl flex items-center justify-center relative z-20">
                          <span className="text-[#171717] text-2xl lg:text-3xl font-bold">{item.year}</span>
                        </div>
                        {/* Connecting Line with Marker */}
                        <div className="w-[3px] h-10 lg:h-14 bg-[#007385] relative z-10 flex justify-center items-end">
                           <div className="w-[18px] h-[18px] rounded-full bg-[#007385] absolute -bottom-[9px] shadow-sm z-30 flex items-center justify-center border-2 border-white">
                               <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-white" />
                           </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 60 }}
                        className="flex flex-col items-center text-center pb-8 px-2"
                      >
                        <h4 className="text-[#007385] font-bold text-lg mb-2 uppercase tracking-wide px-4 leading-tight">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* BOTTOM HALF */}
                  <div className="h-1/2 w-full flex flex-col justify-start items-center pt-[1px] relative group">
                    {item.position === "bottom" ? (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 60 }}
                        className="flex flex-col items-center"
                      >
                        {/* Connecting Line with Marker */}
                        <div className="w-[3px] h-10 lg:h-14 bg-[#007385] relative z-10 flex justify-center items-start">
                           <div className="w-[18px] h-[18px] rounded-full bg-[#007385] absolute -top-[9px] shadow-sm z-30 flex items-center justify-center border-2 border-white">
                               <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-white" />
                           </div>
                        </div>
                        {/* Circle */}
                        <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-white border-[5px] border-[#007385]/80 shadow-xl flex items-center justify-center relative z-20">
                          <span className="text-[#171717] text-2xl lg:text-3xl font-bold">{item.year}</span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 60 }}
                        className="flex flex-col items-center text-center pt-8 px-2"
                      >
                        <h4 className="text-[#007385] font-bold text-lg mb-2 uppercase tracking-wide px-4 leading-tight">{item.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE TIMELINE (below lg) */}
        <div className="block xl:hidden w-full relative mt-8 pb-12 text-left">
          {/* Vertical Dashed Line */}
          <div className="absolute top-12 bottom-12 left-[3.5rem] sm:left-[5rem] w-[2px] border-l-[3px] border-dashed border-[#007385]/30 z-0" />

          <div className="flex flex-col gap-10 relative z-10">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-center w-full relative"
              >
                {/* Circle Container (ensures alignment) */}
                <div className="relative flex items-center justify-center w-[7rem] sm:w-[10rem] flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-[4px] sm:border-[5px] border-[#007385]/80 shadow-lg flex items-center justify-center relative z-20">
                    <span className="text-[#171717] text-xl sm:text-2xl font-bold">{item.year}</span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="ml-2 pr-4 flex-1">
                  <h4 className="text-[#007385] font-bold text-lg sm:text-xl mb-2 uppercase tracking-wide leading-tight">{item.title}</h4>
                  <p className="text-gray-500 text-[13px] sm:text-[14px] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
