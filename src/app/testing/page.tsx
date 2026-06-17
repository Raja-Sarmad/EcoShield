"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  Beaker, 
  ShieldCheck, 
  Droplets, 
  Zap, 
  Search,
  Award,
  TestTube2,
  FileSpreadsheet
} from "lucide-react";

const results = [
  { test: "Water Resistance", method: "Spray test (AATCC 22)", result: "90% Protection", rating: 90, badge: "Excellent" },
  { test: "Dust Resistance", method: "Chamber exposure test", result: "85% Protection", rating: 85, badge: "Very Good" },
  { test: "Stain Resistance", method: "Oil & mud application", result: "88% Protection", rating: 88, badge: "Excellent" },
  { test: "Durability", method: "5-day wear simulation", result: "Up to 7 Days", rating: 75, badge: "Good" },
  { test: "Material Safety", method: "Skin patch test", result: "No irritation", rating: 100, badge: "Safe" },
  { test: "Color Preservation", method: "Visual spectroscopy", result: "0% discoloration", rating: 100, badge: "Excellent" },
];

const comparisons = [
  { feature: "Eco-Friendly Formula", ecoshield: true, commercial: false },
  { feature: "Rice Husk Derived", ecoshield: true, commercial: false },
  { feature: "PFAS-Free (Non-Toxic)", ecoshield: true, commercial: false },
  { feature: "Breathable Matrix", ecoshield: true, commercial: true },
  { feature: "Water Resistance 80%+", ecoshield: true, commercial: true },
  { feature: "Affordable Price", ecoshield: true, commercial: false },
];

export default function TestingPage() {
  return (
    <div className="bg-white text-slate-900">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 bg-[rgb(246,250,247)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-100 shadow-sm mb-6">
              <Award className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-800">ISO Standards Followed</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Proven by <span className="text-emerald-600 italic">Data.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We don't just make claims. Every EcoShield bottle is backed by rigorous 
              laboratory testing and real-world durability simulations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- DATA DASHBOARD --- */}
      <section className="py-20 -mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-900/5 border border-slate-100 overflow-hidden">
            <div className="p-8 border-b border-slate-50 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-4">
               <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-600 rounded-lg text-white">
                    <FileSpreadsheet size={20} />
                  </div>
                  <h2 className="font-bold text-xl uppercase tracking-tight">Test Results Summary</h2>
               </div>
               <div className="text-xs font-mono text-slate-400 bg-white px-3 py-1 rounded-md border border-slate-100">
                  REF: ES-LAB-2024-X1
               </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-slate-400 text-[11px] uppercase tracking-widest border-b border-slate-50">
                    <th className="py-6 px-8 font-semibold text-emerald-600">Testing Protocol</th>
                    <th className="py-6 px-8 font-semibold hidden md:table-cell">Methodology</th>
                    <th className="py-6 px-8 font-semibold">Live Result</th>
                    <th className="py-6 px-8 font-semibold">Success Rate</th>
                    <th className="py-6 px-8 font-semibold">Certification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {results.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="py-5 px-8 font-bold text-slate-800">{r.test}</td>
                      <td className="py-5 px-8 text-slate-400 text-sm hidden md:table-cell italic">{r.method}</td>
                      <td className="py-5 px-8 font-mono text-emerald-600 font-bold">{r.result}</td>
                      <td className="py-5 px-8">
                        <div className="flex items-center gap-3">
                          <div className="w-24 bg-slate-100 rounded-full h-1.5">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${r.rating}%` }}
                              className="bg-emerald-500 h-1.5 rounded-full"
                            />
                          </div>
                          <span className="text-[10px] font-bold text-slate-400">{r.rating}%</span>
                        </div>
                      </td>
                      <td className="py-5 px-8 text-right md:text-left">
                        <span className={`text-[10px] font-black uppercase tracking-tighter px-2.5 py-1 rounded-md ${
                          r.badge === "Excellent" || r.badge === "Safe" 
                            ? "bg-emerald-100 text-emerald-700" 
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {r.badge}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* --- VISUAL PROOF (BEFORE/AFTER) --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4">Laboratory Visual Proof</h2>
            <p className="text-slate-500">Comparing unprotected fibers with EcoShield treated nano-layers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Water Repellency", before: "Soaks & Stains", after: "Instant Beading", icon: <Droplets /> },
              { label: "Mud Resistance", before: "Deep Absorption", after: "Surface Sliding", icon: <Beaker /> },
              { label: "Dust Blocking", before: "Fiber Embedding", after: "Easy Shaking", icon: <Zap /> },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden border border-slate-200 group">
                <div className="p-4 bg-slate-900 text-white flex items-center justify-center gap-2">
                   {React.cloneElement(t.icon, { size: 16, className: "text-emerald-400" })}
                   <span className="text-xs font-bold uppercase tracking-widest">{t.label}</span>
                </div>
                <div className="flex divide-x divide-slate-100">
                  <div className="flex-1 p-6 space-y-3">
                    <div className="w-full h-24 bg-slate-50 rounded-xl flex items-center justify-center text-3xl grayscale opacity-50">
                      👟
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Without Shield</p>
                    <p className="text-xs text-slate-500 font-medium leading-tight">{t.before}</p>
                  </div>
                  <div className="flex-1 p-6 space-y-3 bg-emerald-50/30">
                    <div className="w-full h-24 bg-emerald-100/50 rounded-xl flex items-center justify-center text-3xl shadow-inner">
                      ✨
                    </div>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">EcoShield Core</p>
                    <p className="text-xs text-slate-900 font-bold leading-tight">{t.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPARISON (ECOSHIELD VS OTHERS) --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 italic text-slate-900">Why Choose Us?</h2>
            <p className="text-slate-500">EcoShield vs Conventional Petrochemical Sprays.</p>
          </div>

          <div className="bg-white rounded-[3rem] border-2 border-slate-100 shadow-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-6 px-8 text-left text-sm font-medium opacity-60">Performance Metric</th>
                  <th className="py-6 px-8 text-center text-emerald-400 font-black italic tracking-tighter">ECOSHIELD</th>
                  <th className="py-6 px-8 text-center text-slate-400 font-bold">Standard Spray</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map((c, i) => (
                  <tr key={i} className={i % 2 !== 0 ? "bg-slate-50/50" : "bg-white"}>
                    <td className="py-5 px-8 text-slate-700 font-medium">{c.feature}</td>
                    <td className="py-5 px-8 text-center">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      </div>
                    </td>
                    <td className="py-5 px-8 text-center">
                      {c.commercial ? (
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-5 h-5 text-slate-400" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center mx-auto">
                          <XCircle className="w-5 h-5 text-red-300" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="bg-emerald-600 p-6 text-center text-white font-bold text-lg tracking-tight italic">
               94% Pure Rice Husk Silica — No Competition.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}