"use client";
import { motion } from "framer-motion";
import { Droplets, Wind, ShieldCheck, Leaf, Sparkles } from "lucide-react";

const benefits = [
  { 
    icon: <Droplets className="w-8 h-8" />, 
    title: "Liquid Repellent", 
    desc: "Advanced hyper-hydrophobic technology makes water pearl off instantly.",
    color: "bg-blue-50 text-blue-600" 
  },
  { 
    icon: <Wind className="w-8 h-8" />, 
    title: "Dust Shield", 
    desc: "Creates an anti-static barrier that prevents dust from bonding to materials.",
    color: "bg-amber-50 text-amber-600" 
  },
  { 
    icon: <ShieldCheck className="w-8 h-8" />, 
    title: "Stain Armor", 
    desc: "Ultimate defense against oils, mud, and accidental coffee spills.",
    color: "bg-emerald-50 text-emerald-600" 
  },
  { 
    icon: <Leaf className="w-8 h-8" />, 
    title: "Bio-Based", 
    desc: "Harnessing rice husk silica for a 100% biodegradable formula.",
    color: "bg-green-50 text-green-600" 
  },
];

export default function BenefitsGrid() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.3em]"
          >
            <Sparkles size={14} /> The EcoShield Edge
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tighter px-2">
            Nature's Performance. <span className="text-slate-400">Bottled.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white border border-slate-100 rounded-[2rem] p-6 sm:p-7 md:p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] hover:border-emerald-100"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 sm:w-16 sm:h-16 ${b.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {b.icon}
              </div>

              {/* Text Content */}
              <h4 className="text-lg sm:text-xl font-black text-slate-800 mb-2 sm:mb-3 tracking-tight">
                {b.title}
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {b.desc}
              </p>

              {/* Subtle accent line on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-emerald-500 transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA / Trust Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 sm:mt-16 md:mt-20 py-6 sm:py-8 border-t border-slate-50 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left"
        >
          <p className="text-sm font-medium text-slate-400 italic">
            "Engineered for the streets, inspired by the earth."
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 rounded-full text-[10px] font-bold text-slate-600 uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Long Lasting
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-50 rounded-full text-[10px] font-bold text-slate-600 uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Odorless
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}