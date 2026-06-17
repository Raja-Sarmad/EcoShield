"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Sprout, 
  Beaker, 
  Flame, 
  Microscope, 
  ShieldCheck, 
  Waves, 
  ArrowRight,
  Zap,
  Globe,
  Ban,
  Atom,
  Thermometer
} from "lucide-react";

const process = [
  {
    num: "01",
    title: "Rice Husk Collection",
    detail: "Rice husks are agricultural waste collected from local rice mills. Pakistan produces over 7 million tonnes of rice annually, generating enormous husk waste that is typically burned — releasing CO₂.",
    icon: <Sprout className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100",
  },
  {
    num: "02",
    title: "Pre-Treatment",
    detail: "Husks are washed with dilute acid (HCl) to remove metallic impurities and organic matter, then rinsed with distilled water until pH neutral.",
    icon: <Waves className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
  },
  {
    num: "03",
    title: "Controlled Combustion",
    detail: "Pre-treated husks are burned at 600–700°C in a controlled furnace. At this temperature, organic carbon burns off and amorphous silica (SiO₂) remains as white ash.",
    icon: <Flame className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-50 border-orange-100",
  },
  {
    num: "04",
    title: "Silica Extraction",
    detail: "The ash is treated with NaOH solution to produce sodium silicate (water glass). Acidification precipitates pure amorphous silica nanoparticles.",
    icon: <Beaker className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-100",
  },
  {
    num: "05",
    title: "Nano-Formulation",
    detail: "Silica particles are surface-modified with hydrophobic agents (e.g., PDMS) to enhance water-repellency. The final suspension is dispersed in an eco-friendly alcohol carrier.",
    icon: <Microscope className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50 border-emerald-100",
  },
  {
    num: "06",
    title: "Protective Coating",
    detail: "When sprayed, alcohol evaporates instantly leaving a nano-silica matrix bonded to shoe fibers — forming a transparent, breathable hydrophobic shield.",
    icon: <ShieldCheck className="w-6 h-6 text-blue-700" />,
    color: "bg-blue-50 border-blue-200",
  },
];

const props = [
  { label: "Particle Size", value: "50–200 nm", icon: <Atom />, note: "Deep fiber penetration" },
  { label: "Contact Angle", value: "> 120°", icon: <Waves />, note: "Superhydrophobic threshold" },
  { label: "Silica Purity", value: "~ 94%", icon: <Zap />, note: "Post acid-alkali treatment" },
  { label: "Carrier Solvent", value: "Isopropanol", icon: <Beaker />, note: "Evaporates < 60s" },
  { label: "Coating Life", value: "5–7 days", icon: <ShieldCheck />, note: "Standard conditions" },
  { label: "Thermal Tolerance", value: "600°C", icon: <Thermometer />, note: "High heat stability" },
];

export default function SciencePage() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/30 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest">
              Biotechnology & Nanochemistry
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-6 mb-8 tracking-tight">
              Molecular <span className="text-emerald-500">Innovation.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We transform agricultural waste into high-performance silica nanoparticles, 
              creating the world’s most sustainable protective coating.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- TRANSFORMATION VISUAL --- */}
      <section className="relative -mt-16 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            
            <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 text-center">
               <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-amber-600" />
               </div>
               <h3 className="font-bold text-xl">Agricultural Waste</h3>
               <p className="text-sm text-slate-500 mt-2">Zero-value Rice Husk</p>
            </div>

            <div className="flex justify-center">
               <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200">
                  <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
               </div>
            </div>

            <div className="md:col-span-2 bg-slate-900 p-8 rounded-[2rem] shadow-xl text-white text-center">
               <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Atom className="w-8 h-8 text-emerald-400 animate-spin-slow" />
               </div>
               <h3 className="font-bold text-xl">Silica Nanoparticles</h3>
               <p className="text-sm text-emerald-400/70 mt-2">High-Value SiO₂ Material</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- STEP BY STEP PROCESS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4 italic">The Extraction Journey</h2>
              <p className="text-slate-500">A 6-stage scientific process to isolate and formulate pure hydrophobic silica.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-200 mx-8 mb-4" />
          </div>

          <div className="relative space-y-8">
            {/* Vertical Line for Timeline */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden lg:block" />

            {process.map((p, i) => (
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                key={i} 
                className={`relative flex flex-col lg:flex-row gap-8 items-start group`}
              >
                {/* Number Badge */}
                <div className="z-10 w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-2xl font-black text-slate-200 group-hover:text-emerald-500 transition-colors shrink-0">
                  {p.num}
                </div>

                <div className={`flex-1 p-8 rounded-[2.5rem] border transition-all duration-300 ${p.color} hover:shadow-lg`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      {p.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{p.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECHNICAL SPECS (DASHBOARD STYLE) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-slate-500">Chemical and physical properties of the EcoShield matrix.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.map((p, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300">
                <div className="text-emerald-500 mb-6 group-hover:text-emerald-400">
                  {React.cloneElement(p.icon, { size: 32 })}
                </div>
                <p className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">{p.label}</p>
                <h4 className="text-3xl font-bold mb-4">{p.value}</h4>
                <div className="h-px w-full bg-slate-200 group-hover:bg-slate-700 mb-4" />
                <p className="text-sm opacity-70 italic">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ECO IMPACT (DARK MODE) --- */}
      <section className="py-24 bg-emerald-950 text-white rounded-[3rem] lg:rounded-[5rem] mx-4 mb-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold mb-6 italic">Circular Economy Impact</h2>
             <p className="text-emerald-200/60 max-w-2xl mx-auto">
               We don't just protect shoes; we protect the planet by repurposing waste and eliminating toxins.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Globe className="text-emerald-400" />, title: "Carbon Reduction", desc: "Prevents CO2 emissions from open-field husk burning." },
              { icon: <Ban className="text-emerald-400" />, title: "Zero PFAS", desc: "No harmful fluorocarbons or persistent chemicals used." },
              { icon: <Zap className="text-emerald-400" />, title: "Efficient Recovery", desc: "Low-energy extraction process with chemical recycling." },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-emerald-100/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative background circle */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
      </section>
      
    </div>
  );
}