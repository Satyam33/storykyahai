"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    category: "Kahani (Branding)",
    title: "Brand Identity & Strategy",
    description: "Your brand is more than just a logo. We craft its whole personality.",
    items: ["Brand Identity", "Brand Guideline", "Brand Personality", "Packaging", "Space Design", "Brand Strategy"]
  },
  {
    category: "Digital",
    title: "Digital Presence & Marketing",
    description: "Making sure your story reaches the right screens, at the right time.",
    items: ["Social Media Management", "Strategy", "Campaigns", "Ad Management", "Website Development", "SEO"]
  },
  {
    category: "Films",
    title: "Visual Storytelling",
    description: "Motion that brings your narrative to life and creates a lasting impact.",
    items: ["Ad Films", "Corporate Film", "Motion Graphics", "Brand Explainers"]
  }
];

const process = [
  {
    step: "01",
    title: "खोज (Research)",
    description: "Clarifying and translating insights into foundation and creative approach. Every great story starts with understanding the core character—your brand."
  },
  {
    step: "02",
    title: "योजना (Strategy)",
    description: "Charting the perfect path for your narrative. We plan where, when, and how your story will make the highest impact."
  },
  {
    step: "03",
    title: "मुकाम (Execution)",
    description: "Bringing the vision to reality. A flawless execution that ensures the world stops, listens, and remembers."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              What We <span className="text-primary italic">Offer</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              <span className="text-white font-medium">Har brand mein ek kahani hoti hai... bas kisi ko sunani nahi aati.</span> <br className="hidden md:block" />
              We are here to tell yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, idx) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-12 items-start ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 space-y-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full">
                  {service.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">{service.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
              </div>

              <div className="flex-[1.5] grid grid-cols-2 gap-4 md:gap-6 w-full">
                {service.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-primary/50 transition-colors group cursor-default shadow-xl"
                  >
                    <div className="text-primary mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                    </div>
                    <h3 className="font-medium text-lg text-neutral-200 group-hover:text-white transition-colors">{item}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">How We Work</h2>
            <h3 className="text-5xl md:text-6xl font-black tracking-tight">कार्य श्रेणी</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative p-10 rounded-3xl bg-neutral-900/40 border border-white/5 overflow-hidden group hover:bg-neutral-900 hover:border-white/10 transition-all duration-300"
              >
                <div className="absolute -top-4 -right-4 text-9xl font-black text-white/[0.03] group-hover:text-primary/[0.05] transition-colors pointer-events-none select-none">
                  {step.step}
                </div>
                <h4 className="text-3xl font-bold mb-6 text-white group-hover:text-primary transition-colors">{step.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-32 px-6 lg:px-8 bg-primary text-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 blur-[100px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <span className="font-bold tracking-widest uppercase text-black/60 mb-6 block text-sm">Let's have चर्चा</span>
          <h2 className="text-5xl md:text-7xl font-black mb-12 leading-[1.1] tracking-tight">
            Have a project in mind? <br/>
            Let's tell its story.
          </h2>
          <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold bg-black text-white rounded-full hover:scale-105 transition-transform shadow-2xl">
            Let's Connect
          </Link>
        </motion.div>
      </section> */}
    </main>
  );
}
