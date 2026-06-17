"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  Droplets, 
  ShieldCheck, 
  Wind, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  Zap,
  FlaskConical
} from "lucide-react";

const demos = [
  { id: 1, title: "Water Bead Test", category: "Water", icon: <Droplets />, desc: "High-speed footage of water droplets rolling off treated fabric instantly." },
  { id: 2, title: "Mud Splash Test", category: "Stain", icon: <Layers />, desc: "Heavy mud applied to sneakers — watch it slide off with just a light wipe." },
  { id: 3, title: "Dust Chamber Test", category: "Dust", icon: <Wind />, desc: "30-minute exposure to fine particulate dust with zero fiber penetration." },
  { id: 4, title: "White Sneaker Test", category: "Stain", icon: <Sparkles />, desc: "Maintaining factory-fresh brightness on white canvas after stain exposure." },
  { id: 5, title: "Rain Simulation", category: "Water", icon: <Droplets />, desc: "10-minute artificial downpour test — interior moisture remains 0%." },
  { id: 6, title: "Leather Shoe Demo", category: "Leather", icon: <ShieldCheck />, desc: "Enhanced water resistance on premium leather without altering natural sheen." },
];

const categories = ["All", "Water", "Stain", "Dust", "Leather"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? demos : demos.filter(d => d.category === active);

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-[rgb(246,250,247)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-[3px]">
              Visual Validation
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-8 mb-6 tracking-tight leading-[1.1]">
              Seeing is <span className="text-emerald-600 italic">Believing.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Explore our laboratory demonstrations and real-world performance tests 
              showcasing the power of rice-husk silica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FILTER & GRID --- */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Tabs */}
          <div className="flex gap-2 justify-center flex-wrap mb-16">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
                  active === c 
                    ? "bg-slate-900 border-slate-900 text-white shadow-xl" 
                    : "bg-white text-slate-400 border-slate-100 hover:border-emerald-200 hover:text-emerald-600"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid with Framer Motion Animation */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filtered.map(d => (
                <motion.div
                  key={d.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all group"
                >
                  <div className="h-56 bg-emerald-100/50 flex items-center justify-center text-emerald-600 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500">
                        {d.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                       <span className="text-[10px] bg-emerald-600 text-white font-black px-2.5 py-1 rounded-md uppercase tracking-tighter">
                          {d.category}
                       </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{d.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{d.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* --- CINEMATIC VIDEO SECTION --- */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl font-bold mb-4">Official Application Guide</h2>
            <p className="text-slate-400">Master the technique for maximum shield durability.</p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="group relative bg-slate-900 rounded-[3rem] overflow-hidden aspect-video shadow-2xl border border-white/5 cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            
            {/* Play Button Interface */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 animate-pulse" />
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-slate-950 relative z-10 transition-transform duration-500 group-hover:scale-110 shadow-2xl">
                    <Play fill="currentColor" size={32} />
                  </div>
               </div>
               <div className="mt-8 text-center text-white">
                  <p className="text-2xl font-bold tracking-tight">Watch Demo Film</p>
                  <p className="text-sm text-emerald-400 font-medium mt-1">Full 4K Quality • Laboratory Optimized</p>
               </div>
            </div>
            
            {/* Corner Badges */}
            <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-white">Live Performance</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BEFORE / AFTER CARDS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 italic">Side-by-Side Analysis</h2>
            <p className="text-slate-500">Unfiltered comparisons under controlled lab conditions.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              { 
                title: "White Sneaker Hydro-Test", 
                before: "Capillary soaking in 5s", 
                after: "100% Superhydrophobic contact",
                tag: "Canvas Fabric"
              },
              { 
                title: "Suede Mud-Resistance Test", 
                before: "Irreversible organic staining", 
                after: "Surface particle displacement",
                tag: "Premium Suede"
              },
            ].map((ba, i) => (
              <div key={i} className="bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm">
                <div className="p-6 bg-white border-b border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FlaskConical size={16} className="text-emerald-600" />
                    <p className="font-bold text-slate-800 tracking-tight">{ba.title}</p>
                  </div>
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{ba.tag}</span>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-10 border-r border-slate-100 text-center">
                    <div className="w-full h-40 bg-slate-200/50 rounded-[2rem] flex items-center justify-center text-5xl mb-6 grayscale shadow-inner">👟</div>
                    <span className="bg-slate-200 text-slate-500 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[2px]">Untreated</span>
                    <p className="text-xs text-slate-400 mt-4 leading-relaxed italic">"{ba.before}"</p>
                  </div>
                  <div className="p-10 text-center bg-emerald-50/20">
                    <div className="w-full h-40 bg-emerald-100/50 rounded-[2rem] flex items-center justify-center text-5xl mb-6 shadow-xl relative">
                       👟
                       <div className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow-sm text-emerald-600">
                          <CheckCircle2 size={16} />
                       </div>
                    </div>
                    <span className="bg-emerald-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[2px]">EcoShield Treated</span>
                    <p className="text-xs text-emerald-700 mt-4 leading-relaxed font-bold">"{ba.after}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
}