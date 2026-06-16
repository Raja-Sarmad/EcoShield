import Image from "next/image";

const features = [
  {
    icon: "🌾",
    title: "Natural Origin",
    desc: "Derived from rice husk — a byproduct of rice milling that would otherwise be burned or discarded.",
  },
  {
    icon: "⚗️",
    title: "Silica-Based Formula",
    desc: "Silica nanoparticles extracted from rice husk form the core of EcoShield's protective coating.",
  },
  {
    icon: "🛡️",
    title: "Invisible Protection",
    desc: "The nano-layer bonds with shoe fibers without changing texture, color, or breathability.",
  },
  {
    icon: "♻️",
    title: "Zero Harsh Chemicals",
    desc: "No fluorocarbons, no solvents. Safe for humans, animals, and the environment.",
  },
];

const useCases = [
  { shoe: "👟", type: "Sneakers", desc: "Keeps white sneakers bright and repels mud." },
  { shoe: "👞", type: "Leather Shoes", desc: "Adds water resistance without altering sheen." },
  { shoe: "👟", type: "Canvas Shoes", desc: "Prevents fabric staining and color fading." },
  { shoe: "🥾", type: "Suede / Fabric", desc: "Creates breathable shield against moisture." },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-light to-white py-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">About the Product</span>
            <h1 className="font-display font-extrabold text-5xl text-gray-900 mt-2 mb-4">
              What is EcoShield?
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              EcoShield is a rice husk–derived silica spray that creates an invisible nano-protective
              layer on any shoe surface. It repels water, blocks dust, and resists stains — all while
              being 100% eco-friendly and biodegradable.
            </p>
            <div className="mt-6 flex gap-4">
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100 text-center">
                <p className="font-display font-bold text-2xl text-primary">100ml</p>
                <p className="text-xs text-gray-400 mt-0.5">Bottle Size</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100 text-center">
                <p className="font-display font-bold text-2xl text-primary">5–7 Days</p>
                <p className="text-xs text-gray-400 mt-0.5">Coating Life</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-sm border border-gray-100 text-center">
                <p className="font-display font-bold text-2xl text-primary">All Shoes</p>
                <p className="text-xs text-gray-400 mt-0.5">Compatible</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-green-100 rounded-full absolute -top-4 -left-4 opacity-50 blur-2xl" />
              <Image
                src="/images/bottle.png"
                alt="EcoShield Bottle"
                width={300}
                height={360}
                className="relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Mechanism</span>
          <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-4">How EcoShield Works</h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Rice husk silica nanoparticles form a breathable, hydrophobic layer on shoe fibers —
            blocking water molecules while allowing air circulation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {[
              { step: "01", title: "Spray Application", desc: "Hold 15–20 cm from shoe. Spray evenly across the surface in a sweeping motion." },
              { step: "02", title: "Nano-Layer Bonding", desc: "Silica particles penetrate fabric fibers and form a cross-linked hydrophobic matrix." },
              { step: "03", title: "Full Protection", desc: "Within 2–3 minutes the coat sets. Shoe is now water, dust, and stain resistant." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 shadow-sm text-left relative overflow-hidden">
                <span className="absolute top-4 right-4 font-display font-extrabold text-5xl text-green-50 select-none">{s.step}</span>
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold mb-4">
                  {s.step}
                </div>
                <h3 className="font-display font-bold text-lg text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Unique */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Differentiators</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2">Why EcoShield is Unique</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-green-50 rounded-2xl p-6 border border-green-100 hover:shadow-md transition-shadow">
                <span className="text-3xl">{f.icon}</span>
                <h4 className="font-display font-semibold text-gray-900 mt-3 mb-2">{f.title}</h4>
                <p className="text-sm text-gray-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Compatibility</span>
          <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-12">Where Can You Use It?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((u) => (
              <div key={u.type} className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <span className="text-5xl">{u.shoe}</span>
                <h4 className="font-display font-semibold text-gray-900 mt-3 mb-1">{u.type}</h4>
                <p className="text-xs text-gray-400">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}