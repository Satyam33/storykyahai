"use client";

import { motion } from "framer-motion";

const taglineWords = "Har brand mein ek kahani hoti hai… bas kisi ko sunani nahi aati".split(" ");

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden px-6 lg:px-8">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-[1px] w-12 bg-primary" />
          <span className="text-primary tracking-widest text-sm font-bold uppercase">
            Marketing Agency
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight md:leading-[1.1] max-w-5xl tracking-tight">
          {taglineWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block mr-3 md:mr-5 lg:mr-6"
            >
              {word === "kahani" || word === "sunani" ? (
                <span className="text-primary italic pr-2">{word}</span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-6"
        >
          <a
            href="#services"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">Discover Our Work</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-colors"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}
