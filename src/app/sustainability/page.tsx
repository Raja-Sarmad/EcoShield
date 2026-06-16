const stats = [
  { value: "500+ kg", label: "Rice Husk Waste Utilized", icon: "🌾" },
  { value: "1000+", label: "Pairs of Shoes Protected", icon: "👟" },
  { value: "200+ kg", label: "CO₂ Emissions Prevented", icon: "🌍" },
  { value: "0", label: "Toxic Chemicals Used", icon: "🚫" },
];

const pillars = [
  {
    icon: "♻️",
    title: "Circular Economy",
    desc: "Rice husk is collected directly from local rice mills — transforming a zero-value waste stream into a premium nanomaterial.",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    icon: "🧪",
    title: "Green Chemistry",
    desc: "Our extraction process avoids harsh solvents. We use dilute acids, alkaline water, and low-temperature combustion to minimize chemical footprint.",
    color: "bg-blue-50 border-blue-200",
  },
  {
    icon: "🌱",
    title: "Biodegradable Formula",
    desc: "EcoShield's active ingredients break down naturally. Unlike synthetic PFAS coatings, they don't persist in soil or water systems.",
    color: "bg-green-50 border-green-200",
  },
  {
    icon: "🏭",
    title: "Local Sourcing",
    desc: "All raw materials are sourced within Pakistan — reducing transport emissions and supporting local agriculture.",
    color: "bg-purple-50 border-purple-200",
  },
  {
    icon: "🔋",
    title: "Low Energy Process",
    desc: "The combustion and extraction steps require significantly less energy than petrochemical-based waterproofing synthesis.",
    color: "bg-orange-50 border-orange-200",
  },
  {
    icon: "📦",
    title: "Minimal Packaging",
    desc: "Our bottles are made from recycled PET. Packaging uses soy-based inks and no plastic bubble wrapping.",
    color: "bg-red-50 border-red-200",
  },
];

const sdgs = [
  { num: "12", title: "Responsible Consumption", desc: "Reduces shoe maintenance waste" },
  { num: "13", title: "Climate Action", desc: "Prevents rice husk burning" },
  { num: "9", title: "Industry Innovation", desc: "Nano-silica from agri-waste" },
  { num: "15", title: "Life on Land", desc: "No toxic chemical runoff" },
];

export default function SustainabilityPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-green-300 font-bold">Our Commitment</span>
          <h1 className="font-display font-extrabold text-5xl mt-3 mb-4">Sustainability at the Core</h1>
          <p className="text-green-100 text-lg">
            EcoShield isn't just an eco-friendly product — it's proof that innovation and responsibility can go hand in hand.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-neutral">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <span className="text-4xl">{s.icon}</span>
              <p className="font-display font-extrabold text-3xl text-primary mt-3">{s.value}</p>
              <p className="text-xs text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6 Pillars */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Framework</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2">Our Sustainability Pillars</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map(p => (
              <div key={p.title} className={`rounded-2xl border p-6 ${p.color} hover:shadow-md transition-shadow`}>
                <span className="text-3xl">{p.icon}</span>
                <h3 className="font-display font-bold text-gray-900 mt-3 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rice Husk Story */}
      <section className="py-20 bg-neutral">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-bold">The Waste Problem</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-4">Why Rice Husk?</h2>
            <p className="text-gray-600 mb-4">
              Pakistan produces over 7 million tonnes of rice annually. For every tonne of rice, approximately 200 kg of husk is generated — most of it burned in open fields.
            </p>
            <p className="text-gray-600 mb-4">
              This burning releases CO₂, methane, and particulate matter. It contributes significantly to air pollution in rural Punjab and Sindh.
            </p>
            <p className="text-gray-600">
              EcoShield turns this problem into a solution — collecting husk waste and extracting its silica content to create a valuable, safe, and sustainable product.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Rice produced in Pakistan", val: "7M+ tonnes/year" },
              { label: "Husk generated", val: "~1.4M tonnes" },
              { label: "Husk burned in fields", val: "~60%" },
              { label: "Silica content in husk", val: "15–20%" },
            ].map(item => (
              <div key={item.label} className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="font-display font-extrabold text-2xl text-primary">{item.val}</p>
                <p className="text-xs text-gray-400 mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-green-300 font-bold">Global Goals</span>
          <h2 className="font-display font-bold text-3xl mt-2 mb-10">UN SDG Alignment</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {sdgs.map(s => (
              <div key={s.num} className="bg-white/10 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center text-white font-display font-extrabold text-xl mx-auto mb-3">
                  {s.num}
                </div>
                <h4 className="font-display font-semibold text-sm text-white mb-1">{s.title}</h4>
                <p className="text-xs text-green-200">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}