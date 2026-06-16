"use client";
import { motion } from "framer-motion";
import { Leaf, Globe, Sprout, Footprints, ShieldCheck } from "lucide-react";

const stats = [
  { 
    value: "500+", 
    unit: "kg", 
    label: "Rice Husk Upcycled", 
    icon: <Sprout className="w-6 h-6" />,
    desc: "Agricultural waste turned into protection."
  },
  { 
    value: "1,000+", 
    unit: "pairs", 
    label: "Shoes Protected", 
    icon: <Footprints className="w-6 h-6" />,
    desc: "Extending the lifespan of your collection."
  },
  { 
    value: "200+", 
    unit: "kg", 
    label: "CO₂ Offset", 
    icon: <Globe className="w-6 h-6" />,
    desc: "Reducing the carbon footprint of shoe care."
  },
];

export default function SustainabilityBanner() {
  return (
    <section className="relative py-24 bg-[#052c22] overflow-hidden text-white">
      
      {/* ── BACKGROUND DECOR ── */}
      {/* Subtle Rice Husk Grain Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      {/* Animated Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]"
          >
            <Leaf size={14} /> Our Planet, Our Mission
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Waste to Worth. <br />
            <span className="text-emerald-400">Impact beyond the surface.</span>
          </h2>
          <p className="text-emerald-100/60 max-w-2xl mx-auto text-sm md:text-base font-medium">
            At EcoShield, sustainability isn't just a buzzword. We've pioneered a way to 
            harness discarded rice husks to create a high-performance shield for your sneakers.
          </p>
        </div>

        {/* Stats Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-10 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:translate-y-[-5px]"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>

              {/* Number */}
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-black tracking-tighter text-white">
                  {s.value}
                </span>
                <span className="text-lg font-bold text-emerald-400 uppercase tracking-tighter">
                  {s.unit}
                </span>
              </div>

              {/* Label */}
              <h4 className="text-lg font-bold text-white mb-4">
                {s.label}
              </h4>
              <p className="text-emerald-100/40 text-xs leading-relaxed font-medium">
                {s.desc}
              </p>

              {/* Subtle Check Badge */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ShieldCheck className="text-emerald-400/30" size={32} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-500/10 rounded-full">
              <Leaf className="text-emerald-400" size={24} />
            </div>
            <div>
              <p className="font-bold text-sm">Circular Innovation</p>
              <p className="text-xs text-emerald-100/40 font-medium">100% Bio-based Silica Technology</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-emerald-500 text-white font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-emerald-400 shadow-xl shadow-emerald-500/20 transition-all active:scale-95">
            Learn About Our Science
          </button>
        </motion.div>

      </div>
    </section>
  );
}