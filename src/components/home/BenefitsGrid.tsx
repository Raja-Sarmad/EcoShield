const benefits = [
  { icon: "💧", title: "Water Resistant", desc: "Repels water and prevents stains from liquid." },
  { icon: "🌫️", title: "Dust Repellent", desc: "Keeps your shoes clean from dust and dirt." },
  { icon: "🛡️", title: "Stain Protection", desc: "Protects against oil, mud, and accidental stains." },
  { icon: "🌱", title: "Eco Friendly", desc: "Made from natural rice husk silica. Safe for environment." },
];

export default function BenefitsGrid() {
  return (
    <section className="py-16 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <div key={b.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <span className="text-4xl">{b.icon}</span>
            <h4 className="font-display font-semibold text-gray-900 mt-3 mb-1">{b.title}</h4>
            <p className="text-xs text-gray-500">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}