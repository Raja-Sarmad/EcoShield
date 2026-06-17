"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Globe,
  Sparkles,
  ThumbsUp
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [usefulness, setUsefulness] = useState("");

  const options = ["Very Useful", "Somewhat", "Not Sure"];

  return (
    <div className="min-h-screen bg-[rgb(246,250,247)] py-12 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- LEFT SIDE: INFO --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-6">
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-800">Support & Feedback</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Let’s talk <br /> 
                <span className="text-emerald-600 italic font-medium">Eco-Innovation.</span>
              </h1>
              <p className="text-lg text-slate-500 leading-relaxed">
                Have questions about our silica technology or want to partner with us? 
                Drop us a message and our team will get back to you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-slate-800">hello@ecoshield.pk</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Lab</p>
                  <p className="text-lg font-bold text-slate-800">Chemistry Dept, Mega Project Wing</p>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Globe size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Socials</p>
                  <p className="text-lg font-bold text-slate-800">@ecoshield.official</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-emerald-900/5 border border-white relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                       <CheckCircle2 size={48} className="text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900">Message Received!</h3>
                    <p className="text-slate-500 max-w-sm mx-auto">
                      Thank you for reaching out. Our team will review your message and 
                      respond within 24 hours.
                    </p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-emerald-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div key="form" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input 
                          type="text"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input 
                          type="email"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                      <textarea 
                        rows={4} 
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm outline-none focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none" 
                        placeholder="Tell us what's on your mind..." 
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                        <ThumbsUp size={12} />
                        Is EcoShield useful to you?
                      </label>
                      <div className="flex flex-wrap gap-3">
                        {options.map(o => (
                          <button 
                            key={o} 
                            onClick={() => setUsefulness(o)}
                            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 border ${
                              usefulness === o 
                                ? "bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/20" 
                                : "bg-white border-slate-200 text-slate-500 hover:border-emerald-200 hover:bg-emerald-50/50"
                            }`}
                          >
                            {o}
                          </button>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSubmitted(true)}
                      className="w-full bg-slate-950 text-white py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-3 mt-4"
                    >
                      Send Message
                      <Send size={18} className="opacity-50" />
                    </motion.button>

                    <div className="pt-4 flex items-center justify-center gap-2 text-slate-400">
                       <Sparkles size={14} className="text-emerald-500" />
                       <p className="text-[10px] font-bold uppercase tracking-[2px]">Powered by Rice Husk Silica Tech</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}