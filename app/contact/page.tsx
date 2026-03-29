"use client";

import { motion } from "framer-motion";

import { 
  MapPin, 
  Phone, 
  Printer, 
  Mail, 
  Clock 
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-white">
      
      {/* About Hero Section */}
      <section className="relative w-full h-[80vh] flex items-end overflow-hidden bg-[#002a3a]">
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/contact-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "40% 70%",
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
              Get in Touch.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              We are an energetic, adaptable, and open-minded team, committed to working
              diligently and delivering the best outcomes for our clients.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Left Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-fit"
            >
              <h2 className="text-[#171717] text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-[15px]">
                We are an energetic, adaptable, and open-minded team, committed to working
                diligently and delivering the best outcomes for our clients.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007385]/20 focus:border-[#007385] transition-all"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007385]/20 focus:border-[#007385] transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007385]/20 focus:border-[#007385] transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007385]/20 focus:border-[#007385] transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#007385]/20 focus:border-[#007385] transition-all resize-none"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#007385] text-white font-bold py-4 rounded-lg hover:bg-[#005f6e] transition-colors shadow-lg shadow-[#007385]/20"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right Column: Info & Map */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#171717] text-4xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-2 mb-8">
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    Reach out to us for inquiries, chartering opportunities, or further information. Our team is ready to assist you.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Address Card */}
                  <div className="md:col-span-1 md:row-span-2 p-6 rounded-xl border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-[#007385] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[#171717] font-bold text-lg mb-2">Office Address</h3>
                      <p className="text-gray-500 leading-relaxed text-[14px]">
                        Office Address<br />
                        60 Paya Lebar Road<br />
                        #05-42 Paya Lebar Square<br />
                        Singapore 409051
                      </p>
                    </div>
                  </div>

                  {/* Telephone Card */}
                  <div className="p-6 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-[#007385] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[#171717] font-bold text-base mb-1">Telephone</h3>
                      <p className="text-gray-500 text-[14px] font-medium">(65) 6100-3321</p>
                    </div>
                  </div>

                  {/* Fax Card */}
                  <div className="p-6 rounded-xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-[#007385] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[#171717] font-bold text-base mb-1">Email</h3>
                      <p className="text-gray-500 text-[14px] font-medium">chartering@aeships.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map Container */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.760353340673!2d103.89275029999999!3d1.3194919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1818677e43ff%3A0x9053328cc088d24b!2s60%20Paya%20Lebar%20Rd%2C%20Paya%20Lebar%20Square%2C%20Singapore%20409051!5e0!3m2!1sen!2sid!4v1774512819854!5m2!1sen!2sid" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
