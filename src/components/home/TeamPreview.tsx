"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Sparkles, Plus, Users, Link2, X, Mail, Star } from "lucide-react";

const team = [
  { name: "Rimsha Masood",  role: "Web & Digital Marketing Manager",       image: "/images/Rimsha.png",  email: "rimsha@ecoshield.pk",  bio: "Leading EcoShield's digital presence and marketing strategy." },
  { name: "Neha Arif",      role: "Leader & Branding & Packaging Designer", image: "/images/Neha.jpeg",   email: "neha@ecoshield.pk",    bio: "Driving the science behind EcoShield's bio-silica formula." },
  { name: "Ali Hussain",    role: "Research & Product Development Lead",    image: "/images/Ali.jpeg",    email: "ali@ecoshield.pk",     bio: "Co-leading product R&D with a focus on nanotechnology." },
  { name: "Uzair",          role: "Media & Presentation Designer",          image: "/images/Uzair.jpeg",  email: "uzair@ecoshield.pk",   bio: "Crafting the visual identity of EcoShield through media." },
  { name: "Kashif Mehmood", role: "Testing & Quality Assurance Lead",       image: "/images/Kashif.jpeg", email: "kashif@ecoshield.pk",  bio: "Ensuring every batch meets the highest quality benchmarks." },
  { name: "Humna",          role: "Testing Assistant & Data Analyst",       image: "/images/Humna.png",   email: "humna@ecoshield.pk",   bio: "Supporting QA processes and translating test data into insights." },
  { name: "Binish",         role: "Project Manager & Documentation Lead",   image: "/images/Binish.jpeg", email: "binish@ecoshield.pk",  bio: "Keeping the project on track with meticulous planning." },
  { name: "Ghulam Murtaza", role: "Finance & Operations Manager",           image: "/images/Ghulam.jpeg", email: "ghulam@ecoshield.pk",  bio: "Managing financial planning and operational efficiency." },
];

const extendedTeam = [...team, ...team, ...team];
type Member = typeof team[0];

const skills: Record<string, string[]> = {
  "Rimsha Masood":  ["Website Development", "Instagram Marketing", "Facebook Ads", "LinkedIn Strategy", "Content Calendar", "SEO & Analytics"],
  "Neha Arif":      ["Brand Identity", "Logo Design", "Bottle Label Design", "Packaging Design", "Product Naming", "Visual Storytelling"],
  "Ali Hussain":    ["Silica Extraction", "Nano-Formulation", "Chemical R&D", "Lab Testing", "Sustainable Materials", "Product Development"],
  "Uzair":          ["Motion Graphics", "Promotional Videos", "Demo Production", "Presentation Design", "Brand Animation", "Visual Effects"],
  "Kashif Mehmood": ["Water Resistance Testing", "Dust Shield Testing", "Stain Testing", "Durability Analysis", "QA Reports", "Technical Documentation"],
  "Humna":          ["Data Collection", "Test Assistance", "Analytical Charts", "Data Tables", "Performance Metrics", "Research Support"],
  "Binish":         ["Project Coordination", "Report Writing", "Meeting Records", "Timeline Management", "Final Submission", "Documentation"],
  "Ghulam Murtaza": ["Budget Planning", "Cost Analysis", "Pricing Strategy", "Inventory Management", "Financial Reports", "Operations"],
};

const contributions: Record<string, string> = {
  "Rimsha Masood":  "Built and managed EcoShield's entire digital ecosystem — from the website to all social media platforms. Drove brand awareness through strategic content and outreach campaigns.",
  "Neha Arif":      "Led the EcoShield team as project leader while designing the complete brand identity — from logo to label to packaging. Every visual element you see is her creation.",
  "Ali Hussain":    "Spearheaded the core science of EcoShield — extracting high-purity silica from rice husks and developing the nano-hydrophobic formula through months of lab research.",
  "Uzair":          "Brought EcoShield to life visually through animations, promotional videos, and demo content. His presentation design made the product shine in every pitch.",
  "Kashif Mehmood": "Validated EcoShield's performance through rigorous real-world tests. Every water, dust, and stain resistance claim is backed by his detailed technical reports.",
  "Humna":          "The analytical backbone of the testing team. Collected, organized, and visualized all performance data that proves EcoShield's effectiveness.",
  "Binish":         "Kept the entire project on track from day one. Managed timelines, coordinated team efforts, and ensured flawless documentation and final submission.",
  "Ghulam Murtaza": "Designed EcoShield's financial model — from costing and pricing to inventory planning. Made sure the product is not just innovative, but commercially viable.",
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

function MemberCard({ name, role, image, onClick }: { name: string; role: string; image: string; onClick: () => void }) {
  return (
    <div className="group relative w-[240px] md:w-[280px] flex-shrink-0 px-3">
      <div onClick={onClick} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 group-hover:border-emerald-200 transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-100 group-hover:-translate-y-2 cursor-pointer">
        <Image src={image} alt={name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-xl">
            <Link2 size={20} />
          </div>
        </div>
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50">
            <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Expert</p>
            <h4 className="text-sm font-black text-slate-800 leading-tight">{name}</h4>
            <p className="text-[10px] text-slate-400 font-bold mt-1 truncate">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TeamSlider() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <section className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      {selectedMember && <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />}

      <div className="absolute top-0 right-0 p-20 opacity-[0.03] rotate-12 pointer-events-none">
        <Users size={400} />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
              <Sparkles size={14} /> Global Collaboration
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              The Collective <span className="text-emerald-600">Force.</span>
            </h2>
          </div>
          <Link href="/team" className="group flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-2xl text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm active:scale-95">
            Full Directory <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <div className="relative flex overflow-hidden py-10">
        <motion.div className="flex whitespace-nowrap"
          animate={{ x: [0, -2000] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
          whileHover={{ transition: { duration: 100 } }}>
          {extendedTeam.map((m, index) => (
            <MemberCard key={index} name={m.name} role={m.role} image={m.image} onClick={() => setSelectedMember(m)} />
          ))}
          <div className="px-3 flex-shrink-0">
            <Link href="/team" className="block group">
              <div className="w-[240px] md:w-[280px] aspect-[4/5] rounded-[2.5rem] bg-emerald-600 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-105 shadow-xl shadow-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-45 transition-transform duration-700"><Plus size={150} strokeWidth={3} /></div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mb-6 backdrop-blur-md border border-white/30"><ArrowRight size={30} /></div>
                <h3 className="text-white text-2xl font-black leading-tight mb-2">View All <br /> Members</h3>
                <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest">Batch 2024</p>
              </div>
            </Link>
          </div>
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 mt-16 flex justify-center">
        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.4em] flex items-center gap-4">
          <span className="h-[1px] w-12 bg-slate-200" />
          Empowering Shoe Sustainability
          <span className="h-[1px] w-12 bg-slate-200" />
        </p>
      </div>
    </section>
  );
}