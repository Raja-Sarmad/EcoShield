"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Clock, Lightbulb, Mail, ExternalLink, X, Star } from "lucide-react";

const team = [
  { name: "Neha Arif",      role: "Leader & Branding & Packaging Designer", image: "/images/Neha.jpeg",   email: "neha@ecoshield.pk",    bio: "Branding & Packaging Designer." },
  { name: "Rimsha Masood",  role: "Web & Digital Marketing Manager",         image: "/images/Rimsha.png",  email: "rimsha@ecoshield.pk",  bio: "Website & Digital Marketing." },
  { name: "Ali Hasnain",    role: "Research & Product Development Lead",     image: "/images/Ali.jpeg",    email: "ali@ecoshield.pk",     bio: "Product R&D Lead." },
  { name: "Uzair",          role: "Media & Presentation Designer",           image: "/images/Uzair.jpeg",  email: "uzair@ecoshield.pk",   bio: "Media Designer." },
  { name: "Kashif Mehmood", role: "Testing & Quality Assurance Lead",        image: "/images/Kashif.jpeg", email: "kashif@ecoshield.pk",  bio: "QA Lead." },
  { name: "Humna",          role: "Testing Assistant & Data Analyst",        image: "/images/Humna.png",   email: "humna@ecoshield.pk",   bio: "Data Analyst." },
  { name: "Ghulam Murtaza", role: "Finance & Operations Manager",            image: "/images/Ghulam.jpeg", email: "ghulam@ecoshield.pk",  bio: "Finance Manager." },
  { name: "Binish",         role: "Project Manager & Documentation Lead",    image: "/images/Binish.jpeg", email: "binish@ecoshield.pk",  bio: "Project Manager." },
];

type Member = typeof team[0];

const skills: Record<string, string[]> = {
  "Neha Arif":      ["Brand Identity", "Logo Design", "Bottle Label Design", "Packaging Design", "Product Naming", "Visual Storytelling"],
  "Rimsha Masood":  ["Website Development", "Instagram Marketing", "Facebook Ads", "LinkedIn Strategy", "Content Calendar", "SEO & Analytics"],
  "Ali Hasnain":    ["Silica Extraction", "Nano-Formulation", "Chemical R&D", "Lab Testing", "Sustainable Materials", "Product Development"],
  "Uzair":          ["Motion Graphics", "Promotional Videos", "Demo Production", "Presentation Design", "Brand Animation", "Visual Effects"],
  "Kashif Mehmood": ["Water Resistance Testing", "Dust Shield Testing", "Stain Testing", "Durability Analysis", "QA Reports", "Technical Documentation"],
  "Humna":          ["Data Collection", "Test Assistance", "Analytical Charts", "Data Tables", "Performance Metrics", "Research Support"],
  "Ghulam Murtaza": ["Budget Planning", "Cost Analysis", "Pricing Strategy", "Inventory Management", "Financial Reports", "Operations"],
  "Binish":         ["Project Coordination", "Report Writing", "Meeting Records", "Timeline Management", "Final Submission", "Documentation"],
};

