const stats = [
  { value: "500+ kg", label: "Rice Husk Waste Used" },
  { value: "1000+ pairs", label: "Shoes Protected" },
  { value: "200+ kg", label: "CO₂ Reduced" },
];

export default function SustainabilityBanner() {
  return (
    <section className="py-20 bg-primary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/rice-husk.jpg')] bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-green-300 font-bold mb-2">Our Impact</p>
        <h2 className="font-display font-bold text-3xl mb-10">Sustainable Innovation.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-extrabold text-4xl text-green-300">{s.value}</p>
              <p className="text-sm text-green-100 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-green-200 max-w-lg mx-auto text-sm">
          We turn agricultural waste into a product that protects your shoes and protects our planet.
        </p>
      </div>
    </section>
  );
}