"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, CheckCircle2, Package, ArrowRight } from "lucide-react";
import PreOrderModal from "@/components/home/PreOrderModal";

export default function ShopPreview() {
  const [modalOpen, setModalOpen] = useState(false);

  const features = [
    "Nano-Armor Technology",
    "Breathable Protection",
    "Zero Harsh Chemicals",
    "Suede & Leather Safe"
  ];

  const bundles = [
    { name: "Starter Kit", plus: "Cleaning Cloth", price: "899" },
    { name: "Family Pack", plus: "2x Spray Bottles", price: "1299", popular: true }
  ];

  return (
    <section className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      
      {/* Pre-Order Modal */}
      <PreOrderModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 text-emerald-600 font-bold text-[10px] uppercase tracking-[0.4em]"
            >
              <ShoppingBag size={14} /> Official Store
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
              Invest in <span className="text-emerald-600">Longevity.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs font-medium leading-relaxed">
            Premium protection shouldn't cost the earth. High performance meets sustainable pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ── MAIN PRODUCT CARD (Left) ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-50 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-full max-w-[220px] group">
              <Image 
                src="/images/bottle3.png" 
                alt="EcoShield Spray" 
                width={250} 
                height={400} 
                className="drop-shadow-[0_25px_25px_rgba(16,185,129,0.2)] group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[9px] font-black text-emerald-600 uppercase tracking-widest shadow-lg border border-emerald-50">
                100ml Edition
              </div>
            </div>

            <div className="flex-1 space-y-8 relative z-10">
              <div>
                <h3 className="text-3xl font-black text-slate-800 mb-2">EcoShield Signature</h3>
                <p className="text-slate-400 text-sm">Rice-husk bio-silica protection spray.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-3 text-slate-600">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span className="text-xs font-bold">{f}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-6">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price</p>
                  <p className="text-3xl font-black text-slate-900">PKR 699</p>
                </div>
                <div className="h-10 w-[1px] bg-slate-100" />
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-black uppercase tracking-tighter w-fit">In Stock</span>
                  <span className="text-[10px] text-slate-400">Free delivery on 2+ bottles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── BUNDLES & CTA (Right) ── */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* CTA Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-emerald-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-emerald-200"
            >
              <h4 className="text-2xl font-black mb-4 leading-tight">Ready to armor your <br />collection?</h4>
              
              {/* Button linked to Modal */}
              <button
                onClick={() => setModalOpen(true)}
                className="group flex items-center justify-center gap-3 w-full bg-white text-emerald-700 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-50 transition-all shadow-xl active:scale-95"
              >
                Pre-Order Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </button>
            </motion.div>

            {/* Bundle Offers */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl flex-1 flex flex-col"
            >
              <div className="flex items-center gap-2 text-slate-400 font-black text-[10px] uppercase tracking-widest mb-6">
                <Package size={14} className="text-[#9c6a55]" /> Exclusive Bundles
              </div>

              <div className="space-y-4">
                {bundles.map((b) => (
                  <div 
                    key={b.name} 
                    onClick={() => setModalOpen(true)} // Bundles also trigger the form
                    className={`relative p-4 rounded-2xl border transition-all cursor-pointer active:scale-[0.98] ${
                      b.popular ? 'border-emerald-500 bg-emerald-50/30' : 'border-slate-100 bg-slate-50/50 hover:border-emerald-200'
                    }`}
                  >
                    {b.popular && (
                      <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-tighter shadow-lg">
                        Best Value
                      </span>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-black text-slate-800 text-sm uppercase tracking-tight">{b.name}</p>
                        <p className="text-[10px] text-slate-400 font-bold">+ {b.plus}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-black text-slate-900 text-lg">PKR {b.price}</p>
                        <p className="text-[8px] text-emerald-600 font-bold uppercase">Save 15%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-auto text-[9px] text-slate-400 text-center font-bold uppercase tracking-widest pt-6 italic">
                *Limited pre-order slots available for batch 01
              </p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}