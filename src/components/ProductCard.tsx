import React from 'react';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../constants';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-earth-200 hover:shadow-xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-earth-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
          {product.isFeatured && (
            <span className="bg-moss-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-earth-600 hover:text-red-500 shadow-md transition-colors">
            <Heart size={18} />
          </button>
        </div>

        {/* Add to Cart Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-earth-900 text-white py-3 rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-moss-600 transition-colors">
            <ShoppingBag size={18} />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-earth-200'}
            />
          ))}
          <span className="text-[10px] text-earth-400 font-medium ml-1">({product.rating})</span>
        </div>
        
        <h3 className="text-xl font-serif text-earth-900 mb-1 group-hover:text-moss-600 transition-colors">
          {product.name}
        </h3>
        
        <p className="text-sm text-earth-500 line-clamp-2 mb-4">
          {product.description}
        </p>
        
        <div className="text-2xl font-serif text-earth-900">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </motion.div>
  );
};
