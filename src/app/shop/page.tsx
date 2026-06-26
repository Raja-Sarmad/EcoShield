"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Plus, 
  Minus, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  CheckCircle2,
  Star
} from "lucide-react";

const bundles = [
  { 
    id: 1, 
    name: "Starter Pack", 
    tagline: "100ml Spray Bottle", 
    price: 699, 
    desc: "Perfect for a single pair of shoes." 
  },
  { 
    id: 2, 
    name: "Essentials Bundle", 
    tagline: "Spray + Cleaning Cloth", 
    price: 899, 
    desc: "Deep clean and shield combo.",
    popular: true 
  },
  { 
    id: 3, 
    name: "Ultra Saver", 
    tagline: "2x Spray Pack", 
    price: 1299, 
    desc: "Best value for your entire collection." 
  },
];

export default function ShopPage() {
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(bundles[1]); // Essentials selected by default
  const [ordered, setOrdered] = useState(false);

  return (
    <div className="min-h-screen bg-[rgb(246,250,247)] py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3">Shop EcoShield</h1>
            <p className="text-slate-500 flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Pre-order now. Limited first-batch stock available.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* --- LEFT: PRODUCT IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 bg-white rounded-[3rem] p-12 shadow-xl shadow-emerald-900/5 border border-white relative group overflow-hidden"
          >
            <div className="absolute top-8 left-8">
               <div className="flex gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
               </div>
               <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">4.9/5 Rating</p>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image 
                src="/images/bottle3.png" 
                alt="EcoShield Bottle" 
                width={400} 
                height={500} 
                className="mx-auto drop-shadow-2xl rounded-2xl"
              />
            </motion.div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-emerald-50/50 to-transparent pointer-events-none" />
          </motion.div>

          {/* --- RIGHT: SELECTION --- */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <ShoppingBag size={20} className="text-emerald-600" />
                Select Your Bundle
              </h2>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                {bundles.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelected(b)}
                    className={`relative w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 group ${
                      selected.id === b.id 
                        ? "border-emerald-500 bg-emerald-50/30 shadow-inner" 
                        : "border-slate-100 bg-white hover:border-slate-200"
                    }`}
                  >
                    {b.popular && (
                      <span className="absolute -top-3 right-6 bg-emerald-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        Most Popular
                      </span>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className={`font-bold text-lg ${selected.id === b.id ? "text-emerald-900" : "text-slate-800"}`}>
                          {b.name}
                        </p>
                        <p className="text-xs text-slate-500 font-medium">{b.tagline}</p>
                      </div>
                      <p className={`font-black text-xl ${selected.id === b.id ? "text-emerald-600" : "text-slate-400"}`}>
                        PKR {b.price}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl mb-8">
                <span className="font-bold text-slate-700">Quantity</span>
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => setQty(Math.max(1, qty - 1))} 
                    className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-black text-xl w-4 text-center">{qty}</span>
                  <button 
                    onClick={() => setQty(qty + 1)} 
                    className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Total & Order Button */}
              <div className="border-t border-slate-100 pt-8">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Amount</p>
                    <p className="text-4xl font-black text-slate-900 mt-1">
                      <span className="text-emerald-600 text-2xl mr-1 italic font-medium">PKR</span> 
                      {selected.price * qty}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded">Free Shipping included</p>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {ordered ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full py-4 bg-emerald-600 rounded-2xl text-white flex items-center justify-center gap-3 font-bold shadow-xl shadow-emerald-600/20"
                    >
                      <CheckCircle2 size={22} />
                      Pre-Order Confirmed!
                    </motion.div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setOrdered(true)}
                      className="w-full bg-slate-950 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3"
                    >
                      Pre-Order Now
                      <ShoppingBag size={20} className="opacity-50" />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* --- TRUST BADGES --- */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Truck size={20} />, label: "Fast Shipping" },
                { icon: <ShieldCheck size={20} />, label: "Secure Payment" },
                { icon: <RotateCcw size={20} />, label: "Easy Returns" },
              ].map((badge, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4 bg-white/50 border border-white rounded-2xl">
                  <div className="text-emerald-600">{badge.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{badge.label}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}