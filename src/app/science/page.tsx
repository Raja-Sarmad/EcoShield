const process = [
  {
    num: "01",
    title: "Rice Husk Collection",
    detail: "Rice husks are agricultural waste collected from local rice mills. Pakistan produces over 7 million tonnes of rice annually, generating enormous husk waste that is typically burned — releasing CO₂.",
    icon: "🌾",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    num: "02",
    title: "Pre-Treatment",
    detail: "Husks are washed with dilute acid (HCl) to remove metallic impurities and organic matter, then rinsed with distilled water until pH neutral.",
    icon: "🧪",
    color: "bg-blue-50 border-blue-200",
  },
  {
    num: "03",
    title: "Controlled Combustion",
    detail: "Pre-treated husks are burned at 600–700°C in a controlled furnace. At this temperature, organic carbon burns off and amorphous silica (SiO₂) remains as white ash.",
    icon: "🔥",
    color: "bg-orange-50 border-orange-200",
  },
  {
    num: "04",
    title: "Silica Extraction",
    detail: "The ash is treated with NaOH solution to produce sodium silicate (water glass). Acidification precipitates pure amorphous silica nanoparticles.",
    icon: "⚗️",
    color: "bg-purple-50 border-purple-200",
  },
  {
    num: "05",
    title: "Nano-Formulation",
    detail: "Silica particles are surface-modified with hydrophobic agents (e.g., PDMS) to enhance water-repellency. The final suspension is dispersed in an eco-friendly alcohol carrier.",
    icon: "🔬",
    color: "bg-green-50 border-green-200",
  },
  {
    num: "06",
    title: "Protective Coating",
    detail: "When sprayed, alcohol evaporates instantly leaving a nano-silica matrix bonded to shoe fibers — forming a transparent, breathable hydrophobic shield.",
    icon: "🛡️",
    color: "bg-primary-light border-green-200",
  },
];

const props = [
  { label: "Particle Size", value: "50–200 nm", note: "Nano-scale for deep fiber penetration" },
  { label: "Contact Angle", value: "> 120°", note: "Superhydrophobic threshold" },
  { label: "Silica Purity", value: "~ 94%", note: "After acid-alkali treatment" },
  { label: "Carrier Solvent", value: "Isopropanol", note: "Evaporates in < 60 seconds" },
  { label: "Coating Life", value: "5–7 days", note: "Under normal use conditions" },
  { label: "RH Tolerance", value: "Up to 95%", note: "Tested in high humidity" },
];

export default function SciencePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-primary-dark py-20 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-green-300 font-bold">Research & Innovation</span>
          <h1 className="font-display font-extrabold text-5xl mt-3 mb-4">The Science Behind EcoShield</h1>
          <p className="text-green-200 text-lg">
            From agricultural waste to nanotechnology — how rice husk silica becomes a world-class shoe protector.
          </p>
        </div>
      </section>

      {/* Core Concept */}
      <section className="py-16 bg-neutral">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { icon: "🌾", title: "Agricultural Waste", sub: "Rice husk — zero-value byproduct" },
            { icon: "→", title: "", sub: "" },
            { icon: "⚗️", title: "Silica Nanoparticles", sub: "SiO₂ — high-value nanomaterial" },
          ].map((c, i) => (
            <div key={i} className={`${c.icon === "→" ? "flex items-center justify-center text-4xl text-primary" : "bg-white rounded-2xl p-6 shadow-sm"}`}>
              {c.icon !== "→" ? (
                <>
                  <span className="text-4xl">{c.icon}</span>
                  <h3 className="font-display font-bold text-lg text-gray-900 mt-3">{c.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{c.sub}</p>
                </>
              ) : (
                <span>{c.icon}</span>
              )}
            </div>
          ))}
        </div>
        <div className="max-w-5xl mx-auto px-4 mt-4 flex justify-center">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center max-w-xs">
            <span className="text-4xl">🛡️</span>
            <h3 className="font-display font-bold text-lg text-gray-900 mt-3">Shoe Protection Spray</h3>
            <p className="text-sm text-gray-400 mt-1">Eco-friendly, invisible, durable</p>
          </div>
        </div>
      </section>

      {/* Step by Step Process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Process Flow</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2">Silica Extraction & Formulation</h2>
          </div>
          <div className="space-y-6">
            {process.map((p, i) => (
              <div key={p.num} className={`rounded-2xl border p-6 ${p.color} flex gap-6 items-start`}>
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display font-extrabold text-gray-200 text-3xl select-none leading-none">{p.num}</span>
                    <h3 className="font-display font-bold text-gray-900 text-lg">{p.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{p.detail}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:flex flex-shrink-0 items-center text-gray-300 text-xl self-center">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Table */}
      <section className="py-20 bg-neutral">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Technical Specs</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2">Key Material Properties</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 px-6 text-left font-semibold">Property</th>
                  <th className="py-3 px-6 text-left font-semibold">Value</th>
                  <th className="py-3 px-6 text-left font-semibold">Significance</th>
                </tr>
              </thead>
              <tbody>
                {props.map((p, i) => (
                  <tr key={p.label} className={i % 2 === 0 ? "bg-white" : "bg-green-50"}>
                    <td className="py-3 px-6 font-medium text-gray-700">{p.label}</td>
                    <td className="py-3 px-6 font-bold text-primary">{p.value}</td>
                    <td className="py-3 px-6 text-gray-500">{p.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eco Innovation Block */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-green-300 font-bold">Environmental Impact</span>
          <h2 className="font-display font-bold text-3xl mt-2 mb-6">Eco-Friendly Innovation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🌾", title: "Waste Utilization", desc: "Converts rice husk waste that would be burned into a high-value nanomaterial." },
              { icon: "🚫", title: "No Harsh Chemicals", desc: "Eliminates fluorocarbons (PFAS) found in conventional waterproofing sprays." },
              { icon: "🌍", title: "Carbon Footprint", desc: "Low-energy process and natural feedstock significantly reduces CO₂ vs synthetic alternatives." },
            ].map((e) => (
              <div key={e.title} className="bg-white/10 rounded-2xl p-6 text-left">
                <span className="text-3xl">{e.icon}</span>
                <h4 className="font-display font-semibold text-white mt-3 mb-2">{e.title}</h4>
                <p className="text-sm text-green-200">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}