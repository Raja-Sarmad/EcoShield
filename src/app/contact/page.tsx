"use client";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-neutral py-16">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-display font-bold text-4xl text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-10">We'd love to hear from you.</p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <p className="text-2xl mb-2">✅</p>
            <h3 className="font-display font-bold text-xl text-gray-900">Message Sent!</h3>
            <p className="text-gray-500 mt-1">We'll get back to you within 24 hours.</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Name</label>
                <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Email</label>
                <input className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-1 block">Message</label>
              <textarea rows={4} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-primary resize-none" placeholder="Your message..." />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Did you find this product useful?</label>
              <div className="flex gap-3">
                {["Very Useful", "Somewhat Useful", "Not Sure"].map(o => (
                  <button key={o} className="border border-gray-200 px-3 py-2 rounded-lg text-xs hover:border-primary hover:text-primary transition-all">{o}</button>
                ))}
              </div>
            </div>
            <button
              onClick={() => setSubmitted(true)}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
}