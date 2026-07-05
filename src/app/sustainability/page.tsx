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
  TrendingUp,
  Beaker, 
  Flame, 
  Microscope, 
  ShieldCheck, 
  Waves, 
  ArrowRight,
  Zap,
  Atom,
  Thermometer
} from "lucide-react";

// --- DATA ARRAYS ---
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
    desc: "Unlike synthetic PFAS, EcoShield's ingredients break down naturally without harming soil.",
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

const scienceProcess = [
  {
    num: "01",
    title: "Waste Collection",
    detail: "We collect raw rice husks from local mills, preventing them from being burned in open fields.",
    icon: <Sprout className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50",
  },
  {
    num: "02",
    title: "Pre-Treatment",
    detail: "Husks are washed with dilute HCl to remove metallic impurities and rinsed to a neutral pH.",
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
  },
  {
    num: "03",
    title: "Controlled Combustion",
    detail: "Burning at 600–700°C removes organic carbon, leaving behind pure amorphous silica (SiO₂).",
    icon: <Flame className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-50",
  },
  {
    num: "04",
    title: "Silica Extraction",
    detail: "Ash is treated with NaOH to produce sodium silicate, then acidified to precipitate nanoparticles.",
    icon: <Beaker className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50",
  },
  {
    num: "05",
    title: "Nano-Formulation",
    detail: "Particles are modified with hydrophobic agents for water-repellency and dispersed in an eco-carrier.",
    icon: <Microscope className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50",
  },
  {
    num: "06",
    title: "The Shield",
    detail: "The carrier evaporates, leaving a breathable, transparent nano-silica matrix on shoe fibers.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
    color: "bg-blue-50",
  },
];

const techSpecs = [
  { label: "Particle Size", value: "50–200 nm", icon: <Atom />, note: "Deep fiber penetration" },
  { label: "Contact Angle", value: "> 120°", icon: <Waves />, note: "Superhydrophobic threshold" },
  { label: "Silica Purity", value: "~ 94%", icon: <Zap />, note: "High-grade SiO₂" },
  { label: "Thermal Tolerance", value: "600°C", icon: <Thermometer />, note: "High heat stability" },
];

const sdgs = [
  { num: "12", title: "Responsible Consumption", desc: "Sustainable shoe care" },
  { num: "13", title: "Climate Action", desc: "No husk burning" },
  { num: "09", title: "Industry Innovation", desc: "Nano-agri tech" },
  { num: "15", title: "Life on Land", desc: "No toxic runoff" },
];

