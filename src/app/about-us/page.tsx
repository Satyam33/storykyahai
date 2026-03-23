"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const team = [
  "Suraj",
  "Piyush",
  "Anjali",
  "Sandesh",
  "Divya",
  "Varun",
  "Shivam",
  "Kartik"
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              You all have a story to tell.<br />
              <span className="text-primary italic">We make sure they listen.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              We take the time to understand your brand's unique story, values, and goals, ensuring that our solutions are not only effective but incredibly engaging.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story / Origin Section */}
      <section id="story" className="py-24 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full">
              Our Origin
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">Har brand mein ek kahani hoti hai...</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                We started with a simple observation: Great brands were failing not because their products were bad, but because <span className="text-white font-medium">unhe apni kahani sunani nahi aati thi.</span>
              </p>
              <p>
                We didn't start in a fancy glass office. We started over countless cups of cutting chai, armed with passion, creativity, and a fresh perspective on what advertising should actually feel like.
              </p>
              <p>
                Today, we are a collective of storytellers, strategists, and creators dedicated to finding that one unique narrative hook that makes your audience care.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="text-6xl font-black text-white hover:text-primary transition-colors">10+</h3>
              <p className="text-gray-400 mt-2 font-medium tracking-wide uppercase text-sm">Stories told & counting</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="aspect-square bg-neutral-900 rounded-3xl border border-white/5 relative overflow-hidden group">
              {/* Aesthetic Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-black text-center leading-relaxed text-white/50 group-hover:text-primary transition-colors duration-500">
                  कुछ <br /> CREATIVE <br /> करे <span className="text-primary">*</span>
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">The Storytellers</h2>
            <h3 className="text-5xl font-black tracking-tight">Meet the Crew</h3>
          </motion.div>

          {/* Scrolling text marquee effect or simple grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={member}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 text-center group hover:bg-primary/5 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neutral-800 group-hover:bg-primary transition-colors flex items-center justify-center text-xl font-bold text-white/50 group-hover:text-black">
                  {member.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">{member}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring/CTA Section */}
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
          <span className="font-bold tracking-widest uppercase text-black/60 mb-6 block text-sm">Want to join the story?</span>
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tight">
            Working with us may result in excessive laughter, unstoppable creativity & more free chai.
          </h2>
          <Link href="/#contact" className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold bg-black text-white rounded-full hover:scale-105 transition-transform shadow-2xl">
            Let's Connect
          </Link>
        </motion.div>
      </section> */}
    </main>
  );
}
