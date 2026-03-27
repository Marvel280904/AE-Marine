"use client";

import { motion } from "framer-motion";
import WhyOurServices from "../components/services/WhyOurServices";
import {
    Anchor,
    FileText,
    BarChart2,
    Lightbulb,
    HandshakeIcon,
    AlertTriangle,
    Network,
} from "lucide-react";

const services = [
    {
        number: "01",
        title: "Vessel Chartering",
        subtitle: "Spot & Time Charter",
        description:
            "Efficient voyage-based and long-term vessel solutions for your cargo requirements. We provide direct access to global tanker markets for both prompt spot fixtures and strategic time charter arrangements.",
        icon: <Anchor className="w-7 h-7" />,
    },
    {
        number: "02",
        title: "Contract of Affreightment",
        subtitle: "Volume-Based Shipping",
        description:
            "Volume-based shipping contracts providing cost predictability and guaranteed capacity for large, recurring cargo movements across global trade routes.",
        icon: <FileText className="w-7 h-7" />,
    },
    {
        number: "03",
        title: "Market Analysis",
        subtitle: "Strategic Intelligence",
        description:
            "Deep-dive market research and freight rate analysis to support informed chartering decisions. We analyze trade flows, vessel supply/demand, and geopolitical factors to keep you ahead.",
        icon: <BarChart2 className="w-7 h-7" />,
    },
    {
        number: "04",
        title: "Marine Consultancy",
        subtitle: "Expert Advisory",
        description:
            "Expert advisory on market trends, vessel valuations, and regulatory compliance within the maritime sector. Our experienced team delivers actionable insights tailored to your operational needs.",
        icon: <Lightbulb className="w-7 h-7" />,
    },
    {
        number: "05",
        title: "Sales & Purchase Brokerage",
        subtitle: "Vessel Transactions",
        description:
            "Professional facilitation of vessel acquisitions and disposals. We connect buyers and sellers, manage due diligence, and negotiate optimal terms to ensure seamless S&P transactions.",
        icon: <HandshakeIcon className="w-7 h-7" />,
    },
    {
        number: "06",
        title: "Claims Management",
        subtitle: "Risk Mitigation",
        description:
            "Comprehensive support in handling maritime disputes, cargo claims, and laytime calculations. We act as your advocate to minimize financial exposure and resolve claims efficiently.",
        icon: <AlertTriangle className="w-7 h-7" />,
    },
    {
        number: "07",
        title: "Supply Chain Analysis",
        subtitle: "Logistics Optimization",
        description:
            "End-to-end supply chain evaluation and optimization for energy sector clients. We identify bottlenecks, evaluate alternatives, and deliver solutions that improve efficiency and reduce costs.",
        icon: <Network className="w-7 h-7" />,
    },
];

export default function ServicesPage() {
    return (
        <main className="flex flex-col bg-white">

            {/* Hero Section */}
            <section className="relative w-full h-[80vh] flex items-end overflow-hidden bg-[#002a3a]">
                {/* Background Image */}
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/services-bg.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "50% 70%",
                        backgroundRepeat: "no-repeat",
                    }}
                />

                {/* Dark Overlay */}
                <div
                    className="absolute inset-0 z-[1]"
                    style={{
                        background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%)"
                    }}
                />

                {/* Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full pb-20">
                    <div className="max-w-3xl text-left">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white text-5xl md:text-6xl font-bold mb-6"
                        >
                            Our Services.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
                        >
                            At AE Marine, we are more than shipbrokers—we act as analysts and consultants for 
                            your shipping needs. We aim to be a leading Total Logistics Solutions provider for 
                            the energy sector, delivering shipments safely, securely, and cost-effectively.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-20 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-8 md:px-16">

                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-[#007385] font-bold tracking-widest uppercase text-sm mb-4">What We Offer</p>
                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                            <h2 className="text-[#0a1628] text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
                                End-to-End Maritime Solutions.
                            </h2>
                            <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
                                From a single fixture to a full supply chain strategy—we deliver precision at every step.
                            </p>
                        </div>
                        <div className="w-full h-px bg-gray-100 mt-14" />
                    </motion.div>

                    {/* Services List */}
                    <div className="space-y-0">
                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.07 }}
                                className="group border-b border-gray-100 py-10 md:py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-pointer hover:bg-[#f8feff] transition-colors duration-300 px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl"
                            >
                                {/* Number */}
                                <div className="text-[#007385]/20 md:text-6xl text-5xl font-black leading-none font-mono flex-shrink-0 group-hover:text-[#007385]/40 transition-colors duration-300 min-w-[80px]">
                                    {service.number}
                                </div>

                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-[11px] font-bold text-[#007385] uppercase tracking-[0.2em] bg-[#007385]/5 px-3 py-1 rounded-full">
                                            {service.subtitle}
                                        </span>
                                    </div>
                                    <h3 className="text-[#0a1628] text-2xl md:text-3xl font-bold group-hover:text-[#007385] transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-400 mt-1 text-[15px] leading-relaxed max-w-2xl">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Icon */}
                                <div className="hidden md:flex w-14 h-14 rounded-2xl bg-[#007385]/5 flex-shrink-0 items-center justify-center text-[#007385] group-hover:bg-[#007385] group-hover:text-white transition-all duration-300 group-hover:rotate-6">
                                    {service.icon}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WhyOurServices />

        </main>
    );
}
