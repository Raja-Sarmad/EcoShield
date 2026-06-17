"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Beaker, 
  Video, 
  ClipboardCheck, 
  BarChart3, 
  Wallet, 
  Palette, 
  Calendar,
  GraduationCap,
  Clock,
  Lightbulb,
  // Brand icons ki jagah ye generic icons use kar rahe hain
  Mail,
  ExternalLink
} from "lucide-react";

const team = [
  { 
    name: "Ayesha Khan", 
    role: "Web & Digital Marketing", 
    icon: <Laptop className="w-6 h-6" />, 
    bio: "Handles all digital presence, website design, and social media strategy for EcoShield." 
  },
  { 
    name: "Mariam Ali", 
    role: "Research & Development", 
    icon: <Beaker className="w-6 h-6" />, 
    bio: "Leads the silica extraction research and formulation development process." 
  },
  { 
    name: "Hassan Raza", 
    role: "Media & Presentation", 
    icon: <Video className="w-6 h-6" />, 
    bio: "Creates visual content, demo videos, and presentation materials for the project." 
  },
  { 
    name: "Zainab Malik", 
    role: "Quality Assurance Lead", 
    icon: <ClipboardCheck className="w-6 h-6" />, 
    bio: "Designs and executes all product testing protocols and documents results." 
  },
  { 
    name: "Usman Javed", 
    role: "Data Analyst", 
    icon: <BarChart3 className="w-6 h-6" />, 
    bio: "Assists in test execution and handles statistical analysis of all test data." 
  },
  { 
    name: "Hira Fatima", 
    role: "Finance & Operations", 
    icon: <Wallet className="w-6 h-6" />, 
    bio: "Manages costing, budgeting, pre-order operations, and financial projections." 
  },
  { 
    name: "Bilal Ahmed", 
    role: "Branding & Packaging", 
    icon: <Palette className="w-6 h-6" />, 
    bio: "Designed the EcoShield logo, bottle label, and all brand identity materials." 
  },
  { 
    name: "Sara Nadeem", 
    role: "Project Manager", 
    icon: <Calendar className="w-6 h-6" />, 
    bio: "Oversees timelines, coordinates team deliverables, and maintains documentation." 
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
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 mx-auto mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  {m.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-1">{m.name}</h3>
                <p className="text-[11px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 inline-block px-3 py-1 rounded-full mb-4">
                  {m.role}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {m.bio}
                </p>

                {/* Fixed Icons here: Mail and ExternalLink */}
                <div className="flex justify-center gap-4 text-slate-300 group-hover:text-slate-400">
                   <Mail size={16} className="hover:text-emerald-600 cursor-pointer" />
                   <ExternalLink size={16} className="hover:text-emerald-600 cursor-pointer" />
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