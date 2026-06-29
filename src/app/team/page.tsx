"use client";
import React from "react";
import Image from "next/image"; // Image import ki
import { motion } from "framer-motion";
import { 
  GraduationCap,
  Clock,
  Lightbulb,
  Mail,
  ExternalLink
} from "lucide-react";

const team = [
  { 
    name: "Neha Arif", 
    role: "Leader & Branding & Packaging Designer", 
    image: "/images/Neha.jpeg", 
    bio: "Branding & Packaging Designer: Logo, product name, bottle label, packaging design, brand identity." 
  },
  { 
    name: "Rimsha Masood", 
    role: "Web & Digital Marketing Manager", 
    image: "/images/Rimsha.png", 
    bio: "Website, Instagram, Facebook, LinkedIn, content calendar, and digital outreach." 
  },
  { 
    name: "Ali Hasnain", 
    role: "Research & Product Development Lead", 
    image: "/images/Ali.jpeg", 
    bio: "Silica extraction, formulation, chemical methods, and sustainable product development." 
  },
  { 
    name: "Uzair", 
    role: "Media & Presentation Designer", 
    image: "/images/Uzair.jpeg", 
    bio: "Animations, promotional videos, demo video, and high-impact presentation design." 
  },
  { 
    name: "Kashif Mehmood", 
    role: "Testing & Quality Assurance Lead", 
    image: "/images/Kashif.jpeg", 
    bio: "Water, dust, stain, and durability testing with detailed technical reports." 
  },
  { 
    name: "Humna", 
    role: "Testing Assistant & Data Analyst", 
    image: "/images/Humna.png", 
    bio: "Assisting in testing, data collection, and creating analytical charts/tables." 
  },
  { 
    name: "Ghulam Murtaza", 
    role: "Finance & Operations Manager", 
    image: "/images/Ghulam.jpeg", 
    bio: "Budget management, costing, pricing strategies, and inventory planning." 
  },
  { 
    name: "Binish", 
    role: "Project Manager & Documentation Lead", 
    image: "/images/Binish.jpeg", 
    bio: "Team coordination, report writing, meeting records, and final project submission." 
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white text-slate-900 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 bg-[rgb(246,250,247)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-emerald-100 shadow-sm mb-6">
              <GraduationCap className="w-4 h-4 text-emerald-600" />
              <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-800">Final Year Mega Project Team</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Minds Behind <br />
              <span className="text-emerald-600 italic font-medium">EcoShield.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A diverse team of 8 passionate students, working together to turn agricultural waste 
              into sustainable nanotechnology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- TEAM GRID --- */}
      <section className="py-24 -mt-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group text-center"
              >
                {/* Image Container instead of Icon */}
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <div className="absolute inset-0 bg-emerald-100 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white shadow-md">
                    <Image 
                        src={m.image} 
                        alt={m.name} 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{m.name}</h3>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-full mb-4">
                  {m.role}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 min-h-[60px]">
                  {m.bio}
                </p>

                <div className="flex justify-center gap-4 text-slate-300 group-hover:text-slate-400 border-t border-slate-50 pt-6">
                   <Mail size={16} className="hover:text-emerald-600 cursor-pointer transition-colors" />
                   <ExternalLink size={16} className="hover:text-emerald-600 cursor-pointer transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROJECT INFO SECTION --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mega Project Journey</h2>
            <p className="text-slate-500">More than just an assignment; a real-world solution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <GraduationCap size={32} />, 
                title: "Academic Excellence", 
                desc: "Combining Chemistry, Engineering, and Business into a unified sustainable model." 
              },
              { 
                icon: <Clock size={32} />, 
                title: "6 Months of R&D", 
                desc: "From initial rice husk collection to final formula stabilization and testing." 
              },
              { 
                icon: <Lightbulb size={32} />, 
                title: "Scalable Innovation", 
                desc: "A fully working prototype validated through rigorous scientific protocols." 
              },
            ].map((p, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center text-center">
                <div className="text-emerald-500 mb-6 bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {p.icon}
                </div>
                <h4 className="font-bold text-xl mb-3 text-slate-800">{p.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed italic">"{p.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COLLABORATION QUOTE --- */}
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