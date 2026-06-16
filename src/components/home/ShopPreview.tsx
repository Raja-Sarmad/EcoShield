import Link from "next/link";
import Image from "next/image";

export default function ShopPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Product Info */}
        <div className="flex items-start gap-4 md:col-span-1">
          <Image src="/images/bottle.png" alt="Bottle" width={80} height={100} />
          <div>
            <h3 className="font-display font-bold text-lg text-gray-900">EcoShield Spray</h3>
            <ul className="text-xs text-gray-600 mt-1 space-y-1">
              {["Long lasting protection","Safe on all shoe materials","Non toxic & eco-friendly","Easy to use"].map(f => (
                <li key={f} className="flex gap-1"><span className="text-primary">✓</span> {f}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Card */}
        <div className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100">
          <p className="text-3xl font-display font-extrabold text-gray-900">PKR 699</p>
          <p className="text-sm text-gray-500 mt-1">100 ml Spray Bottle</p>
          <Link href="/shop" className="mt-4 block bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors">
            Pre-Order Now
          </Link>
        </div>

        {/* Bundle Offers */}
        <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
          <h4 className="font-display font-bold text-gray-900 mb-3">Bundle Offers</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Spray + Cleaning Cloth</span>
              <span className="font-bold text-primary">PKR 899</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">2x Spray Pack</span>
              <span className="font-bold text-primary">PKR 1299</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}