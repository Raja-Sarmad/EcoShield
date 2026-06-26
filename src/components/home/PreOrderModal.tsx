"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, CheckCircle2, ArrowRight, ShoppingCart,
  User, Phone, Mail, MapPin, Home, Package, Leaf
} from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CITIES = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad",
  "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala",
  "Hyderabad", "Bahawalpur", "Other"
];

const BUNDLES = [
  {
    id: "single",
    name: "Single Bottle",
    desc: "1× EcoShield Spray (100ml)",
    price: 699,
    tag: null,
  },
  {
    id: "starter",
    name: "Starter Kit",
    desc: "1× Spray + Cleaning Cloth",
    price: 899,
    tag: null,
  },
  {
    id: "family",
    name: "Family Pack",
    desc: "2× Spray Bottles",
    price: 1299,
    tag: "Best Value",
  },
];

type Step = 1 | 2 | 3;

export default function PreOrderModal({ isOpen, onClose }: Props) {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    bundle: "single",
    qty: 1,
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setStep(1); setSubmitted(false); setErrors({}); }, 400);
    }
  }, [isOpen]);

  const set = (key: string, val: string | number) =>
    setForm((f) => ({ ...f, [key]: val }));

  const selectedBundle = BUNDLES.find((b) => b.id === form.bundle)!;
  const total = selectedBundle.price * form.qty;

  // Validation per step
  const validate = (s: Step) => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (!form.name.trim()) e.name = "Name required";
      if (!/^03\d{9}$/.test(form.phone)) e.phone = "Enter valid PK number (03xxxxxxxxx)";
      if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    }
    if (s === 2) {
      if (!form.city) e.city = "Please select your city";
      if (!form.address.trim()) e.address = "Address is required";
    }
    return e;
  };

  const next = () => {
    const e = validate(step as Step);
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setStep((s) => (s + 1) as Step);
  };

  const submit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all duration-200 bg-white
    ${errors[field]
      ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
      : "border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[200]"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="fixed inset-0 z-[210] flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-100 overflow-hidden max-h-[92vh] flex flex-col">

              {/* ── Header ── */}
              <div className="relative bg-emerald-600 px-6 pt-5 pb-5 flex-shrink-0">
                {/* Decorative circle — pointer-events off so it never blocks clicks */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-emerald-500 rounded-full opacity-40 pointer-events-none z-0" />

                <button
                  type="button"
                  onClick={onClose}
                  className="absolute top-4 right-4 p-1.5 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors z-[50]"
                >
                  <X size={16} />
                </button>

                {/* Title row + step indicator side by side */}
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-white/20 rounded-lg flex-shrink-0">
                      <Leaf size={13} className="text-white" />
                    </div>
                    <div>
                      <p className="text-emerald-100/70 text-[9px] font-black uppercase tracking-[0.2em] leading-none mb-0.5">
                        Limited Batch 01
                      </p>
                      <h2 className="text-white text-lg font-black tracking-tight leading-tight">
                        Pre-Order EcoShield
                      </h2>
                    </div>
                  </div>

                  {/* Step indicator — compact, right side */}
                  {!submitted && (
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {[1, 2, 3].map((s) => (
                        <div key={s} className="flex items-center gap-1.5">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black transition-all duration-300
                            ${step === s ? "bg-white text-emerald-600 scale-110 shadow-md" :
                              step > s ? "bg-emerald-500 text-white border border-white/40" :
                              "bg-white/20 text-white/50"}`}
                          >
                            {step > s ? <CheckCircle2 size={12} /> : s}
                          </div>
                          {s < 3 && (
                            <div className={`h-[2px] w-5 rounded-full transition-all duration-500 ${step > s ? "bg-white" : "bg-white/20"}`} />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Step label — single thin line below */}
                {!submitted && (
                  <p className="relative z-10 text-emerald-100/60 text-[10px] font-bold uppercase tracking-wider mt-2 ml-10">
                    {step === 1 ? "Step 1 — Your Info" : step === 2 ? "Step 2 — Delivery" : "Step 3 — Review Order"}
                  </p>
                )}
              </div>

              {/* ── Body ── */}
              <div className="overflow-y-auto flex-1 px-8 py-6">
                <AnimatePresence mode="wait">

                  {/* SUCCESS */}
                  {submitted && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-6 gap-5"
                    >
                      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="text-emerald-600" size={40} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-slate-800">Order Placed!</h3>
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                          Thank you <span className="font-bold text-slate-700">{form.name}</span>!
                          We'll confirm your pre-order on{" "}
                          <span className="font-bold text-emerald-600">{form.phone}</span> within 24 hours.
                        </p>
                      </div>
                      <div className="w-full bg-emerald-50 rounded-2xl p-5 text-left space-y-2 border border-emerald-100">
                        <p className="text-[10px] text-emerald-700 font-black uppercase tracking-widest mb-3">Order Summary</p>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 font-medium">{selectedBundle.name} ×{form.qty}</span>
                          <span className="font-black text-slate-800">PKR {total.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500 font-medium">Delivery to</span>
                          <span className="font-bold text-slate-700">{form.city}</span>
                        </div>
                        <div className="pt-2 border-t border-emerald-100 flex justify-between">
                          <span className="text-xs text-slate-400">Expected Delivery</span>
                          <span className="text-xs font-black text-emerald-600">Batch 01 — July 2026</span>
                        </div>
                      </div>
                      <button
                        onClick={onClose}
                        className="w-full py-4 bg-emerald-600 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-emerald-700 transition-colors active:scale-95 shadow-lg shadow-emerald-200"
                      >
                        Done
                      </button>
                    </motion.div>
                  )}

                  {/* STEP 1 — Personal Info */}
                  {!submitted && step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-4">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-5">Personal Information</p>

                      <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-600 mb-1.5 uppercase tracking-wide">
                          <User size={12} /> Full Name *
                        </label>
                        <input
                          className={inputCls("name")}
                          placeholder="e.g. Ahmed Khan"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-600 mb-1.5 uppercase tracking-wide">
                          <Phone size={12} /> Phone Number *
                        </label>
                        <input
                          className={inputCls("phone")}
                          placeholder="03xxxxxxxxx"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          type="tel"
                          maxLength={11}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-600 mb-1.5 uppercase tracking-wide">
                          <Mail size={12} /> Email (Optional)
                        </label>
                        <input
                          className={inputCls("email")}
                          placeholder="ahmed@email.com"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          type="email"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 — Delivery */}
                  {!submitted && step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-4">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-5">Delivery Details</p>

                      <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-600 mb-1.5 uppercase tracking-wide">
                          <MapPin size={12} /> City *
                        </label>
                        <select
                          className={inputCls("city")}
                          value={form.city}
                          onChange={(e) => set("city", e.target.value)}
                        >
                          <option value="">Select your city</option>
                          {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                        {errors.city && <p className="text-red-500 text-xs mt-1 font-medium">{errors.city}</p>}
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-600 mb-1.5 uppercase tracking-wide">
                          <Home size={12} /> Full Address *
                        </label>
                        <textarea
                          className={`${inputCls("address")} resize-none h-24`}
                          placeholder="House/Flat no., Street, Area..."
                          value={form.address}
                          onChange={(e) => set("address", e.target.value)}
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-1 font-medium">{errors.address}</p>}
                      </div>

                      <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-600 mb-1.5 uppercase tracking-wide">
                          Special Instructions
                        </label>
                        <input
                          className={inputCls("notes")}
                          placeholder="Anything we should know? (optional)"
                          value={form.notes}
                          onChange={(e) => set("notes", e.target.value)}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 — Bundle & Review */}
                  {!submitted && step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="space-y-5">
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Choose Your Bundle</p>

                      <div className="space-y-3">
                        {BUNDLES.map((b) => (
                          <label
                            key={b.id}
                            className={`relative flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200
                            ${form.bundle === b.id
                              ? "border-emerald-500 bg-emerald-50"
                              : "border-slate-100 bg-slate-50/50 hover:border-slate-200"}`}
                          >
                            {b.tag && (
                              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[8px] font-black px-2 py-0.5 rounded-md uppercase">
                                {b.tag}
                              </span>
                            )}
                            <input
                              type="radio"
                              name="bundle"
                              value={b.id}
                              className="hidden"
                              checked={form.bundle === b.id}
                              onChange={() => set("bundle", b.id)}
                            />
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all
                                ${form.bundle === b.id ? "border-emerald-500 bg-emerald-500" : "border-slate-300"}`}
                              >
                                {form.bundle === b.id && <div className="w-full h-full rounded-full bg-white scale-50 block" />}
                              </div>
                              <div>
                                <p className="font-black text-slate-800 text-sm">{b.name}</p>
                                <p className="text-xs text-slate-400 font-medium">{b.desc}</p>
                              </div>
                            </div>
                            <span className="font-black text-slate-800 text-sm">PKR {b.price}</span>
                          </label>
                        ))}
                      </div>

                      {/* Qty */}
                      <div>
                        <label className="flex items-center gap-2 text-xs font-black text-slate-600 mb-2 uppercase tracking-wide">
                          <Package size={12} /> Quantity
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => set("qty", Math.max(1, form.qty - 1))}
                            className="w-10 h-10 rounded-full border-2 border-slate-200 font-black text-slate-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
                          >−</button>
                          <span className="w-8 text-center font-black text-slate-800 text-lg">{form.qty}</span>
                          <button
                            onClick={() => set("qty", Math.min(10, form.qty + 1))}
                            className="w-10 h-10 rounded-full border-2 border-slate-200 font-black text-slate-600 hover:border-emerald-400 hover:text-emerald-600 transition-colors"
                          >+</button>
                        </div>
                      </div>

                      {/* Order summary */}
                      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Order Summary</p>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Customer</span>
                          <span className="font-bold text-slate-700">{form.name}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">Phone</span>
                          <span className="font-bold text-slate-700">{form.phone}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">City</span>
                          <span className="font-bold text-slate-700">{form.city}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-500">{selectedBundle.name} ×{form.qty}</span>
                          <span className="font-bold text-slate-700">PKR {(selectedBundle.price * form.qty).toLocaleString()}</span>
                        </div>
                        <div className="pt-2 border-t border-slate-200 flex justify-between">
                          <span className="font-black text-slate-700 text-sm">Total</span>
                          <span className="font-black text-emerald-600 text-lg">PKR {total.toLocaleString()}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 italic">*Cash on Delivery. Payment at doorstep.</p>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* ── Footer Buttons ── */}
              {!submitted && (
                <div className="px-8 pb-7 pt-4 flex gap-3 flex-shrink-0 border-t border-slate-50">
                  {step > 1 && (
                    <button
                      onClick={() => setStep((s) => (s - 1) as Step)}
                      className="flex-1 py-3.5 border-2 border-slate-200 text-slate-600 font-bold text-sm rounded-2xl hover:border-slate-300 transition-colors"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 ? (
                    <button
                      onClick={next}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-emerald-600 text-white font-black text-sm rounded-2xl hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-200"
                    >
                      Continue <ArrowRight size={16} />
                    </button>
                  ) : (
                    <button
                      onClick={submit}
                      disabled={loading}
                      className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-emerald-600 text-white font-black text-sm rounded-2xl hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-200 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Placing Order...
                        </>
                      ) : (
                        <><ShoppingCart size={16} /> Confirm Pre-Order</>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}