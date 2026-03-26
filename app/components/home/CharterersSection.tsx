"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Settings } from "lucide-react";

const row1 = [
  "/logo/logo1.png",
  "/logo/logo2.png",
  "/logo/logo3.png",
  "/logo/logo4.png",
  "/logo/logo5.png",
  "/logo/logo6.png",
  "/logo/logo7.png",
];

const row2 = [
  "/logo/logo8.png",
  "/logo/logo9.png",
  "/logo/logo10.png",
  "/logo/logo11.png",
  "/logo/logo12.png",
  "/logo/logo13.png",
  "/logo/logo1.png",
];

export default function CharterersSection() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* <div className="w-10 h-10 bg-[#007385] rounded flex items-center justify-center mb-6">
            <Settings className="text-white w-6 h-6" />
          </div> */}
          <h2 className="text-[#171717] text-4xl md:text-5xl font-bold mb-4">
            Our Charterers.
          </h2>
          <p className="text-gray-500 text-base">
            Specialized solutions for the modern energy shipping industry.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8">
        {/* Row 1: Scroll Right */}
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [-1035, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex flex-none gap-6 px-3"
          >
            {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((logo, index) => (
              <div
                key={index}
                className="flex-none bg-white border border-gray-100 shadow-sm rounded-lg p-6 flex items-center justify-center w-[180px] h-[100px] md:w-[220px] md:h-[120px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt="Charterer Logo"
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scroll Left */}
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex flex-none gap-6 px-3"
          >
            {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((logo, index) => (
              <div
                key={index}
                className="flex-none bg-white border border-gray-100 shadow-sm rounded-lg p-6 flex items-center justify-center w-[180px] h-[100px] md:w-[220px] md:h-[120px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt="Charterer Logo"
                    fill
                    className="object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
