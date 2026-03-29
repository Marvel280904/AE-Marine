"use client";

import { motion } from "framer-motion";

export default function FixtureSection() {
  const data = [
    { year: "2022", value: 401, height: 30 },
    { year: "2023", value: 478, height: 45 },
    { year: "2024", value: 645, height: 75 },
    { year: "2025", value: 691, height: 95 },
  ];

  return (
    <section className="bg-[#fcfdfd] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-[#3CA5BB] text-4xl md:text-5xl font-bold mb-6 tracking-tight">Fixture Records within the Group.</h2>
          <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
            Consistent year-on-year growth in spot fixture volume, reflecting strengthening 
            commercial activity and expanding chartering relationships within the group.
          </p>
        </motion.div>

        {/* DESKTOP CHART (md and above) */}
        <div className="hidden xl:block w-full overflow-x-auto pb-12 pt-6 hide-scrollbar">
          <div className="relative min-w-[900px] h-[450px] md:h-[550px] mt-10">
            
            {/* X-Axis Line */}
            <div className="absolute bottom-0 left-[240px] md:left-[280px] w-[calc(100%-280px)] h-[2px] bg-[#171717] z-10" />
            
            {/* Y-Axis Line */}
            <div className="absolute bottom-0 right-0 h-full w-[2px] bg-[#171717] z-10" />

            {/* Legend Boxes and Dashed Lines layer (rendered behind bars) */}
            <div className="absolute inset-0 z-0">
              {data.map((item, i) => (
                 <div 
                   key={`legend-${i}`} 
                   className="absolute left-0 right-[2px] flex items-center" 
                   // Translate vertically so the dashed line perfectly aligns with the bar's top edge
                   style={{ bottom: `${item.height}%`, transform: 'translateY(50%)' }}
                 >
                   {/* Legend Box */}
                   <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="w-[200px] md:w-[230px] border-[2px] border-[#3CA5BB] rounded-lg bg-white flex items-center justify-between px-4 py-[10px] md:py-3 relative z-30"
                   >
                      <span className="text-[#3CA5BB] font-bold text-[15px] md:text-[17px]">{item.value} Spot Fixtures</span>
                      {/* Connection Dot */}
                      <div className="w-[10px] h-[10px] rounded-full bg-[#3CA5BB] absolute -right-[6px] top-1/2 -translate-y-1/2" />
                   </motion.div>

                   {/* Dashed Horizontal Line */}
                   <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                      className="flex-1 h-[2px] border-t-[2px] border-dashed border-[#3CA5BB]/80 ml-1 origin-left" 
                   />
                 </div>
              ))}
            </div>

            {/* Animated Bars layer (rendered above dashed lines) */}
            {/* Spacing from legend (left) to Y-axis (right) */}
            <div className="absolute bottom-[2px] left-[260px] md:left-[320px] right-[2px] h-full flex items-end justify-between z-20">
              {data.map((item, i) => (
                <div key={`bar-${i}`} className="flex flex-col items-center w-[16%] md:w-[15%] h-full justify-end relative group">
                  
                  {/* The Teal Bar */}
                  <motion.div
                     initial={{ height: 0 }}
                     whileInView={{ height: `${item.height}%` }}
                     viewport={{ once: true }}
                     // Synchronize delay with dashed lines drawing
                     transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: "easeOut" }}
                     className="w-full bg-[#3CA5BB] transition-colors duration-300 relative rounded-t-sm shadow-sm"
                  />
                  
                  {/* Year Label */}
                  <div className="absolute -bottom-10 font-bold text-gray-800 text-[16px] md:text-[18px]">{item.year}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* MOBILE CHART (below md) - Vertical Legend Boxes */}
        <div className="block xl:hidden w-full relative h-[450px] mt-16 mb-8 px-2 mx-auto">
          {/* X and Y Axis */}
            <div className="absolute bottom-[35px] left-0 right-0 w-[calc(100%-10px)] h-[2px] bg-[#171717] z-10" />
          <div className="absolute bottom-[35px] right-2 h-[calc(100%-35px)] w-[2px] bg-[#171717] z-10" />

          {/* Bar Columns Container */}
          <div className="absolute bottom-[35px] left-0 right-4 h-[calc(100%-35px)] flex items-end justify-between px-2 pt-20 z-20">
            {data.map((item, i) => (
               <div key={`mob-bar-${i}`} className="flex flex-col items-center justify-end w-[22%] h-full relative group">
                  
                  {/* Legend Box & Dashed Line (Above the Bar) */}
                  <motion.div 
                     initial={{ opacity: 0, y: -10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                     className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                     style={{ bottom: `${item.height}%` }}
                  >
                     {/* Small Legend Box */}
                     <div className="border border-[#3CA5BB] bg-white rounded flex flex-col items-center justify-center p-[6px] shadow-sm w-[68px] sm:w-[80px] relative z-30">
                        <span className="text-[#3CA5BB] font-bold text-[13px] sm:text-[15px] leading-tight mb-[2px]">{item.value}</span>
                        <span className="text-[#3CA5BB] font-medium text-[9px] sm:text-[10px] leading-[1.1] text-center">Spot Fixtures</span>
                        {/* Connection Dot */}
                        <div className="w-[6px] h-[6px] rounded-full bg-[#3CA5BB] absolute -bottom-[3px] left-1/2 -translate-x-1/2" />
                     </div>
                     {/* Vertical Dashed Line connects box to top of the bar */}
                     <div className="h-[12px] sm:h-[16px] w-[2px] border-l-[2px] border-dashed border-[#3CA5BB]/80" />
                  </motion.div>

                  {/* The Teal Bar */}
                  <motion.div
                     initial={{ height: 0 }}
                     whileInView={{ height: `${item.height}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8, delay: i * 0.15 + 0.2, ease: "easeOut" }}
                     className="w-full bg-[#3CA5BB] transition-colors duration-300 relative rounded-t-sm shadow-sm mb-0.5"
                  />
                  
                  {/* Year Label */}
                  <div className="absolute -bottom-8 font-bold text-gray-800 text-[12px] sm:text-[14px]">{item.year}</div>
               </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
