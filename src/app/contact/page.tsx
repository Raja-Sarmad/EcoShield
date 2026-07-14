"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Globe,
  Sparkles,
  ThumbsUp
} from "lucide-react";

export default function ContactPage() {
  // Fix 1: Initial value 'null' dena zaroori hai
  const formRef = useRef<HTMLFormElement>(null);
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [usefulness, setUsefulness] = useState("");

  const options = ["Very Useful", "Somewhat", "Not Sure"];

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Fix 2: Safety check agar formRef kisi wajah se khali ho
    if (!formRef.current) return;

    setLoading(true);

    // Fix 3: TypeScript ko batana ke ye values 'string' hi hain (as string)
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string; 
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string; 
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string; 

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log("Success:", result.text);
          setSubmitted(true);
          setLoading(false);
      }, (error) => {
          console.error("Error:", error.text);
          alert("Failed to send message. Please verify your EmailJS setup.");
          setLoading(false);
      });
  };

  // ... (Baaki saara return wala code same rahega)
  return (
    <div className="min-h-screen bg-[rgb(246,250,247)] py-10 sm:py-16 lg:py-24">
      {/* Rest of your JSX remains exactly the same */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* ... copy your existing return code here ... */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-16 items-start">
             {/* Left side info */}
             <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 space-y-8 sm:space-y-10">
                {/* ... existing content ... */}
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6">
                    Let's talk <br /> 
                    <span className="text-emerald-600 italic font-medium">Eco-Innovation.</span>
                  </h1>
                </div>
                {/* ... icons and other info ... */}
             </motion.div>

             {/* Right side form */}
             <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-7">
                <div className="bg-white rounded-[2rem] p-6 sm:p-12 shadow-2xl border border-white">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <div className="text-center py-10">Success!</div>
                    ) : (
                      <form ref={formRef} onSubmit={sendEmail}>
                        {/* Your existing form fields */}
                        <div className="space-y-5">
                          <input name="from_name" type="text" required className="w-full p-4 border rounded-2xl" placeholder="Full Name" />
                          <input name="from_email" type="email" required className="w-full p-4 border rounded-2xl" placeholder="Email" />
                          <textarea name="message" required className="w-full p-4 border rounded-2xl" placeholder="Message" />
                          <button type="submit" disabled={loading} className="w-full bg-black text-white p-4 rounded-2xl">
                             {loading ? "Sending..." : "Send Message"}
                          </button>
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
             </motion.div>
          </div>
      </div>
    </div>
  );
}