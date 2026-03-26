"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollState, setScrollState] = useState<"top" | "hidden" | "visible">("top");
  const lastScrollY = useRef(0);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname === href) return true;
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY <= 10) {
        setScrollState("top");
      } else if (currentY > lastScrollY.current) {
        // Scrolling down
        setScrollState("hidden");
      } else {
        // Scrolling up
        setScrollState("visible");
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ 
        y: scrollState === "hidden" ? -100 : 0,
        backgroundColor: scrollState === "visible" ? "rgb(0, 115, 133)" : "transparent",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0 relative z-[60]">
          <Image
            src="/logo/ae-logo.png"
            alt="AE Marine Logo"
            width={160}
            height={80}
            className="object-contain md:w-[160px] md:h-[80px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative flex items-center gap-2 text-base font-medium text-white transition-colors hover:text-white"
            >
              <div className="flex items-center gap-2">
                {isActive(link.href) && (
                  <motion.span
                    layoutId="active-dot"
                    className="w-1.5 h-1.5 rounded-full bg-white"
                  />
                )}
                <span className={isActive(link.href) ? "text-white" : "text-white/70"}>
                  {link.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Desktop Get in Touch button */}
        <Link
          href="/contact"
          className="hidden lg:flex group"
        >
          <div className="flex items-center p-1 bg-white rounded-[2px] overflow-hidden transition-all duration-300">
            <span className="px-5 text-[#171717] text-[15px] font-medium">
              Get in Touch
            </span>
            <div className="bg-[#007385] p-1 flex items-center justify-center border-l border-white/10">
              <div className="w-5 h-5 rounded-full border border-white/60 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden relative z-[60] text-white p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-[#002a3a]/fb backdrop-blur-xl lg:hidden overflow-hidden border-b border-white/10"
            style={{ backgroundColor: "rgba(0, 42, 58, 0.95)" }}
          >
            <div className="pt-24 pb-10 px-8 flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="text-xl font-medium text-white/90 hover:text-white flex items-center gap-3"
                  >
                    {isActive(link.href) && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center p-1 justify-between bg-white rounded-[2px] overflow-hidden"
                >
                  <span className="px-5 text-[#171717] text-[16px] font-bold">
                    Get in Touch
                  </span>
                  <div className="bg-[#007385] p-3">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
