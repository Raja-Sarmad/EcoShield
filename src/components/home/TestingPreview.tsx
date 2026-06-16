import Image from "next/image";

const results = [
  { test: "Water Resistance Test", result: "90% Protection" },
  { test: "Dust Resistance Test", result: "85% Protection" },
  { test: "Stain Resistance Test", result: "88% Protection" },
  { test: "Durability", result: "Up to 7 Days" },
  { test: "Material Compatibility", result: "Leather, Canvas, Suede, Fabric" },
];

export default function TestingPreview() {
  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Lab Results</p>
        <h2 className="font-display font-bold text-3xl text-gray-900">Tested. Proven. Trusted.</h2>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-primary text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">Test</th>
                <th className="py-3 px-4 text-left font-semibold">Result</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => (
                <tr key={r.test} className={i % 2 === 0 ? "bg-white" : "bg-green-50"}>
                  <td className="py-3 px-4 text-gray-700">{r.test}</td>
                  <td className="py-3 px-4 font-medium text-primary">{r.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1,2,3].map(n => (
            <div key={n} className="rounded-xl overflow-hidden">
              <Image src="/images/shoe-before.jpg" alt="Before" width={150} height={100} className="w-full object-cover" />
              <div className="bg-gray-100 text-center text-xs py-1 text-gray-500">BEFORE</div>
              <Image src="/images/shoe-after.jpg" alt="After" width={150} height={100} className="w-full object-cover" />
              <div className="bg-primary text-center text-xs py-1 text-white font-semibold">AFTER</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}