"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Recycle, 
  FlaskConical, 
  Leaf, 
  MapPin, 
  BatteryCharging, 
  Package, 
  Globe, 
  Wind, 
  Sprout, 
  Ban,
  CheckCircle2,
  TrendingUp
} from "lucide-react";

const stats = [
  { value: "500+ kg", label: "Rice Husk Utilized", icon: <Sprout className="text-emerald-500" /> },
  { value: "1000+", label: "Shoes Protected", icon: <CheckCircle2 className="text-blue-500" /> },
  { value: "200+ kg", label: "CO₂ Saved", icon: <Wind className="text-sky-500" /> },
  { value: "0%", label: "Toxic Chemicals", icon: <Ban className="text-red-500" /> },
];

const pillars = [
  {
    icon: <Recycle className="w-6 h-6 text-amber-600" />,
    title: "Circular Economy",
    desc: "Transforming zero-value rice husk waste directly from local mills into premium nanomaterial.",
    color: "bg-amber-50 border-amber-100",
  },
  {
    icon: <FlaskConical className="w-6 h-6 text-blue-600" />,
    title: "Green Chemistry",
    desc: "Using low-temp combustion and dilute acids to minimize our chemical and energy footprint.",
    color: "bg-blue-50 border-blue-100",
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    title: "Biodegradable",
    desc: "Unlike synthetic PFAS, EcoShield’s ingredients break down naturally without harming soil.",
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: <MapPin className="w-6 h-6 text-purple-600" />,
    title: "Local Sourcing",
    desc: "100% sourced within Pakistan — reducing transport emissions and supporting local farmers.",
    color: "bg-purple-50 border-purple-100",
  },
  {
    icon: <BatteryCharging className="w-6 h-6 text-orange-600" />,
    title: "Energy Efficient",
    desc: "Our process requires significantly less energy than conventional synthetic waterproofing.",
    color: "bg-orange-50 border-orange-100",
  },
  {
    icon: <Package className="w-6 h-6 text-rose-600" />,
    title: "Eco-Packaging",
    desc: "Recycled PET bottles and soy-based inks. No plastic bubbles, just pure responsibility.",
    color: "bg-rose-50 border-rose-100",
  },
];

const sdgs = [
  { num: "12", title: "Responsible Consumption", desc: "Sustainable shoe care" },
  { num: "13", title: "Climate Action", desc: "No husk burning" },
  { num: "09", title: "Industry Innovation", desc: "Nano-agri tech" },
  { num: "15", title: "Life on Land", desc: "No toxic runoff" },
];

export default function SustainabilityPage() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 bg-emerald-950 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-[3px]">
              Our Social Responsibility
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-8 mb-6 leading-tight">
              Nature-First <br /> 
              <span className="text-emerald-400 italic font-medium">Innovation.</span>
            </h1>
            <p className="text-xl text-emerald-100/70 leading-relaxed max-w-2xl mx-auto font-light">
              We believe in a future where high-performance products don't cost the earth. 
              EcoShield is our pledge to the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- IMPACT DASHBOARD --- */}
      <section className="relative -mt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((s, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} 
                className="bg-white p-8 rounded-[2rem] shadow-xl shadow-emerald-900/5 border border-slate-100 text-center flex flex-col items-center group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{s.value}</h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6 PILLARS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
               <h2 className="text-4xl font-bold mb-4">Our Sustainability Pillars</h2>
               <p className="text-slate-500 italic">The fundamental principles that guide every bottle we produce.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-100 mx-8 mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className={`p-10 rounded-[3rem] border transition-all duration-300 ${p.color} hover:shadow-lg`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                   {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-80">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE RICE HUSK STORY --- */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-xs">
               <TrendingUp size={16} />
               The Waste Problem
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Why We Use <br /><span className="text-emerald-500">Rice Husk?</span></h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                Pakistan produces over <span className="text-white font-bold text-xl">7 million tonnes</span> of rice annually. 
                For every tonne, 200kg of husk is generated — and most of it is burned in open fields.
              </p>
              <p>
                This burning releases toxic smoke, CO₂, and contributes to the severe smog in Punjab and Sindh.
              </p>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                 <p className="text-emerald-400 font-bold">The EcoShield Solution:</p>
                 <p className="text-sm mt-2 italic text-slate-300">
                    "We collect this agricultural waste and extract its pure silica content, turning a major pollutant into a premium, safe product."
                 </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Rice in Pakistan", val: "7M+ T/Y" },
              { label: "Husk Generated", val: "1.4M T" },
              { label: "Burning Rate", val: "60%" },
              { label: "Silica Content", val: "20%" },
            ].map((item, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                key={i} 
                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center hover:bg-emerald-500/10 transition-colors"
              >
                <p className="text-3xl font-black text-emerald-400 mb-1 tracking-tight">{item.val}</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-tight">{item.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SDG ALIGNMENT --- */}
      <section className="py-24 bg-[rgb(246,250,247)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">UN SDG Alignment</h2>
          <p className="text-slate-500 mb-16">Our contribution to the United Nations Sustainable Development Goals.</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgs.map((s, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative group"
              >
                <div className="absolute top-4 right-6 text-4xl font-black text-emerald-600/10 group-hover:text-emerald-600/20 transition-colors">
                   {s.num}
                </div>
                <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-emerald-200">
                  {s.num}
                </div>
                <h4 className="text-sm font-black uppercase text-slate-800 mb-2">{s.title}</h4>
                <p className="text-xs text-slate-500 font-medium">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}