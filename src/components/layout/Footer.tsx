"use client";
import Link from "next/link";
import { 
  FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube, FaLeaf, FaArrowRight 
} from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-10 sm:pt-14 pb-8 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── TOP GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">

          {/* BRAND — full width on mobile */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 group-hover:rotate-12 transition-transform duration-300">
                <FaLeaf size={17} />
              </div>
              <span className="text-xl font-bold text-white tracking-tighter italic">EcoShield</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs opacity-75">
              Revolutionizing shoe care with sustainable rice-husk nanotechnology. 
              Protect your gear, preserve our planet.
            </p>
            <div className="flex gap-3 flex-wrap">
              {[
                { icon: <FaInstagram size={16} />, label: "Instagram" },
                { icon: <FaLinkedinIn size={16} />, label: "LinkedIn" },
                { icon: <FaFacebookF size={16} />, label: "Facebook" },
                { icon: <FaYoutube size={16} />,   label: "YouTube" },
              ].map((s, i) => (
                <a key={i} href="#" aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all duration-300">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-[2px] text-[10px]">Explore</h4>
            <ul className="space-y-3">
              {["Home", "About", "Science", "Testing", "Contact"].map((l) => (
                <li key={l}>
                  <Link href={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                    className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-[2px] text-[10px]">Resources</h4>
            <ul className="space-y-3">
              {["Shop", "Sustainability", "Team"].map((l) => (
                <li key={l}>
                  <Link href={`/${l.toLowerCase()}`}
                    className="text-sm hover:text-emerald-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER — full width on mobile */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4">
            <h4 className="text-white font-bold uppercase tracking-[2px] text-[10px]">Stay Protected</h4>
            <p className="text-xs text-slate-500 italic leading-relaxed">
              Join our community for the latest in eco-tech and shoe care innovations.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-slate-900 border border-slate-800 text-sm px-4 py-3 rounded-xl outline-none focus:border-emerald-500/50 transition-all text-white placeholder-slate-600 min-w-0"
              />
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group whitespace-nowrap">
                Subscribe
                <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="pt-3 space-y-2.5 border-t border-slate-900">
              <div className="flex items-center gap-2.5 text-xs opacity-70 hover:opacity-100 transition-opacity">
                <HiOutlineMail size={15} className="text-emerald-500 flex-shrink-0" />
                <span>hello@ecoshield.pk</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs opacity-70 hover:opacity-100 transition-opacity">
                <HiOutlineLocationMarker size={15} className="text-emerald-500 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[10px] font-bold tracking-[2px] uppercase opacity-50">
            © 2024 <span className="text-white">EcoShield Collective</span>. Built for Mega Project.
          </p>
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[2px]">
            {["Privacy", "Terms", "Support"].map((l) => (
              <Link key={l} href="#" className="hover:text-white transition-colors opacity-50 hover:opacity-100">{l}</Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}