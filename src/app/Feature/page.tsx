"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Droplets,
  Zap,
  Eye,
  Shield,
  Clock,
  Leaf,
  Waves,
  Ban,
  Recycle,
} from "lucide-react";

const features = [
  {
    title: "Water Repellent",
    detail:
      "Creates an invisible nano-barrier that causes water to bead and roll off instantly. Say goodbye to soaked fabrics and moisture damage.",
    icon: <Droplets className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    title: "Fast Drying",
    detail:
      "Ultra-light alcohol-based carrier evaporates within 60 seconds, leaving behind a dry, protective layer with zero residue or tackiness.",
    icon: <Zap className="w-6 h-6 text-yellow-600" />,
    color: "bg-yellow-50 border-yellow-100",
    iconBg: "bg-yellow-100",
  },
  {
    title: "Invisible Coating",
    detail:
      "The nano-silica matrix bonds deep into fibers at the molecular level — completely transparent and undetectable to the eye or touch.",
    icon: <Eye className="w-6 h-6 text-slate-600" />,
    color: "bg-slate-50 border-slate-100",
    iconBg: "bg-slate-100",
  },
  {
    title: "Fabric Safe",
    detail:
      "PFAS-free, non-toxic formula. Safe on leather, suede, canvas, nylon, and cotton. Preserves original texture, color, and breathability.",
    icon: <Shield className="w-6 h-6 text-orange-600" />,
    color: "bg-orange-50 border-orange-100",
    iconBg: "bg-orange-100",
  },
  {
    title: "Long Lasting Protection",
    detail:
      "Durable silica bonds provide 5–7 days of active protection under standard conditions. Reapply quickly for continuous coverage.",
    icon: <Clock className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50 border-emerald-100",
    iconBg: "bg-emerald-100",
  },
  {
    title: "Eco-Friendly",
    detail:
      "Derived from rice husk agricultural waste. No harmful fluorocarbons. A circular-economy solution that protects your gear and the planet.",
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
  },
];

const stats = [
  {
    icon: <Waves className="text-emerald-400" />,
    title: "Contact Angle > 120°",
    desc: "Superhydrophobic threshold — water simply cannot stick.",
  },
  {
    icon: <Ban className="text-emerald-400" />,
    title: "Zero PFAS Chemicals",
    desc: "No fluorocarbons. Safe for people, pets, and the environment.",
  },
  {
    icon: <Recycle className="text-emerald-400" />,
    title: "Waste to Shield",
    desc: "Rice husk repurposed into a premium nano-protection formula.",
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">

      {/* --- HERO --- */}
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
              Product Features
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mt-6 mb-8 tracking-tight">
              Built to <span className="text-emerald-500">Protect.</span>
              <br />
              Designed to Last.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              EcoShield combines advanced nano-coating science with everyday
              usability — six powerful features engineered for real protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURE CARDS --- */}
      <section className="relative -mt-16 pb-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 pt-8">
          <div className="relative space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 24 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group flex flex-col gap-4 p-8 rounded-[2.5rem] border transition-all duration-300 hover:shadow-xl ${f.color}`}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${f.iconBg}`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{f.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DARK STATS BANNER --- */}
      <section className="py-24 bg-emerald-950 text-white rounded-[3rem] lg:rounded-[5rem] mx-4 mb-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 italic">
              Science You Can Feel. Results You Can See.
            </h2>
            <p className="text-emerald-200/60 max-w-2xl mx-auto">
              Every EcoShield feature is backed by real nano-chemistry — not
              just marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
                <p className="text-sm text-emerald-100/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
      </section>

    </div>
  );
}
