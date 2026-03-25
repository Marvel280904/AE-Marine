"use client";

import { motion } from "framer-motion";
import { 
  Settings, 
  ShieldCheck, 
  Clock, 
  FileText, 
  BarChart3,
  CheckCircle2
} from "lucide-react";

const whyChooseUs = [
  {
    id: "1",
    title: "Experienced Chartering Team",
    desc: "30+ years of combined experience in chartering, negotiation, and commercial operations."
  },
  {
    id: "2",
    title: "Global Network.",
    desc: "Strategic presence in major shipping hubs including Singapore and Dubai."
  },
  {
    id: "3",
    title: "Strong Clientele",
    desc: "Long term relationships with blue chip oil majors and commodity traders."
  },
  {
    id: "4",
    title: "Low Risk Model",
    desc: "Disciplined approach to commercial management and risk mitigation."
  }
];

const services = [
  {
    title: "Spot Charter.",
    desc: "Efficient single-voyage chartering solutions designed to handle immediate cargo requirements with reliable scheduling and professional operational support.",
    icon: ShieldCheck
  },
  {
    title: "Time Charter.",
    desc: "Long-term vessel hire agreements designed to provide dedicated shipping capacity and stable logistics support for continuous and reliable operations.",
    icon: Clock
  },
  {
    title: "Contract of Affreightment.",
    desc: "Volume-based shipping contracts designed to ensure consistent cargo movement over time, providing reliable scheduling and efficient logistics support for long-term operations.",
    icon: FileText
  },
  {
    title: "Commercial Management.",
    desc: "Full commercial oversight including post-fixture management and voyage accounting, ensuring accurate documentation, financial control, and smooth operational coordination.",
    icon: BarChart3
  }
];

export default function ServiceSection() {
  return (
    <section className="bg-[#f8fafc] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column - Sticky */}
          <div className="lg:sticky lg:top-32 h-fit bg-[#007385] rounded-xl p-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-2">
                Why Choose <br /> AE Marine.
              </h2>
              <p className="text-gray-300 text-[15px] leading-relaxed mb-6 max-w-md">
                We differentiate ourselves through a commitment to operational excellence and financial prudence in the volatile maritime market.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-[#d9e7ef] text-[#007385] rounded flex items-center justify-center font-bold text-sm">
                      {item.id}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-[16px] mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-[13px] leading-snug">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* <div className="w-10 h-10 bg-[#007385] rounded flex items-center justify-center mb-4">
                <Settings className="text-white w-6 h-6" />
              </div> */}
              <h2 className="text-[#171717] text-4xl md:text-5xl font-bold leading-tight mb-2">
                Our Professional <br /> Maritime Services.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Specialized solutions for the modern energy shipping industry. 
                We deliver reliable, efficient, and professional maritime services
                tailored to the specific needs of our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#007385]/10 group"
                >
                  <div className="w-10 h-10 bg-[#d9e7ef] text-[#007385] rounded flex items-center justify-center mb-6">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#171717] text-3xl font-bold mb-4 group-hover:text-[#007385] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
