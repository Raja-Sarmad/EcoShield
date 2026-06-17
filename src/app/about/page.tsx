"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Leaf, 
  FlaskConical, 
  ShieldCheck, 
  Recycle, 
  Droplets, 
  Wind, 
  Sparkles, 
  CheckCircle2 
} from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: "Natural Origin",
    desc: "Derived from rice husk — a byproduct of rice milling that would otherwise be discarded.",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-emerald-600" />,
    title: "Silica-Based Formula",
    desc: "Advanced silica nanoparticles form the invisible core of EcoShield's protective coating.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    title: "Invisible Protection",
    desc: "The nano-layer bonds with fibers without changing texture, color, or breathability.",
  },
  {
    icon: <Recycle className="w-6 h-6 text-emerald-600" />,
    title: "Zero Harsh Chemicals",
    desc: "PFAS-free, no solvents. Perfectly safe for humans, pets, and the planet.",
  },
];

const steps = [
  { 
    step: "01", 
    title: "Spray", 
    desc: "Hold 15–20 cm from shoe. Spray evenly across the surface.",
    icon: <Wind className="w-5 h-5" />
  },
  { 
    step: "02", 
    title: "Bond", 
    desc: "Silica particles penetrate fibers to form a hydrophobic matrix.",
    icon: <FlaskConical className="w-5 h-5" />
  },
  { 
    step: "03", 
    title: "Protect", 
    desc: "In just 2-3 minutes, your shoe is shielded from the elements.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
];

const useCases = [
  { type: "Sneakers", desc: "Keeps whites bright.", icon: "👟" },
  { type: "Leather", desc: "Water resistance.", icon: "👞" },
  { type: "Canvas", desc: "Stain prevention.", icon: "👟" },
  { type: "Suede", desc: "Breathable shield.", icon: "🥾" },
];

export default function AboutPage() {
  return (
    <div className="bg-white overflow-hidden text-slate-900">
      
      {/* --- HERO SECTION --- */}
      {/* Background color ko rgb(246, 250, 247) mein change kar diya gaya hai */}
      <section className="relative pt-5 pb-20 lg:pt-10 lg:pb-32 bg-[rgb(246,250,247)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 lg:space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-100 shadow-sm">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span className="text-[10px] uppercase tracking-[2px] font-bold text-emerald-800">The Future of Shoe Care</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Invisible Shield. <br />
                <span className="text-emerald-600 font-medium tracking-normal">Nature's Wisdom.</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl">
                EcoShield is a rice husk–derived silica spray that creates an invisible nano-protective
                layer. It repels water, blocks dust, and resists stains — 100% biodegradable.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  { label: "Bottle Size", val: "100ml" },
                  { label: "Coating Life", val: "5-7 Days" },
                  { label: "Eco-Friendly", val: "100%" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-md border border-white rounded-2xl p-4 min-w-[120px] shadow-sm">
                    <p className="text-2xl font-bold text-slate-900">{stat.val}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 relative flex justify-center"
            >
              {/* Decorative blob (Light Green/Emerald) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <Image
                  src="/images/bottle3.png"
                  alt="EcoShield Bottle"
                  width={380}
                  height={500}
                  className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.12)] object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- MECHANISM SECTION --- */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Science Behind the Shield</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              How we turn agricultural waste into the world's most advanced protective coating.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, idx) => (
              <motion.div whileHover={{ y: -5 }} key={idx} className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-100 relative group">
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-200 transition-transform">
                  {s.icon}
                </div>
                <span className="absolute top-8 right-8 text-5xl font-black text-slate-200 opacity-20 group-hover:opacity-40 transition-opacity">{s.step}</span>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">
                Crafted for Performance, <br />
                Inspired by <span className="text-emerald-600">Sustainability.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">{f.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900">{f.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-emerald-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
               <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                       <Droplets className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-xs">Superior Hydrophobicity</span>
                  </div>
                  <h3 className="text-3xl font-medium mb-6 leading-snug">
                    Unlike traditional sprays, EcoShield doesn't just block water; it makes it "bead" and roll off instantly.
                  </h3>
                  <ul className="space-y-4">
                    {['100% Breathable Material', 'Non-Toxic & Safe', 'Dries in < 3 Minutes'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-emerald-100/80">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-800 rounded-full opacity-50 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPATIBILITY --- */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-12 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">One Spray, Infinite Uses</h2>
          <p className="text-slate-400 mb-16">Tested on all major footwear materials.</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((u, i) => (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                key={i} 
                className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700 hover:border-emerald-500 transition-colors group"
              >
                <div className="text-5xl mb-4 bg-slate-800 w-20 h-20 flex items-center justify-center rounded-2xl mx-auto group-hover:bg-slate-700 transition-colors">
                  {u.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{u.type}</h4>
                <p className="text-sm text-slate-400">{u.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}