import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { CropAdvisor } from './components/CropAdvisor';
import { Footer } from './components/Footer';
import { PRODUCTS } from './constants';
import { ArrowRight, Leaf, ShieldCheck, Truck } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-earth-100">
      <Navbar />
      
      <main>
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: Leaf,
                  title: '100% Organic',
                  desc: 'All our seeds and fertilizers are certified organic and non-GMO.'
                },
                {
                  icon: ShieldCheck,
                  title: 'Quality Guaranteed',
                  desc: 'Every product is tested for high germination rates and effectiveness.'
                },
                {
                  icon: Truck,
                  title: 'Fast Shipping',
                  desc: 'Quick and safe delivery to your doorstep, anywhere in the country.'
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-moss-100 rounded-2xl flex items-center justify-center text-moss-600 mb-6">
                    <feature.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-serif text-earth-900 mb-3">{feature.title}</h3>
                  <p className="text-earth-600 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="shop" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif text-earth-900 mb-4">Featured Collection</h2>
                <p className="text-earth-600 max-w-xl">
                  Explore our hand-picked selection of top-performing products for this season.
                </p>
              </div>
              <button className="inline-flex items-center gap-2 text-moss-600 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                View All Products <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRODUCTS.filter(p => p.isFeatured).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Grid */}
        <section id="categories" className="py-24 bg-earth-200/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-serif text-earth-900 mb-4">Shop by Category</h2>
              <p className="text-earth-600">Everything you need for a successful harvest.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Seeds', count: '450+ Items', img: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800' },
                { name: 'Fertilizers', count: '120+ Items', img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800' },
                { name: 'Pesticides', count: '85+ Items', img: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800' },
                { name: 'Tools', count: '200+ Items', img: 'https://images.unsplash.com/photo-1617576621334-427061637c0f?auto=format&fit=crop&q=80&w=800' },
              ].map((cat, i) => (
                <motion.div
                  key={cat.name}
                  whileHover={{ y: -10 }}
                  className="group relative h-80 rounded-[2.5rem] overflow-hidden cursor-pointer shadow-lg"
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-earth-900/20 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-serif text-white mb-1">{cat.name}</h3>
                    <p className="text-earth-300 text-sm">{cat.count}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CropAdvisor />

        {/* Newsletter */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-moss-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Join Our Community</h2>
                <p className="text-moss-100 mb-10 max-w-lg mx-auto">
                  Subscribe to receive seasonal planting guides, exclusive offers, and the latest agricultural news.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-full py-4 px-8 text-white placeholder:text-moss-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  />
                  <button className="bg-white text-moss-700 px-8 py-4 rounded-full font-bold hover:bg-earth-100 transition-all">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
