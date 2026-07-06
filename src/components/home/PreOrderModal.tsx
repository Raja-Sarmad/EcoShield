"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser"; 
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

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => { setStep(1); setSubmitted(false); setErrors({}); }, 400);
    }
  }, [isOpen]);

  const set = (key: string, val: string | number) =>
    setForm((f) => ({ ...f, [key]: val }));

  const selectedBundle = BUNDLES.find((b) => b.id === form.bundle)!;
  const total = selectedBundle.price * form.qty;

  const validate = (s: Step) => {
    const e: Record<string, string> = {};
    if (s === 1) {
      if (!form.name.trim()) e.name = "Name required";
      if (!/^03\d{9}$/.test(form.phone)) e.phone = "Enter valid PK number (03xxxxxxxxx)";
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

    // Pulling IDs from .env file
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_PREORDER; 
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID; 
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; 

    const orderDetails = `
      NEW PRE-ORDER DETAILS:
      ----------------------
      Phone: ${form.phone}
      City: ${form.city}
      Address: ${form.address}
      Bundle: ${selectedBundle.name}
      Quantity: ${form.qty}
      Total Price: PKR ${total.toLocaleString()}
      Notes: ${form.notes || "No special instructions"}
    `;

    const templateParams = {
      from_name: form.name,
      from_email: form.email || "No Email Provided",
      message: orderDetails,
    };

    try {
      await emailjs.send(SERVICE_ID!, TEMPLATE_ID!, templateParams, PUBLIC_KEY!);
      setSubmitted(true);
    } catch (error) {
      console.error("Order Failed:", error);
      alert("Failed to place pre-order. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls = (field: string) =>
    `w-full px-4 py-3 rounded-xl border text-sm font-medium outline-none transition-all duration-200 bg-white
    ${errors[field]
      ? "border-red-300 focus:border-red-400 focus:ring-2 focus:ring-red-100"
      : "border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"}`;

  if (typeof window === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            style={{ zIndex: 9998 }}
          />

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">

              <div className="relative bg-emerald-600 px-6 pt-5 pb-5 flex-shrink-0">
                <button onClick={onClose} className="absolute top-4 right-4 p-1.5 bg-white/20 rounded-full text-white z-[50]">
                  <X size={16} />
                </button>
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-white/20 rounded-lg"><Leaf size={13} className="text-white" /></div>
                    <div>
                      <p className="text-emerald-100/70 text-[9px] font-black uppercase tracking-widest">Limited Batch 01</p>
                      <h2 className="text-white text-lg font-black">Pre-Order EcoShield</h2>
                    </div>
                  </div>
                  {!submitted && (
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3].map((s) => (
                        <div key={s} className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black ${step === s ? "bg-white text-emerald-600 shadow-md" : "bg-white/20 text-white"}`}>{s}</div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="overflow-y-auto flex-1 px-8 py-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center text-center py-6 gap-5">
                      <CheckCircle2 className="text-emerald-600" size={60} />
                      <h3 className="text-2xl font-black text-slate-800">Order Placed!</h3>
                      <p className="text-slate-500 text-sm">Thank you {form.name}! We will confirm your order on {form.phone} within 24 hours.</p>
                      <button onClick={onClose} className="w-full py-4 bg-emerald-600 text-white font-black rounded-2xl">Done</button>
                    </motion.div>
                  ) : (
                    <>
                      {step === 1 && (
                        <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                          <p className="text-xs font-bold text-slate-400 uppercase">Step 1: Personal Info</p>
                          <input className={inputCls("name")} placeholder="Full Name *" value={form.name} onChange={(e) => set("name", e.target.value)} />
                          <input className={inputCls("phone")} placeholder="Phone (03xxxxxxxxx) *" value={form.phone} onChange={(e) => set("phone", e.target.value)} maxLength={11} />
                          <input className={inputCls("email")} placeholder="Email (Optional)" value={form.email} onChange={(e) => set("email", e.target.value)} />
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                          <p className="text-xs font-bold text-slate-400 uppercase">Step 2: Delivery Details</p>
                          <select className={inputCls("city")} value={form.city} onChange={(e) => set("city", e.target.value)}>
                            <option value="">Select City *</option>
                            {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                          <textarea className={`${inputCls("address")} h-24`} placeholder="Full Address *" value={form.address} onChange={(e) => set("address", e.target.value)} />
                          <input className={inputCls("notes")} placeholder="Special Instructions (Optional)" value={form.notes} onChange={(e) => set("notes", e.target.value)} />
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
                          <p className="text-xs font-bold text-slate-400 uppercase">Step 3: Choose Bundle & Review</p>
                          <div className="space-y-3">
                            {BUNDLES.map(b => (
                              <div key={b.id} onClick={() => set("bundle", b.id)} className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${form.bundle === b.id ? "border-emerald-500 bg-emerald-50" : "border-slate-100 bg-slate-50"}`}>
                                <div className="flex justify-between">
                                  <span className="font-black text-sm">{b.name}</span>
                                  <span className="font-black text-slate-800">PKR {b.price}</span>
                                </div>
                                <p className="text-xs text-slate-500">{b.desc}</p>
                              </div>
                            ))}
                          </div>
                          <div className="bg-slate-900 rounded-2xl p-4 text-white">
                            <div className="flex justify-between items-center">
                              <span className="text-xs opacity-70 uppercase font-bold">Total Amount</span>
                              <span className="text-xl font-black">PKR {total.toLocaleString()}</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </>
                  )}
                </AnimatePresence>
              </div>

              {!submitted && (
                <div className="px-8 pb-7 pt-4 flex gap-3 border-t">
                  {step > 1 && <button onClick={() => setStep(s => (s-1) as Step)} className="flex-1 py-3.5 border-2 rounded-2xl font-bold text-slate-600">Back</button>}
                  {step < 3 ? (
                    <button onClick={next} className="flex-1 py-3.5 bg-emerald-600 text-white font-black rounded-2xl shadow-lg shadow-emerald-200">Continue</button>
                  ) : (
                    <button onClick={submit} disabled={loading} className="flex-1 py-3.5 bg-emerald-600 text-white font-black rounded-2xl shadow-lg shadow-emerald-200 disabled:opacity-70">
                      {loading ? "Placing Order..." : "Confirm Pre-Order"}
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}