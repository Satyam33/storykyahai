"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01 //",
    category: "Branding",
    title: "Crafting Souls.",
    description: "Your brand is more than just a logo or a name. It's a living entity. We dig deep into its soul to craft its personality—building brands that connect, resonate, and endure.",
    items: ["Brand Identity", "Brand Building", "Brand Guidelines", "Visual Language", "Brand Strategy"]
  },
  {
    num: "02 //",
    category: "Digital Edge",
    title: "Digital Dominance.",
    description: "Taking your story to the right audience. Be it engaging digital marketing campaigns or seamless e-commerce experiences on Shopify, we build your digital footprint.",
    items: ["Digital Marketing", "Shopify Websites", "Social Media", "SEO", "Ad Management"]
  },
  {
    num: "03 //",
    category: "Films",
    title: "Visual Narratives.",
    description: "Moving imagery that tells your truth. Every frame is carefully crafted to leave a lasting impact, from raw documentaries to aesthetic brand films.",
    items: ["Visual Storytelling", "Documentary Video", "Ad Films", "Corporate Film", "Motion Graphics"]
  }
];

const process = [
  {
    num: "I.",
    title: "Discovery",
    desc: "Every great story starts with understanding the core character—your brand. We translate insights into foundation."
  },
  {
    num: "II.",
    title: "Strategy",
    desc: "Charting the perfect path. We plan where, when, and how your narrative will make the deepest impact."
  },
  {
    num: "III.",
    title: "Execution",
    desc: "Bringing the vision to reality. A flawless execution that ensures the world stops, listens, and remembers."
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] text-neutral-200 min-h-screen selection:bg-primary selection:text-black font-sans">

      {/* 1) HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-end px-6 md:px-12 py-32 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 max-w-7xl mx-auto w-full"
        >
          <div className="flex flex-col gap-6">
            <p className="text-primary font-medium tracking-widest uppercase text-sm flex items-center gap-4">
              <span className="w-12 h-[1px] bg-primary block"></span>
              Our Expertise
            </p>
            <h1 className="text-[14vw] md:text-[9vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter text-white uppercase mix-blend-difference relative z-10 w-full mb-12">
              What we <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--primary, #fff)' }}>
                shape
              </span>
              {" "}for you.
            </h1>

            <p className="max-w-xl text-neutral-400 text-lg md:text-2xl font-light leading-relaxed">
              <span className="text-white font-medium italic">Har brand mein ek kahani hoti hai... bas kisi ko sunani nahi aati.</span>
              <br className="block my-2" />
              We don&apos;t just create. We extract, build, and echo stories that resonate with the world.
            </p>
          </div>
        </motion.div>

        {/* Ambient Glow */}
        <div className="absolute top-1/4 right-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/20 blur-[150px] mix-blend-screen pointer-events-none"></div>
      </section>

      {/* 2) SERVICES SECTIONS (Stacked Cards) */}
      <section className="pb-16 md:pb-24 relative z-10 px-8 max-w-[100vw] overflow-x-hidden">
        {services.map((service, index) => (
          <div
            key={index}
            className="sticky w-full flex justify-center mb-16 lg:mb-24 top-[var(--top-mobile)] md:top-[var(--top-desktop)]"
            style={{
              "--top-mobile": `calc(${index * 1}rem + 4rem)`,
              "--top-desktop": `calc(${index * 2}rem + 6rem)`,
            } as React.CSSProperties}
          >
            {/* The Card */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-7xl bg-[#0a0a0a] border border-white/5 rounded-[30px] md:rounded-[40px] flex flex-col lg:flex-row shadow-[0_-10px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >

              {/* Left Column (Sticky Title & Description) */}
              <div className="lg:w-[45%] p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5 relative z-10 bg-[#0c0c0c]">
                <div>
                  <span className="text-primary/70 font-mono text-xl md:text-2xl">{service.num}</span>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mt-6 tracking-tight text-white uppercase">
                    {service.category}
                  </h2>
                  <h3 className="text-xl md:text-2xl text-neutral-500 mt-3 font-serif italic">
                    {service.title}
                  </h3>
                </div>

                <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed max-w-md mt-12 lg:mt-24">
                  {service.description}
                </p>
              </div>

              {/* Right Column (The Sub-items list) */}
              <div className="lg:w-[55%] p-8 md:p-14 bg-[#0a0a0a] flex flex-col justify-center relative z-10">
                <div className="flex flex-col w-full">
                  {service.items.map((item, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      key={i}
                      className="group flex flex-col py-6 md:py-8 border-b border-white/5 last:border-0 relative cursor-crosshair"
                    >
                      {/* Hover Fill Line */}
                      <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out z-20"></div>

                      <div className="flex items-center justify-between z-10 w-full relative">
                        <span className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-neutral-600 group-hover:text-white transition-colors duration-500 uppercase">
                          {item}
                        </span>

                        <span className="text-primary opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden sm:block">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        ))}
      </section>

      {/* 3) PROCESS SECTION */}
      <section className="pt-20 pb-32 md:pt-32 md:pb-48 px-8 md:px-12 bg-[#020202] text-white overflow-hidden border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12"
          >
            <div>
              <h4 className="text-primary font-mono tracking-widest uppercase mb-4 md:mb-6 text-xs md:text-sm flex items-center gap-4">
                <span className="w-8 h-[1px] bg-primary block"></span> Process
              </h4>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                How we <br /> <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--primary, #fff)' }}>execute.</span>
              </h2>
            </div>
            <p className="max-w-md text-neutral-400 text-base md:text-xl font-light">
              We believe great agencies don't just shoot in the dark. We follow a sharp, ruthless mechanism to give birth to your narrative.
            </p>
          </motion.div>

          <div className="w-full flex flex-col">
            {process.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group border-t border-white/10 last:border-b py-10 md:py-20 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-16 hover:bg-neutral-900/40 transition-colors px-6 -mx-6 md:mx-0 md:px-8 rounded-3xl"
              >
                <div className="text-6xl md:text-9xl font-black text-transparent group-hover:text-primary/10 transition-colors duration-500 w-full md:w-auto text-left" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                  {p.num}
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6 mb-4 md:mb-6">
                    <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

