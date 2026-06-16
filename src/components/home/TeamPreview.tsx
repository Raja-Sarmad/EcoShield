"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Plus, Users, Link2 } from "lucide-react";

const team = [
  { name: "Ayesha Khan", role: "Web & Digital Marketing" },
  { name: "Mariam Ali", role: "Research & Development" },
  { name: "Hassan Raza", role: "Media & Presentation" },
  { name: "Zainab Malik", role: "Quality Assurance Lead" },
  { name: "Usman Javed", role: "Data Analyst" },
  { name: "Hira Fatima", role: "Finance & Operations" },
  { name: "Bilal Ahmed", role: "Branding & Packaging" },
  { name: "Sara Nadeem", role: "Project Manager" },
];

// Marquee ke liye hum array ko triple kar dete hain taake gap na aaye
const extendedTeam = [...team, ...team, ...team];

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="group relative w-[240px] md:w-[280px] flex-shrink-0 px-3">
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 group-hover:border-emerald-200 transition-all duration-500 shadow-sm group-hover:shadow-2xl group-hover:shadow-emerald-100 group-hover:-translate-y-2">
        <Image
          src="/images/girl.jpeg"
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Glass Overlay on Hover */}
        <div className="absolute inset-0 bg-emerald-900/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-xl">
                <Link2 size={20} />
            </div>
        </div>

        {/* Info Label */}
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
  return (
    <section className="relative py-24 bg-[#FAF9F6] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] rotate-12 pointer-events-none">
        <Users size={400} />
      </div>

      <div className="container mx-auto px-4 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]"
            >
              <Sparkles size={14} /> Global Collaboration
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              The Collective <span className="text-emerald-600">Force.</span>
            </h2>
          </div>
          
          <Link
            href="/team"
            className="group flex items-center gap-3 bg-white border border-slate-200 px-8 py-4 rounded-2xl text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all shadow-sm active:scale-95"
          >
            Full Directory <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── SEAMLESS MARQUEE SLIDER ── */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{
            x: [0, -2000], // Loop length (Adjust based on team size)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, // Slider Speed (Higher = Slower)
              ease: "linear",
            },
          }}
          // Pause on Hover
          whileHover={{ transition: { duration: 100 } }}
        >
          {extendedTeam.map((m, index) => (
            <MemberCard key={index} name={m.name} role={m.role} />
          ))}

          {/* Special "View All" Card inside the slider */}
          <div className="px-3 flex-shrink-0">
            <Link href="/team" className="block group">
              <div className="w-[240px] md:w-[280px] aspect-[4/5] rounded-[2.5rem] bg-emerald-600 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 hover:scale-105 shadow-xl shadow-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-45 transition-transform duration-700">
                    <Plus size={150} strokeWidth={3} />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mb-6 backdrop-blur-md border border-white/30">
                    <ArrowRight size={30} />
                </div>
                <h3 className="text-white text-2xl font-black leading-tight mb-2">View All <br /> Members</h3>
                <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest">Batch 2024</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Edge Fades (Premium Touch) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Branding Note */}
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