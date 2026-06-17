"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, ShieldAlert, ArrowRight } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      
      {/* Background Decorative Text (Very subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[9vw] font-black text-black/[0.02] select-none pointer-events-none whitespace-nowrap">
        TRANSFORMATION
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-3 h-3" /> The Science of Freshness
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
            Old Problems. <span className="text-emerald-600">Modern Protection.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* ── LEFT: THE PROBLEM ── */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200 border border-slate-100 relative group"
          >
            <div className="absolute top-6 right-8 text-slate-200 group-hover:text-red-100 transition-colors">
              <ShieldAlert size={60} strokeWidth={1} />
            </div>
            
            <p className="text-red-500 font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <AlertTriangle size={14} /> The Vulnerability
            </p>
            <h3 className="text-3xl font-black text-slate-800 mb-6 leading-tight">
              Life is Messy. <br />Your Shoes Pay.
            </h3>
            
            <ul className="space-y-4 mb-8">
              {[
                { t: "Irreversible water stains", d: "Canvas and suede ruined by rain." },
                { t: "Deep-seated mud & dirt", d: "Hours of scrubbing, zero results." },
                { t: "Chemical odors", d: "Toxic sprays that hurt the planet." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{item.t}</p>
                    <p className="text-xs text-slate-400">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-slate-50 rounded-2xl p-4 border border-dashed border-slate-200">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Cost of Neglect</p>
              <p className="text-sm font-medium text-slate-600">Average shoe lifespan reduced by <span className="text-red-500 font-bold">60%</span> without protection.</p>
            </div>
          </motion.div>

          {/* ── CENTER: THE CATALYST (BOTTLE) ── */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-12 lg:py-0">
            
            {/* Animated Pulse Ring */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute w-64 h-64 bg-emerald-400 rounded-full blur-3xl -z-10"
            />
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <Image 
                src="/images/bottle2.png" 
                alt="EcoShield Bottle" 
                width={350} 
                height={500} 
                className="drop-shadow-[0_35px_35px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform duration-500"
              />
              
              {/* Dynamic Label */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap shadow-2xl">
                The Game Changer
              </div>
            </motion.div>

            {/* Connection Arrows (Desktop Only) */}
            <div className="hidden lg:block absolute left-[-20%] top-1/2 -translate-y-1/2 text-slate-200">
               <ArrowRight size={40} className="animate-pulse" />
            </div>
            <div className="hidden lg:block absolute right-[-20%] top-1/2 -translate-y-1/2 text-emerald-200">
               <ArrowRight size={40} className="animate-pulse" />
            </div>
          </div>

          {/* ── RIGHT: THE SOLUTION ── */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-emerald-600 rounded-[2.5rem] p-8 shadow-2xl shadow-emerald-200 relative overflow-hidden group"
          >
            {/* Decorative background circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-700" />
            
            <p className="text-emerald-100 font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
              <CheckCircle2 size={14} /> The EcoShield Effect
            </p>
            <h3 className="text-3xl font-black text-white mb-6 leading-tight">
              Wear Forever. <br />Worry Never.
            </h3>

            <ul className="space-y-4 mb-8 relative z-10">
              {[
                { t: "Nano-Hydrophobic Shield", d: "Liquid pearls right off the surface." },
                { t: "Dust-Repelling Barrier", d: "Stay clean even on the dirtiest streets." },
                { t: "Bio-Based Protection", d: "Sustainable rice-husk technology." }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="bg-white/20 p-1 rounded-full h-fit mt-1">
                    <CheckCircle2 className="text-white" size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{item.t}</p>
                    <p className="text-xs text-emerald-100/70">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="relative z-10 w-full py-4 bg-white text-emerald-700 font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-50 transition-colors shadow-xl active:scale-95">
              Experience The Magic
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}