const steps = [
  { num: "1", title: "Rice Husk", desc: "Collected from rice milling industry.", emoji: "🌾" },
  { num: "2", title: "Silica Extraction", desc: "Silica is extracted using green chemistry.", emoji: "⚗️" },
  { num: "3", title: "Formulation", desc: "Silica is combined in a special formula to create the spray.", emoji: "🔬" },
  { num: "4", title: "Protective Shield", desc: "Forms a nano protective layer on your shoes.", emoji: "🛡️" },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Process</p>
        <h2 className="font-display font-bold text-3xl text-gray-900 mb-12">How It Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {steps.map((s, i) => (
            <div key={s.num} className="flex flex-col items-center gap-3 relative">
              <div className="w-16 h-16 bg-green-50 border-2 border-primary rounded-full flex items-center justify-center text-3xl">
                {s.emoji}
              </div>
              <div className="text-xs font-bold text-primary">{s.num}. {s.title}</div>
              <p className="text-xs text-gray-500 text-center">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute right-0 top-7 translate-x-1/2 text-gray-300 text-xl">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}