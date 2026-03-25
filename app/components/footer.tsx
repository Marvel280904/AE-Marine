"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Printer, 
  Mail, 
  ArrowRight 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111316] text-white pt-20 pb-6">
      <div className="max-w-8xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Logo & About */}
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo/ae-logo.png"
                  alt="AE Marine Logo"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-2xl leading-tight max-w-[280px]">
              Singapore shipbroker for global energy markets.
            </p>
            <Link
              href="/contact"
              className="inline-flex group mt-4"
            >
              <div className="flex p-1 items-center bg-[#007385] overflow-hidden">
                <span className="px-5 text-white text-lg font-medium">
                  Get in Touch
                </span>
                <div className="bg-white p-2 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border border-[#007385] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="w-4 h-4 text-[#007385]" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-12">
            <h3 className="text-lg font-bold mb-8">Quick Links</h3>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-12">
            <h3 className="text-lg font-bold mb-8">Our Services</h3>
            <ul className="space-y-4 text-gray-400 text-[15px]">
              <li><Link href="#" className="hover:text-white transition-colors">Vessel Chartering</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contract of Affreightment</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Market Analysis</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Marine Consultancy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">S&P Brokerage</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:border-l lg:border-gray-800 lg:pl-12">
            <h3 className="text-lg font-bold mb-8">Contact Us</h3>
            <ul className="space-y-6 text-gray-400 text-[15px]">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-white flex-shrink-0" />
                <span>60 Paya Lebar Road<br />#05-42 Paya Lebar Square<br />Singapore 409051</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <span>(65) 6100-3321</span>
              </li>
              <li className="flex gap-4 items-center">
                <Printer className="w-5 h-5 text-white flex-shrink-0" />
                <span>(65) 6491-5145</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:chartering@aeships.com" className="hover:text-white transition-colors">chartering@aeships.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-gray-400 text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Term of Use</Link>
            {/* <Link href="#" className="hover:text-white transition-colors">Cookie Consent</Link> */}
          </div>
          <p className="text-gray-400 text-sm">
            @2026 AEMarine Pte Ltd. All rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
