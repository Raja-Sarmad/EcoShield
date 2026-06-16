"use client";
import { motion } from "framer-motion";
import { Sprout, TestTube2, FlaskConical, ShieldCheck, ArrowRight } from "lucide-react";

const steps = [
  { 
    num: "01", 
    title: "Raw Harvest", 
    desc: "Upcycling discarded rice husks from local milling industries.", 
    icon: <Sprout className="w-8 h-8" />,
    color: "text-amber-600",
    bg: "bg-amber-50"
  },
  { 
    num: "02", 
    title: "Green Extraction", 
    desc: "Extracting high-purity silica using eco-friendly green chemistry.", 
    icon: <TestTube2 className="w-8 h-8" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50"
  },
  { 
    num: "03", 
    title: "Nano-Formulation", 
    desc: "Precision blending of bio-silica into our signature spray formula.", 
    icon: <FlaskConical className="w-8 h-8" />,
    color: "text-emerald-600",
    bg: "bg-emerald-100"
  },
  { 
    num: "04", 
    title: "Shield Activation", 
    desc: "Instantly creates a breathable, invisible nano-armor on any material.", 
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "text-white",
    bg: "bg-emerald-600"
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#9c6a55] font-bold text-[10px] uppercase tracking-[0.4em]"
          >
            The Engineering
          </motion.p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
            From Earth <span className="text-emerald-600">to Armor.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Our proprietary process turns agricultural waste into high-performance 
            protection. Sustainable science at its peak.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-slate-200 -z-0" />

          {steps.map((s, i) => (
            <motion.div 
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-10 text-6xl font-black text-slate-100 group-hover:text-emerald-50 transition-colors duration-500 -z-10 select-none">
                {s.num}
              </div>

              {/* Icon Container */}
              <div className={`w-24 h-24 ${s.bg} ${s.color} rounded-[2rem] flex items-center justify-center mb-6 shadow-xl shadow-slate-200/50 group-hover:scale-110 transition-transform duration-500 relative z-10 border-4 border-white`}>
                {s.icon}
                
                {/* Arrow (Desktop Only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-8 lg:-right-6 top-1/2 -translate-y-1/2 text-slate-300 group-hover:text-emerald-400 transition-colors">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <h4 className="text-xl font-black text-slate-800 tracking-tight">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                  {s.desc}
                </p>
              </div>

              {/* Progress Dot (on the line) */}
              <div className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-slate-300 group-hover:border-emerald-500 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Science Note */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-8 rounded-[2.5rem] bg-slate-900 text-white text-center flex flex-col items-center gap-6"
        >
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Non-Toxic. Bio-Based. High Performance.</h3>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Unlike traditional sprays that use PFOAs and harsh chemicals, EcoShield 
              leverages rice-husk nanotechnology to provide a safer environment for your 
              shoes and the planet.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}