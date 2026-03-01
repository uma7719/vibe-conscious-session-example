import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sprout } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2400"
          alt="Lush green field"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-moss-500/20 border border-moss-400/30 backdrop-blur-sm text-moss-100 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sprout size={14} />
            <span>Premium Agricultural Supplies</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif text-white leading-[0.9] mb-8">
            Cultivate Your <br />
            <span className="italic text-moss-300">Green Legacy</span>
          </h1>
          
          <p className="text-lg text-earth-100 mb-10 max-w-lg leading-relaxed">
            Discover a curated selection of high-yield seeds, organic fertilizers, and professional-grade tools designed for the modern farmer and gardener.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-moss-600 text-white rounded-full font-medium hover:bg-moss-700 transition-all flex items-center gap-2 group">
              Shop Collection
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 right-6 md:right-12 z-10 hidden lg:flex gap-8">
        {[
          { label: 'Happy Farmers', value: '50k+' },
          { label: 'Seed Varieties', value: '1,200+' },
          { label: 'Organic Products', value: '100%' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-right"
          >
            <div className="text-3xl font-serif text-white">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest text-earth-300">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
