import Image from "next/image";

const team = [
  { name: "Ayesha Khan", role: "Web & Digital Marketing", emoji: "💻", bio: "Handles all digital presence, website design, and social media strategy for EcoShield." },
  { name: "Mariam Ali", role: "Research & Development", emoji: "🔬", bio: "Leads the silica extraction research and formulation development process." },
  { name: "Hassan Raza", role: "Media & Presentation", emoji: "🎬", bio: "Creates visual content, demo videos, and presentation materials for the project." },
  { name: "Zainab Malik", role: "Testing & Quality Assurance Lead", emoji: "🧪", bio: "Designs and executes all product testing protocols and documents results." },
  { name: "Usman Javed", role: "Testing Assistant & Data Analyst", emoji: "📊", bio: "Assists in test execution and handles statistical analysis of all test data." },
  { name: "Hira Fatima", role: "Finance & Operations", emoji: "💰", bio: "Manages costing, budgeting, pre-order operations, and financial projections." },
  { name: "Bilal Ahmed", role: "Branding & Packaging", emoji: "🎨", bio: "Designed the EcoShield logo, bottle label, and all brand identity materials." },
  { name: "Sara Nadeem", role: "Project Manager & Documentation", emoji: "📋", bio: "Oversees timelines, coordinates team deliverables, and maintains project documentation." },
];

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-light to-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">The People</span>
          <h1 className="font-display font-extrabold text-5xl text-gray-900 mt-2 mb-4">Meet Our Team</h1>
          <p className="text-gray-500 text-lg">
            8 passionate students. 1 eco-innovation. Built from scratch for our Mega Project.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-neutral">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <div key={m.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl overflow-hidden border-4 border-green-100 group-hover:border-primary transition-colors">
                {m.emoji}
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-0.5">{m.name}</h3>
              <span className="inline-block bg-green-100 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                {m.role}
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">About This Project</span>
          <h2 className="font-display font-bold text-3xl text-gray-900 mt-2 mb-6">Our Mega Project Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🎓", title: "Academic Project", desc: "Submitted as our final year Mega Project — combining chemistry, engineering, and business." },
              { icon: "⏱️", title: "6 Months of Work", desc: "From ideation to testing to presentation — every step done collaboratively." },
              { icon: "🌱", title: "Real Innovation", desc: "Not just a paper project — a working prototype tested and validated in lab conditions." },
            ].map(p => (
              <div key={p.title} className="bg-neutral rounded-2xl p-6 text-center">
                <span className="text-3xl">{p.icon}</span>
                <h4 className="font-display font-bold text-gray-900 mt-3 mb-2">{p.title}</h4>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}