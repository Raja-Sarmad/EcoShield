const results = [
  { test: "Water Resistance", method: "Spray test (AATCC 22)", result: "90% Protection", rating: 90, badge: "Excellent" },
  { test: "Dust Resistance", method: "Chamber exposure test", result: "85% Protection", rating: 85, badge: "Very Good" },
  { test: "Stain Resistance", method: "Oil & mud application", result: "88% Protection", rating: 88, badge: "Excellent" },
  { test: "Durability", method: "5-day wear simulation", result: "Up to 7 Days", rating: 75, badge: "Good" },
  { test: "Material Safety", method: "Skin patch test", result: "No irritation", rating: 100, badge: "Safe" },
  { test: "Color Preservation", method: "Visual spectroscopy", result: "0% discoloration", rating: 100, badge: "Excellent" },
];

const comparisons = [
  { feature: "Eco-Friendly Formula", ecoshield: true, commercial: false },
  { feature: "Rice Husk Derived", ecoshield: true, commercial: false },
  { feature: "PFAS-Free", ecoshield: true, commercial: false },
  { feature: "Works on All Materials", ecoshield: true, commercial: true },
  { feature: "Water Resistance 80%+", ecoshield: true, commercial: true },
  { feature: "Affordable (< PKR 1000)", ecoshield: true, commercial: false },
];

export default function TestingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light to-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Lab Verified</span>
          <h1 className="font-display font-extrabold text-5xl text-gray-900 mt-2 mb-4">Testing & Results</h1>
          <p className="text-gray-500 text-lg">
            Every claim is backed by structured testing protocols. Here's the data.
          </p>
        </div>
      </section>

      {/* Results Table */}
      <section className="py-16 bg-neutral">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-primary font-bold">Data</span>
            <h2 className="font-display font-bold text-3xl text-gray-900 mt-2">Test Results Summary</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 px-5 text-left font-semibold">Test</th>
                  <th className="py-3 px-5 text-left font-semibold hidden md:table-cell">Method</th>
                  <th className="py-3 px-5 text-left font-semibold">Result</th>
                  <th className="py-3 px-5 text-left font-semibold">Rating</th>
                  <th className="py-3 px-5 text-left font-semibold">Badge</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr key={r.test} className={i % 2 === 0 ? "bg-white" : "bg-green-50"}>
                    <td className="py-3 px-5 font-medium text-gray-800">{r.test}</td>
                    <td className="py-3 px-5 text-gray-400 hidden md:table-cell text-xs">{r.method}</td>
                    <td className="py-3 px-5 font-bold text-primary">{r.result}</td>
                    <td className="py-3 px-5">
                      <div className="w-24 bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${r.rating}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 mt-0.5 block">{r.rating}%</span>
                    </td>
                    <td className="py-3 px-5">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        r.badge === "Excellent" ? "bg-green-100 text-green-700" :
                        r.badge === "Very Good" ? "bg-blue-100 text-blue-700" :
                        r.badge === "Safe" ? "bg-purple-100 text-purple-700" :
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {r.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Before After Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Visual Proof</span>
          <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-12">Before vs After</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Water Test", before: "Water soaks in", after: "Water beads off" },
              { label: "Mud Test", before: "Mud stains deeply", after: "Mud wipes off easily" },
              { label: "Dust Test", before: "Dust embeds in fabric", after: "Dust stays on surface" },
            ].map((t) => (
              <div key={t.label} className="bg-neutral rounded-2xl overflow-hidden shadow-sm">
                <div className="p-3 bg-gray-200 text-xs font-bold text-center text-gray-600 uppercase tracking-wider">
                  {t.label}
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-4 border-r border-gray-200">
                    <div className="w-full h-28 bg-gray-300 rounded-xl mb-2 flex items-center justify-center text-gray-500 text-3xl">
                      👟
                    </div>
                    <p className="text-xs text-center text-gray-500 font-medium">BEFORE</p>
                    <p className="text-xs text-center text-gray-400 mt-0.5">{t.before}</p>
                  </div>
                  <div className="p-4">
                    <div className="w-full h-28 bg-green-100 rounded-xl mb-2 flex items-center justify-center text-3xl">
                      ✨
                    </div>
                    <p className="text-xs text-center text-primary font-bold">AFTER</p>
                    <p className="text-xs text-center text-gray-400 mt-0.5">{t.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-neutral">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Comparison</span>
          <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-10">EcoShield vs Commercial Sprays</h2>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-5 text-left text-gray-500 font-medium">Feature</th>
                  <th className="py-3 px-5 text-center font-bold text-primary">🌿 EcoShield</th>
                  <th className="py-3 px-5 text-center font-bold text-gray-400">Commercial</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c, i) => (
                  <tr key={c.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-5 text-gray-700">{c.feature}</td>
                    <td className="py-3 px-5 text-center text-xl">{c.ecoshield ? "✅" : "❌"}</td>
                    <td className="py-3 px-5 text-center text-xl">{c.commercial ? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}