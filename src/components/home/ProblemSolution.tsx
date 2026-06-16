import Image from "next/image";

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Problem */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">The Problem</p>
          <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
            Shoes get damaged too quickly.
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {["Water stains", "Dust and dirt", "Hard to clean materials", "Expensive maintenance"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-primary">✓</span> {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-xl overflow-hidden">
            <Image src="/images/shoe-before.jpg" alt="Dirty shoe" width={300} height={180} className="w-full object-cover" />
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl shadow-lg">
            →
          </div>
        </div>

        {/* Solution */}
        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Our Solution</p>
          <h3 className="font-display font-bold text-2xl text-gray-900 mb-4">
            EcoShield protects like armor.
          </h3>
          <p className="text-sm text-gray-600">
            EcoShield forms an invisible protective layer that keeps your shoes clean, dry and looking new.
          </p>
          <div className="mt-4 rounded-xl overflow-hidden">
            <Image src="/images/shoe-after.jpg" alt="Protected shoe" width={300} height={180} className="w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}