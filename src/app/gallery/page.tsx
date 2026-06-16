"use client";
import { useState } from "react";

const demos = [
  { id: 1, title: "Water Bead Test", category: "Water", emoji: "💧", desc: "Water droplets bead and roll off the coated surface instantly." },
  { id: 2, title: "Mud Splash Test", category: "Stain", emoji: "🟫", desc: "Mud applied to coated shoe — wipes clean with a cloth." },
  { id: 3, title: "Dust Chamber Test", category: "Dust", emoji: "🌫️", desc: "Shoe held in dust chamber for 30 minutes — surface stays clean." },
  { id: 4, title: "White Sneaker Test", category: "Stain", emoji: "👟", desc: "White sneaker coated with EcoShield — color perfectly preserved." },
  { id: 5, title: "Rain Simulation", category: "Water", emoji: "🌧️", desc: "Artificial rain for 10 minutes — interior stays dry." },
  { id: 6, title: "Leather Shoe Demo", category: "Leather", emoji: "👞", desc: "Leather shoe spray application and water resistance demo." },
];

const categories = ["All", "Water", "Stain", "Dust", "Leather"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? demos : demos.filter(d => d.category === active);

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light to-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Visual Proof</span>
          <h1 className="font-display font-extrabold text-5xl text-gray-900 mt-2 mb-4">Gallery & Demo</h1>
          <p className="text-gray-500 text-lg">See EcoShield in action — real demos, real results.</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-neutral">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  active === c ? "bg-primary text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(d => (
              <div key={d.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center text-7xl group-hover:scale-110 transition-transform duration-300">
                  {d.emoji}
                </div>
                <div className="p-5">
                  <span className="text-xs bg-green-100 text-primary font-semibold px-2 py-1 rounded-full">{d.category}</span>
                  <h3 className="font-display font-bold text-gray-900 mt-2 mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-500">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Embed Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Video</span>
          <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-8">Product Application Demo</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden aspect-video flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-black/60" />
            <div className="relative z-10 text-center text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
                ▶
              </div>
              <p className="font-display font-bold text-xl">Watch Application Demo</p>
              <p className="text-sm text-gray-300 mt-1">2:30 min • How to apply EcoShield correctly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before After Slider Description */}
      <section className="py-16 bg-neutral">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Side by Side</span>
          <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-10">Before & After Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "White Sneaker — Water Test", before: "Soaks through in 5s", after: "100% repelled" },
              { title: "Canvas Shoe — Mud Test", before: "Deep staining", after: "Wiped clean in seconds" },
            ].map(ba => (
              <div key={ba.title} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="p-4 border-b border-gray-100">
                  <p className="font-display font-semibold text-gray-900">{ba.title}</p>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-6 border-r border-gray-100 text-center">
                    <div className="w-full h-32 bg-gray-200 rounded-xl flex items-center justify-center text-4xl mb-3">👟</div>
                    <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">BEFORE</span>
                    <p className="text-xs text-gray-400 mt-2">{ba.before}</p>
                  </div>
                  <div className="p-6 text-center">
                    <div className="w-full h-32 bg-green-50 rounded-xl flex items-center justify-center text-4xl mb-3">✨</div>
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">AFTER</span>
                    <p className="text-xs text-gray-400 mt-2">{ba.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}