"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Beaker, CheckCircle2, Microscope, ShieldCheck, Zap, Droplets } from "lucide-react";

const results = [
  { test: "Water Resistance", score: 96, icon: <Droplets size={16} /> },
  { test: "Dust & Mud Shield", score: 89, icon: <Zap size={16} /> },
  { test: "Oil & Stain Defense", score: 92, icon: <ShieldCheck size={16} /> },
  { test: "Breathability Retained", score: 100, icon: <CheckCircle2 size={16} /> },
];

const visualProof = [
  {
    title: "Liquid Repellency",
    before: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&q=80&w=400", // Dirty/Wet Look
    after: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=400", // Water beading off
  },
  {
    title: "Stain Protection",
    before: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=400",
    after: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=400",
  }
];

export default function TestingPreview() {
  return (
    <section className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      
      {/* Background Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] rotate-12 pointer-events-none">
        <Microscope size={400} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <Beaker size={14} /> Laboratory Certified
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            Proven by Science. <br /><span className="text-emerald-600">Tested in Reality.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            We don't just claim protection—we measure it. Our bio-silica formula undergoes 
            rigorous stress tests to ensure your sneakers stay deadstock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ── LEFT: DATA DASHBOARD ── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <h3 className="text-2xl font-black text-slate-800 mb-10 flex items-center gap-3">
              Technical Performance <span className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-400">v2.0</span>
            </h3>
            
            <div className="space-y-8">
              {results.map((r, i) => (
                <div key={r.test} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                      <span className="text-emerald-500">{r.icon}</span> {r.test}
                    </div>
                    <span className="text-emerald-600 font-black text-sm">{r.score}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.score}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-50 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Active Protection</p>
                <p className="text-lg font-bold text-slate-800">7-14 Days</p>
              </div>
              <div className="h-10 w-[1px] bg-slate-100" />
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compatibility</p>
                <p className="text-lg font-bold text-slate-800">All Materials</p>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: VISUAL PROOF (BEFORE/AFTER) ── */}
          <div className="space-y-8">
            {visualProof.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white rounded-[2rem] p-4 shadow-xl border border-slate-100 overflow-hidden"
              >
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4 ml-2">
                  {item.title}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {/* Before */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                    <img 
                      src={item.before} 
                      alt="Untreated Shoe" 
                      className="w-full h-full object-cover grayscale" 
                    />
                    <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-black px-2 py-1 rounded-md uppercase">
                      Untreated
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={item.after} 
                      alt="EcoShield Protected" 
                      className="w-full h-full object-cover" 
                    />
                    <div className="absolute top-2 left-2 bg-emerald-500 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase shadow-lg">
                      EcoShield
                    </div>
                    {/* Animated Beading Effect Icon */}
                    <div className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded-full shadow-lg">
                      <Droplets className="text-emerald-500 animate-bounce" size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Trust Note */}
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] italic">
              *Real lab footage on canvas and premium leather materials.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}