export default function CombinedImpactSciencePage() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-14 pb-24 sm:pt-20 sm:pb-32 bg-emerald-950 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-[3px]">
              Nature Meets Nanotechnology
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mt-6 sm:mt-8 mb-4 sm:mb-6 leading-tight">
              Molecular Science <br /> 
              <span className="text-emerald-400 italic font-medium">Earth-First Impact.</span>
            </h1>
            <p className="text-base sm:text-xl text-emerald-100/70 leading-relaxed max-w-2xl mx-auto font-light">
              We transform agricultural waste into high-performance silica nanoparticles, 
              creating a future where technology doesn't cost the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- IMPACT DASHBOARD --- */}
      <section className="relative -mt-16 pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {stats.map((s, i) => (
              <motion.div 
                whileHover={{ y: -5 }}
                key={i} 
                className="bg-white p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl shadow-emerald-900/5 border border-slate-100 text-center flex flex-col items-center group transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">{s.value}</h3>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SUSTAINABILITY PILLARS --- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
            <div className="max-w-xl">
               <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Sustainability Pillars</h2>
               <p className="text-slate-500 italic text-sm sm:text-base">The fundamental principles behind every bottle of EcoShield.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-100 mx-8 mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pillars.map((p, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02 }}
                className={`p-7 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border transition-all duration-300 ${p.color} hover:shadow-lg`}
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-5 sm:mb-6">
                   {p.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-800">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium opacity-80">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRANSFORMATION VISUAL --- */}
      <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="md:col-span-2 bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 text-center">
               <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-amber-600" />
               </div>
               <h3 className="font-bold text-lg sm:text-xl uppercase tracking-tight">Agricultural Waste</h3>
               <p className="text-sm text-slate-500 mt-2 italic">Zero-value Rice Husk from Local Mills</p>
            </div>
            <div className="flex justify-center py-2 md:py-0">
               <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg animate-pulse">
                  <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
               </div>
            </div>
            <div className="md:col-span-2 bg-slate-900 p-8 sm:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-xl text-white text-center">
               <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-emerald-400 animate-spin-slow" />
               </div>
               <h3 className="font-bold text-lg sm:text-xl uppercase tracking-tight text-emerald-400">Silica Nanoparticles</h3>
               <p className="text-sm text-emerald-400/50 mt-2 italic">High-Value Protective SiO₂ Matrix</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCIENCE PROCESS --- */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-20">
             <h2 className="text-2xl sm:text-4xl font-bold mb-4 italic uppercase tracking-tighter">The Extraction Journey</h2>
             <p className="text-slate-500 text-sm sm:text-base">6 stages of scientific precision to isolate pure hydrophobic silica.</p>
          </div>

          <div className="relative space-y-6 sm:space-y-10">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-100 hidden lg:block" />
            {scienceProcess.map((p, i) => (
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                key={i} 
                className="relative flex flex-col lg:flex-row gap-4 sm:gap-8 items-start group"
              >
                <div className="z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-xl sm:text-2xl font-black text-slate-200 group-hover:text-emerald-500 transition-colors shrink-0">
                  {p.num}
                </div>
                <div className={`flex-1 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 transition-all duration-300 ${p.color} hover:shadow-lg`}>
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-white rounded-xl shadow-sm flex-shrink-0">{p.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">{p.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECS --- */}
      <section className="py-16 sm:py-24 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-8">
            <div className="lg:col-span-1 text-center lg:text-left">
               <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Technical <br className="hidden lg:block"/>Specs</h2>
               <p className="text-slate-500 text-sm italic">The chemical and physical properties that define EcoShield's performance.</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
               {techSpecs.map((p, i) => (
                  <div key={i} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/5 border border-white/10 hover:bg-emerald-500/10 transition-colors">
                     <div className="text-emerald-500 mb-3 sm:mb-4">{React.cloneElement(p.icon, { size: 24 })}</div>
                     <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">{p.label}</p>
                     <p className="text-2xl sm:text-3xl font-black mt-1 mb-2 tracking-tighter">{p.value}</p>
                     <p className="text-xs text-emerald-400/70 italic">{p.note}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- THE WASTE PROBLEM (CONTEXT) --- */}
      <section className="py-16 sm:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs">
               <TrendingUp size={16} />
               The Local Context
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-slate-900">
              Why Use <br /><span className="text-emerald-500 italic">Rice Husk?</span>
            </h2>
            <div className="space-y-4 sm:space-y-6 text-slate-500 text-base sm:text-lg leading-relaxed font-light">
              <p>
                Pakistan produces over <span className="text-slate-900 font-bold text-lg sm:text-xl underline decoration-emerald-400">7 million tonnes</span> of rice annually. 
                For every tonne, 200kg of husk is generated — most of which is burned in open fields.
              </p>
              <p>
                This releases toxic smoke and CO₂, contributing to the severe smog in Punjab. We solve this by extracting high-value silica from this very waste.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { label: "Rice in Pakistan", val: "7M+ T/Y" },
              { label: "Husk Generated", val: "1.4M T" },
              { label: "Burning Rate", val: "60%" },
              { label: "Silica Content", val: "20%" },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] text-center hover:border-emerald-200 transition-colors">
                <p className="text-2xl sm:text-3xl font-black text-slate-900 mb-1 tracking-tight">{item.val}</p>
                <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SDG ALIGNMENT --- */}
      <section className="py-16 sm:py-24 bg-[rgb(246,250,247)] rounded-[2rem] sm:rounded-[3rem] lg:rounded-[5rem] mx-3 sm:mx-4 mb-8 sm:mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 italic uppercase tracking-tighter">Global Alignment</h2>
          <p className="text-slate-500 mb-10 sm:mb-16 text-sm sm:text-base">Our contribution to the United Nations Sustainable Development Goals.</p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {sdgs.map((s, i) => (
              <motion.div 
                whileHover={{ y: -10 }}
                key={i} 
                className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 shadow-sm relative group overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 text-5xl sm:text-6xl font-black text-emerald-600/5 group-hover:text-emerald-600/10 transition-colors">
                   {s.num}
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl mb-4 sm:mb-6 shadow-lg shadow-emerald-200 relative z-10">
                  {s.num}
                </div>
                <h4 className="text-xs sm:text-sm font-black uppercase text-slate-800 mb-1 sm:mb-2 text-left">{s.title}</h4>
                <p className="text-xs text-slate-500 font-medium text-left">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}