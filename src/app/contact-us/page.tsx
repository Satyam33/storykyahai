"use client";

import { motion } from "framer-motion";

export default function ContactUsPage() {
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
              Let's make your brand <br/>
              <span className="text-primary italic">Brilliant.</span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              If you would like to tell your story, or just want to have a <br className="hidden md:block"/>
              <span className="text-white font-medium">charcha (चर्चा)</span>, we'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-20 px-6 lg:px-8 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-16"
          >
            <div className="space-y-4">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase">Connect With Us</span>
              <h2 className="text-4xl font-bold">Ready to write the next chapter?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white/50 uppercase tracking-wider">Address</h3>
                <p className="text-xl text-gray-300 leading-relaxed font-medium">
                  We are based in India.<br/>
                  Reach out to us to find our nearest creative hub.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white/50 uppercase tracking-wider">Contact</h3>
                <div className="space-y-2 text-xl font-medium">
                  <a href="mailto:hello@storykyahai.com" className="block text-gray-300 hover:text-primary transition-colors">hello@storykyahai.com</a>
                  <a href="tel:+919999999999" className="block text-gray-300 hover:text-primary transition-colors">+91 99999 99999</a>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/5">
              <h3 className="text-lg font-bold text-white/50 uppercase tracking-wider">Socials</h3>
              <div className="flex gap-6 text-lg font-medium">
                {['Instagram', 'LinkedIn', 'Twitter', 'Facebook'].map(social => (
                  <a key={social} href={`#${social.toLowerCase()}`} className="text-gray-300 hover:text-primary transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-neutral-900 border border-white/5 p-10 md:p-14 rounded-3xl shadow-2xl relative overflow-hidden group">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-colors duration-500 pointer-events-none"></div>
              
              <h3 className="text-3xl font-black mb-8 relative z-10">Let's Have <span className="text-primary tracking-tight">चर्चा</span></h3>
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Full Name *</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-transparent border-b border-white/20 p-2 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Email Address *</label>
                    <input type="email" required placeholder="john@example.com" className="w-full bg-transparent border-b border-white/20 p-2 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors rounded-none" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Phone Number</label>
                    <input type="tel" placeholder="+91 xxxxx xxxxx" className="w-full bg-transparent border-b border-white/20 p-2 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors rounded-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Company / Brand Name</label>
                    <input type="text" placeholder="Brand LLC" className="w-full bg-transparent border-b border-white/20 p-2 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors rounded-none" />
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Tell Us Your Story *</label>
                  <textarea required rows={4} placeholder="Hi, we are looking to rebrand and need a compelling story..." className="w-full bg-transparent border-b border-white/20 p-2 text-white placeholder-white/20 focus:outline-none focus:border-primary transition-colors resize-none rounded-none"></textarea>
                </div>

                <button type="submit" className="w-full py-5 bg-white text-black font-black text-lg tracking-wide rounded-2xl hover:bg-primary transition-colors outline-none focus:ring-4 focus:ring-primary/30 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
