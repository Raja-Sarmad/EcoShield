"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ShieldCheck, Leaf, ArrowRight, Droplets } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F8FAF8] overflow-hidden pt-16 md:pt-0">
      
      {/* ── BACKGROUND ORNAMENTATION ── */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/50 -skew-x-12 translate-x-24 z-0 hidden lg:block" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          
          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            
            {/* Animated Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-emerald-100/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-200 mt-10"
            >
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-800 text-xs font-bold uppercase tracking-widest ">
                The Future of Shoe Care
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-6xl font-bold text-slate-900 leading-[0.9] tracking-tight"
              >
                Invisible <span className="text-emerald-600">Armor.</span><br />
                <span className="text-slate-400">Sustainable Soul.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl font-bold text-amber-700/80 italic font-serif"
              >
                World's First Rice-Husk Based Protection
              </motion.p>
            </div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              EcoShield creates a hyper-hydrophobic barrier that repels water, mud, and stains using 100% biodegradable ingredients. Protect your investment, protect the earth.
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full h-15"
            >
              <Link 
                href="/shop" 
                className="group flex items-center justify-center gap-3 bg-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-200 hover:bg-emerald-700 transition-all active:scale-95"
              >
                Pre-Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/gallery" 
                className="flex items-center justify-center gap-3 bg-white border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-2xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all shadow-sm"
              >
                <div className="w-4 h-4 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 fill-emerald-600 text-emerald-600 ml-0.5" />
                </div>
                Watch Demo
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 opacity-60 grayscale hover:grayscale-0 transition-all"
            >
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5" /> <span className="font-bold text-sm uppercase">Non-Toxic</span>
              </div>
              <div className="flex items-center gap-2 mb-6">
                <Droplets className="w-5 h-5" /> <span className="font-bold text-sm uppercase">Hydrophobic</span>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT IMAGE SECTION ── */}
          <div className="flex-1 flex justify-center relative w-full">
            
            {/* Animated Base Circle */}
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "circOut" }}
              className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 border-dashed border-emerald-200 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            />

            {/* Feature Badge 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 md:top-20 md:right-0 bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 rounded-2xl">
                  <span className="text-2xl font-bold text-amber-700 leading-none">0%</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400">Chemicals</p>
                  <p className="font-bold text-slate-800">Bio-Based</p>
                </div>
              </div>
            </motion.div>

            {/* Feature Badge 2 */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute bottom-10 left-0 bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-xl border border-white z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-100 rounded-2xl">
                   <Droplets className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black text-slate-400">Durability</p>
                  <p className="font-bold text-slate-800">4+ Weeks Protection</p>
                </div>
              </div>
            </motion.div>

            {/* Bottle Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/bottle1.jpeg"
                  alt="EcoShield Spray Bottle"
                  width={500}
                  height={600}
                  className="drop-shadow-[0_50px_50px_rgba(16,185,129,0.2)] lg:scale-110"
                  priority
                />
              </motion.div>
              
              {/* Ground Shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-6 bg-emerald-900/10 blur-xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}