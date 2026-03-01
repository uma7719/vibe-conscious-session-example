import React from 'react';
import { Leaf, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-earth-100 border-t border-earth-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-moss-600 rounded-xl flex items-center justify-center text-white">
                <Leaf size={24} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-earth-900">
                Agri<span className="text-moss-600">Cultivate</span>
              </span>
            </div>
            <p className="text-earth-600 leading-relaxed">
              Empowering farmers and gardeners with premium supplies and expert knowledge since 2010.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-earth-200 flex items-center justify-center text-earth-600 hover:bg-moss-600 hover:text-white hover:border-moss-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-earth-900 font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Shop All', 'New Arrivals', 'Best Sellers', 'AI Advisor', 'Our Story'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-earth-600 hover:text-moss-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-earth-900 font-serif text-xl mb-6">Categories</h4>
            <ul className="space-y-4">
              {['Organic Seeds', 'Fertilizers', 'Pest Control', 'Garden Tools', 'Irrigation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-earth-600 hover:text-moss-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-earth-900 font-serif text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-earth-600">
                <MapPin size={20} className="text-moss-600 shrink-0" />
                <span>123 Green Valley Road,<br />Agricultural District, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-earth-600">
                <Phone size={20} className="text-moss-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-earth-600">
                <Mail size={20} className="text-moss-600 shrink-0" />
                <span>hello@agricultivate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-earth-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-earth-500">
          <p>© 2024 AgriCultivate. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-moss-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-moss-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-moss-600 transition-colors">Shipping Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
