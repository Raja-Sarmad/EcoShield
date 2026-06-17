"use client";
import Link from "next/link";
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaFacebookF, 
  FaYoutube, 
  FaLeaf, 
  FaArrowRight 
} from "react-icons/fa";
import { 
  HiOutlineMail, 
  HiOutlineLocationMarker 
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10 relative overflow-hidden border-t border-slate-900">
      {/* Background Subtle Glow - Premium Touch */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* --- BRAND COLUMN --- */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 group-hover:rotate-12 transition-transform duration-300">
                <FaLeaf size={20} />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter italic">EcoShield</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs opacity-80">
              Revolutionizing shoe care with sustainable rice-husk nanotechnology. 
              Protect your gear, preserve our planet.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram size={18} />, label: "Instagram" },
                { icon: <FaLinkedinIn size={18} />, label: "LinkedIn" },
                { icon: <FaFacebookF size={18} />, label: "Facebook" },
                { icon: <FaYoutube size={18} />, label: "YouTube" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* --- QUICK LINKS --- */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-[2px] text-[10px]">Explore</h4>
            <ul className="space-y-4">
              {["Home", "About", "Science", "Testing", "Contact"].map((l) => (
                <li key={l}>
                  <Link 
                    href={l === "Home" ? "/" : `/${l.toLowerCase()}`} 
                    className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COMPANY --- */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-[2px] text-[10px]">Resources</h4>
            <ul className="space-y-4">
              {["Shop", "Sustainability", "Team"].map((l) => (
                <li key={l}>
                  <Link 
                    href={`/${l.toLowerCase()}`} 
                    className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* --- NEWSLETTER --- */}
          <div className="space-y-6">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[2px] text-[10px]">Stay Protected</h4>
            <p className="text-xs text-slate-500 italic leading-relaxed">
              Join our community for the latest in eco-tech and shoe care innovations.
            </p>
            <div className="flex flex-col gap-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-900 border border-slate-800 text-sm px-4 py-3 rounded-xl outline-none focus:border-emerald-500/50 transition-all text-white placeholder-slate-600"
                />
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-xl shadow-emerald-950/20 flex items-center justify-center gap-2 group">
                Subscribe 
                <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="pt-4 space-y-3 border-t border-slate-900">
              <div className="flex items-center gap-3 text-xs opacity-70 hover:opacity-100 transition-opacity">
                <HiOutlineMail size={16} className="text-emerald-500" />
                <span>hello@ecoshield.pk</span>
              </div>
              <div className="flex items-center gap-3 text-xs opacity-70 hover:opacity-100 transition-opacity">
                <HiOutlineLocationMarker size={16} className="text-emerald-500" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-[2px] uppercase opacity-50">
            © 2024 <span className="text-white">EcoShield Collective</span>. Built for Mega Project.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[2px]">
            <Link href="#" className="hover:text-white transition-colors opacity-50 hover:opacity-100">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors opacity-50 hover:opacity-100">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors opacity-50 hover:opacity-100">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}