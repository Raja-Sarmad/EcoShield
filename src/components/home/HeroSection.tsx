import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-light via-white to-green-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-green-100 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
            100% Eco Friendly
          </span>
          <h1 className="font-display font-extrabold text-5xl lg:text-6xl text-gray-900 leading-tight">
            EcoShield
          </h1>
          <p className="text-lg font-medium text-gray-600 mt-1">Rice Husk Based Shoe Protection Spray</p>
          <p className="text-2xl font-display font-bold text-primary mt-3">
            Protect Your Shoes. Sustain the Planet.
          </p>
          <p className="text-gray-500 mt-4 max-w-md mx-auto lg:mx-0">
            A powerful, eco-friendly spray that creates an invisible protective layer against water, dust and stains.
          </p>
          <div className="mt-8 flex gap-4 justify-center lg:justify-start">
            <Link href="/about" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-all shadow-md">
              Explore Product
            </Link>
            <Link href="/gallery" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all flex items-center gap-2">
              ▶ Watch Demo
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center relative">
          <div className="w-72 h-72 bg-green-100 rounded-full absolute opacity-40 blur-3xl" />
          <Image
            src="/images/bottle.jpeg"
            alt="EcoShield Spray Bottle"
            width={350}
            height={400}
            className="relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}