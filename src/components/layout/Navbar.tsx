"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, Globe, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import PreOrderModal from "@/components/home/PreOrderModal"; // ← path apni project structure k hisab say adjust karo

const links = [
  { label: "Home",           href: "/" },
  { label: "About",          href: "/about" },
  { label: "Features",       href: "/Feature" },
  { label: "Testing",        href: "/testing" },
  { label: "Shop",           href: "/shop" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Team",           href: "/team" },
  { label: "Contact",        href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // ← NEW
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── PRE-ORDER MODAL ── */}
      <PreOrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <nav
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md py-2"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="relative group transition-transform hover:scale-105 active:scale-95">
            <Image
              src="/images/logo1.png"
              alt="EcoShield Logo"
              width={140}
              height={100}
              className="rounded-lg object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-2 mr-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full hover:bg-emerald-50 ${
                      pathname === l.href
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-600 hover:text-emerald-600"
                    }`}
                  >
                    {l.label}
                    {pathname === l.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-600 rounded-full"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* ── CTA BUTTON → opens modal ── */}
            <button
              onClick={() => setModalOpen(true)}
              className="group relative flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Pre-Order Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              {/* Shimmer sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="p-2 text-emerald-600 bg-emerald-50 rounded-full"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[110] lg:hidden"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[120] shadow-2xl p-6 lg:hidden flex flex-col"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="font-bold text-emerald-600 flex items-center gap-2 uppercase tracking-widest text-xs">
                    <Globe className="w-4 h-4" /> EcoShield Navigation
                  </div>
                  <button onClick={() => setOpen(false)} className="p-2 bg-gray-100 rounded-full">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-2 overflow-y-auto">
                  {links.map((l, i) => (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={`block py-4 px-6 rounded-2xl text-lg font-bold transition-all ${
                          pathname === l.href
                            ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                            : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  {/* ── Mobile Pre-Order Button → opens modal ── */}
                  <button
                    onClick={() => { setOpen(false); setModalOpen(true); }}
                    className="flex items-center justify-center gap-2 w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200"
                  >
                    <ShoppingCart className="w-5 h-5" /> Pre-Order Now
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <style jsx global>{`
        body { overflow: ${open ? "hidden" : "auto"}; }
      `}</style>
    </>
  );
}