import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-display font-bold text-lg mb-2">🌿 EcoShield</h3>
          <p className="text-sm">Protect Your Shoes. Sustain the Planet.</p>
          <div className="flex gap-3 mt-4 text-gray-400 text-xl">
            <span>📸</span><span>📘</span><span>▶️</span><span>💼</span>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          {["Home","About","Science","Testing","Contact"].map(l => (
            <Link key={l} href={`/${l.toLowerCase()}`} className="block text-sm hover:text-white py-0.5">{l}</Link>
          ))}
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Shop</h4>
          {["Shop","Sustainability","Team"].map(l => (
            <Link key={l} href={`/${l.toLowerCase()}`} className="block text-sm hover:text-white py-0.5">{l}</Link>
          ))}
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <p className="text-sm">✉️ info@ecoshieldspray.com</p>
          <p className="text-sm mt-1">📞 +92 300 1234567</p>
          <p className="text-sm mt-1">📍 Lahore, Pakistan</p>
          <div className="mt-4">
            <p className="text-sm font-semibold text-white mb-2">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-sm px-3 py-2 rounded-lg flex-1 outline-none text-white placeholder-gray-500"
              />
              <button className="bg-primary text-white text-sm px-3 py-2 rounded-lg">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
        © 2024 EcoShield. All Rights Reserved.
      </div>
    </footer>
  );
}