const contributions: Record<string, string> = {
  "Neha Arif":      "Led the EcoShield team as project leader while designing the complete brand identity — from logo to label to packaging. Every visual element you see is her creation.",
  "Rimsha Masood":  "Built and managed EcoShield's entire digital ecosystem — from the website to all social media platforms. Drove brand awareness through strategic content and outreach campaigns.",
  "Ali Hasnain":    "Spearheaded the core science of EcoShield — extracting high-purity silica from rice husks and developing the nano-hydrophobic formula through months of lab research.",
  "Uzair":          "Brought EcoShield to life visually through animations, promotional videos, and demo content. His presentation design made the product shine in every pitch.",
  "Kashif Mehmood": "Validated EcoShield's performance through rigorous real-world tests. Every water, dust, and stain resistance claim is backed by his detailed technical reports.",
  "Humna":          "The analytical backbone of the testing team. Collected, organized, and visualized all performance data that proves EcoShield's effectiveness.",
  "Ghulam Murtaza": "Designed EcoShield's financial model — from costing and pricing to inventory planning. Made sure the product is not just innovative, but commercially viable.",
  "Binish":         "Kept the entire project on track from day one. Managed timelines, coordinated team efforts, and ensured flawless documentation and final submission.",
};

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  const memberSkills = skills[member.name] || [];
  const memberContrib = contributions[member.name] || member.bio;

  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/75 backdrop-blur-md"
            style={{ zIndex: 9998 }}
          />
          <motion.div key="modal"
            initial={{ opacity: 0, scale: 0.88, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ zIndex: 9999 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-[480px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">

              {/* Header image */}
              <div className="relative pt-8 pb-5 w-full bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center text-center">
                <button type="button" onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-full text-white transition-colors"
                  style={{ zIndex: 10 }}>
                  <X size={16} />
                </button>
                <div className="absolute top-4 left-4 px-3 py-1 bg-emerald-500/90 backdrop-blur-md rounded-full">
                  <p className="text-white text-[9px] font-black uppercase tracking-widest">EcoShield Team</p>
                </div>
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl mt-8 mb-4">
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
                </div>
                <div className="px-6">
                  <h3 className="text-white text-2xl font-black leading-tight mb-2">{member.name}</h3>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-500/30 backdrop-blur-sm border border-emerald-400/30 rounded-full px-3 py-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-emerald-200 text-[10px] font-bold">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 py-5 space-y-4">
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Star size={12} className="text-emerald-600" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Contribution</p>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{memberContrib}</p>
                </div>

                {memberSkills.length > 0 && (
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2.5">Key Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {memberSkills.map((s, i) => (
                        <span key={i} className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 pt-1">
                  <div className="flex items-center gap-2 flex-1 bg-slate-50 border border-slate-100 rounded-xl px-4 py-3">
                    <Mail size={13} className="text-emerald-600 flex-shrink-0" />
                    <p className="text-xs font-bold text-emerald-600 truncate">{member.email}</p>
                  </div>
                  <button onClick={onClose}
                    className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs rounded-xl transition-colors active:scale-95 whitespace-nowrap">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function TeamPage() {
  const [selected, setSelected] = useState<Member | null>(null);

  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}

      {/* HERO */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 bg-[rgb(246,250,247)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-100 shadow-sm mb-6">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-800">Final Year Mega Project Team</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Minds Behind <br />
              <span className="text-emerald-600 italic font-medium">EcoShield.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A diverse team of 8 passionate students, working together to turn agricultural waste into sustainable nanotechnology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="py-24 -mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelected(m)}
                className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group text-center cursor-pointer"
              >
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <div className="absolute inset-0 bg-emerald-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white shadow-md">
                    <Image src={m.image} alt={m.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{m.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-full mb-4">{m.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 min-h-[60px]">{contributions[m.name] ? contributions[m.name].slice(0, 80) + "..." : m.bio}</p>
                <div className="flex justify-center gap-4 text-slate-300 group-hover:text-slate-400 border-t border-slate-50 pt-6">
                  <Mail size={16} className="hover:text-emerald-600 cursor-pointer transition-colors" />
                  <ExternalLink size={16} className="hover:text-emerald-600 cursor-pointer transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mega Project Journey</h2>
            <p className="text-slate-500">More than just an assignment; a real-world solution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <GraduationCap size={32} />, title: "Academic Excellence",  desc: "Combining Chemistry, Engineering, and Business into a unified sustainable model." },
              { icon: <Clock size={32} />,         title: "6 Months of R&D",       desc: "From initial rice husk collection to final formula stabilization and testing." },
              { icon: <Lightbulb size={32} />,     title: "Scalable Innovation",   desc: "A fully working prototype validated through rigorous scientific protocols." },
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="text-emerald-500 mb-6 bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center">{p.icon}</div>
                <h4 className="font-bold text-xl mb-3 text-slate-800">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic">"{p.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-emerald-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
            <p className="text-2xl font-medium leading-relaxed italic relative z-10">
              "Diversity in skills, unity in purpose. Our team proves that when students collaborate with a shared vision for the environment, innovation knows no bounds."
            </p>
            <div className="mt-8 relative z-10 flex flex-col items-center">
              <div className="w-12 h-px bg-emerald-500 mb-4" />
              <span className="text-sm font-bold uppercase tracking-widest text-emerald-400">The EcoShield Collective</span>
            </div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}