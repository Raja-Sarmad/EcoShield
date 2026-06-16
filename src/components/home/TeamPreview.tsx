"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const team = [
  { name: "Ayesha Khan", role: "Web & Digital Marketing" },
  { name: "Mariam Ali", role: "Research & Development" },
  { name: "Hassan Raza", role: "Media & Presentation" },
  { name: "Zainab Malik", role: "Testing & Quality Assurance Lead" },
  { name: "Usman Javed", role: "Testing Assistant & Data Analyst" },
  { name: "Hira Fatima", role: "Finance & Operations" },
  { name: "Bilal Ahmed", role: "Branding & Packaging" },
  { name: "Sara Nadeem", role: "Project Manager & Documentation" },
];

function MemberCard({ name, role }: { name: string; role: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-xl overflow-hidden border-2 border-green-200">
        {!imgError ? (
          <Image
            src={`/images/team/${name.split(" ")[0].toLowerCase()}.jpg`}
            alt={name}
            width={56}
            height={56}
            className="object-cover w-full h-full"
            onError={() => setImgError(true)}
          />
        ) : (
          <span>👤</span>
        )}
      </div>
      <p className="text-xs font-semibold text-gray-800 leading-tight">{name}</p>
      <p className="text-xs text-gray-400 leading-tight">{role}</p>
    </div>
  );
}

export default function TeamPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-widest text-primary font-bold mb-2">Our People</p>
        <h2 className="font-display font-bold text-3xl text-gray-900 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {team.map((m) => (
            <MemberCard key={m.name} name={m.name} role={m.role} />
          ))}
        </div>
        <Link
          href="/team"
          className="mt-10 inline-block border border-primary text-primary px-6 py-2 rounded-lg text-sm font-semibold hover:bg-primary hover:text-white transition-all"
        >
          View Full Team
        </Link>
      </div>
    </section>
  );
}