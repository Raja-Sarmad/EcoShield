"use client";
import { useState } from "react";
import Image from "next/image";

const bundles = [
  { id: 1, name: "100ml Spray Bottle", price: 699, desc: "Single spray bottle" },
  { id: 2, name: "Spray + Cleaning Cloth", price: 899, desc: "Bundle deal" },
  { id: 3, name: "2x Spray Pack", price: 1299, desc: "Best value" },
];

export default function ShopPage() {
  const [qty, setQty] = useState(1);
  const [selected, setSelected] = useState(bundles[0]);
  const [ordered, setOrdered] = useState(false);

  return (
    <div className="min-h-screen bg-neutral py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-display font-bold text-4xl text-gray-900 mb-2">Shop EcoShield</h1>
        <p className="text-gray-500 mb-10">Pre-order your bottle today. Limited stock available.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col items-center">
            <Image src="/images/bottle.png" alt="Bottle" width={200} height={250} className="drop-shadow-xl" />
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">Select Bundle</h2>
            <div className="space-y-3 mb-6">
              {bundles.map(b => (
                <button
                  key={b.id}
                  onClick={() => setSelected(b)}
                  className={`w-full flex justify-between items-center p-3 rounded-xl border-2 transition-all ${
                    selected.id === b.id ? "border-primary bg-green-50" : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <div className="text-left">
                    <p className="font-semibold text-sm text-gray-900">{b.name}</p>
                    <p className="text-xs text-gray-400">{b.desc}</p>
                  </div>
                  <p className="font-bold text-primary text-sm">PKR {b.price}</p>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-gray-600">Quantity:</span>
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 rounded-lg bg-gray-100 font-bold">−</button>
              <span className="font-semibold w-4 text-center">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="w-8 h-8 rounded-lg bg-gray-100 font-bold">+</button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-500 text-sm">Total:</span>
              <span className="font-display font-bold text-2xl text-primary">PKR {selected.price * qty}</span>
            </div>

            {ordered ? (
              <div className="text-center py-4 bg-green-50 rounded-xl text-primary font-semibold">
                ✅ Order Placed! We'll contact you soon.
              </div>
            ) : (
              <button
                onClick={() => setOrdered(true)}
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Pre-Order Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}