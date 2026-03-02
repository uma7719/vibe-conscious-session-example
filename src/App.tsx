import { motion } from 'motion/react';
import { Leaf, Sprout, Tractor, Droplets, ArrowRight, Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { useState } from 'react';
import { AGRI_ITEMS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-agri-cream/80 backdrop-blur-md border-b border-agri-ink/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Leaf className="text-agri-olive w-6 h-6" />
            <span className="text-2xl font-serif font-bold tracking-tight">AgriCultivate</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest">
            <a href="#products" className="hover:text-agri-olive transition-colors">Products</a>
            <a href="#tools" className="hover:text-agri-olive transition-colors">Tools</a>
            <a href="#philosophy" className="hover:text-agri-olive transition-colors">Philosophy</a>
            <button className="bg-agri-ink text-white px-6 py-2 rounded-full hover:bg-agri-olive transition-all">
              Shop Now
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-agri-cream border-b border-agri-ink/5 p-6 flex flex-col gap-4 text-center"
          >
            <a href="#products" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#tools" onClick={() => setIsMenuOpen(false)}>Tools</a>
            <a href="#philosophy" onClick={() => setIsMenuOpen(false)}>Philosophy</a>
          </motion.div>
        )}
      </nav>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
              alt="Lush farm field" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-agri-olive font-medium uppercase tracking-[0.3em] text-sm mb-6 block">
                Cultivating Excellence
              </span>
              <h1 className="text-7xl md:text-9xl font-serif font-bold leading-[0.9] mb-8 max-w-4xl">
                Nurture the <br />
                <span className="italic text-agri-olive">Earth</span>, Harvest <br />
                the Future.
              </h1>
              <p className="text-xl text-agri-ink/70 max-w-xl mb-10 font-light leading-relaxed">
                We provide the finest heirloom seeds and state-of-the-art agricultural tools for the modern visionary farmer.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-agri-olive text-white px-10 py-4 rounded-full font-medium flex items-center gap-3 hover:bg-agri-ink transition-all group">
                  Explore Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-agri-ink/20 px-10 py-4 rounded-full font-medium hover:bg-agri-ink hover:text-white transition-all">
                  Our Story
                </button>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-10 right-10 hidden lg:block">
            <div className="flex gap-12 items-center">
              <div className="flex flex-col items-end">
                <span className="text-4xl font-serif font-bold">100%</span>
                <span className="text-xs uppercase tracking-widest opacity-50">Organic Certified</span>
              </div>
              <div className="w-px h-12 bg-agri-ink/20"></div>
              <div className="flex flex-col items-end">
                <span className="text-4xl font-serif font-bold">25+</span>
                <span className="text-xs uppercase tracking-widest opacity-50">Years of Heritage</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="space-y-4">
                <Sprout className="text-agri-olive w-8 h-8" />
                <h3 className="text-xl font-bold">Heirloom Quality</h3>
                <p className="text-sm text-agri-ink/60 leading-relaxed">Pure, non-GMO seeds preserved for their exceptional flavor and resilience.</p>
              </div>
              <div className="space-y-4">
                <Tractor className="text-agri-olive w-8 h-8" />
                <h3 className="text-xl font-bold">Precision Tools</h3>
                <p className="text-sm text-agri-ink/60 leading-relaxed">Modern equipment designed to maximize efficiency while respecting the land.</p>
              </div>
              <div className="space-y-4">
                <Droplets className="text-agri-olive w-8 h-8" />
                <h3 className="text-xl font-bold">Smart Irrigation</h3>
                <p className="text-sm text-agri-ink/60 leading-relaxed">Water management systems that reduce waste and optimize plant hydration.</p>
              </div>
              <div className="space-y-4">
                <Leaf className="text-agri-olive w-8 h-8" />
                <h3 className="text-xl font-bold">Sustainable Ethos</h3>
                <p className="text-sm text-agri-ink/60 leading-relaxed">Every product in our catalog is vetted for its environmental impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products & Tools Showcase */}
        <section id="products" className="py-32 bg-agri-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-2xl">
                <span className="text-agri-olive font-medium uppercase tracking-[0.2em] text-xs mb-4 block">The Collection</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                  Curated Essentials for <br />
                  <span className="italic">Discerning Cultivators</span>
                </h2>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-full border border-agri-ink/10 hover:border-agri-olive transition-colors text-sm uppercase tracking-widest">All</button>
                <button className="px-6 py-2 rounded-full border border-agri-ink/10 hover:border-agri-olive transition-colors text-sm uppercase tracking-widest">Products</button>
                <button className="px-6 py-2 rounded-full border border-agri-ink/10 hover:border-agri-olive transition-colors text-sm uppercase tracking-widest">Tools</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {AGRI_ITEMS.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-white">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-agri-olive font-bold">{item.category}</span>
                    <span className="font-serif font-bold">{item.price}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-agri-olive transition-colors">{item.name}</h3>
                  <p className="text-sm text-agri-ink/60 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-32 bg-agri-olive text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Tractor className="w-full h-full scale-150 rotate-12" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-white/60 font-medium uppercase tracking-[0.2em] text-xs mb-6 block">Our Philosophy</span>
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                  Rooted in Tradition, <br />
                  <span className="italic">Driven by Innovation</span>
                </h2>
                <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
                  We believe that the future of agriculture lies in a harmonious balance between ancestral wisdom and modern precision. Our mission is to empower farmers with tools that protect the soil while increasing the bounty.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="font-serif font-bold">01</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Soil First Approach</h4>
                      <p className="text-sm text-white/60">We prioritize regenerative practices that build soil health and sequester carbon.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <span className="font-serif font-bold">02</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Biodiversity Preservation</h4>
                      <p className="text-sm text-white/60">Our seed bank focuses on rare varieties to ensure genetic diversity for future generations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000" 
                    alt="Hands holding soil" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white text-agri-ink p-10 rounded-2xl shadow-2xl max-w-xs hidden md:block">
                  <p className="italic font-serif text-lg mb-4">"Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness."</p>
                  <span className="text-xs uppercase tracking-widest font-bold">— Thomas Jefferson</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-32 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-serif font-bold mb-6">Join the Harvest</h2>
            <p className="text-agri-ink/60 mb-10">Subscribe to receive seasonal planting guides, exclusive tool releases, and stories from our community of visionary farmers.</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-grow px-8 py-4 rounded-full border border-agri-ink/10 focus:outline-none focus:border-agri-olive transition-colors"
              />
              <button className="bg-agri-ink text-white px-10 py-4 rounded-full hover:bg-agri-olive transition-all font-medium uppercase tracking-widest text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-agri-cream border-t border-agri-ink/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="text-agri-olive w-6 h-6" />
                <span className="text-2xl font-serif font-bold tracking-tight">AgriCultivate</span>
              </div>
              <p className="text-agri-ink/60 max-w-sm leading-relaxed">
                Premium agricultural supplies for the modern farmer. We bridge the gap between heritage and technology.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
              <ul className="space-y-4 text-sm text-agri-ink/60">
                <li><a href="#" className="hover:text-agri-olive transition-colors">Shop All</a></li>
                <li><a href="#" className="hover:text-agri-olive transition-colors">Seed Bank</a></li>
                <li><a href="#" className="hover:text-agri-olive transition-colors">Equipment</a></li>
                <li><a href="#" className="hover:text-agri-olive transition-colors">Our Story</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Connect</h4>
              <div className="flex gap-4 mb-6">
                <Instagram className="w-5 h-5 cursor-pointer hover:text-agri-olive" />
                <Facebook className="w-5 h-5 cursor-pointer hover:text-agri-olive" />
                <Twitter className="w-5 h-5 cursor-pointer hover:text-agri-olive" />
              </div>
              <p className="text-sm text-agri-ink/60">hello@agricultivate.com</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-agri-ink/5 gap-4">
            <p className="text-xs text-agri-ink/40">© 2024 AgriCultivate. All rights reserved.</p>
            <div className="flex gap-8 text-xs text-agri-ink/40 uppercase tracking-widest">
              <a href="#" className="hover:text-agri-ink transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-agri-ink transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
