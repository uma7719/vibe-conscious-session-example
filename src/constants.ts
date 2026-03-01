export interface Product {
  id: string;
  name: string;
  category: 'Seeds' | 'Fertilizers' | 'Pesticides' | 'Tools';
  price: number;
  image: string;
  description: string;
  rating: number;
  isFeatured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Organic Heirloom Tomato Seeds',
    category: 'Seeds',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307bac?auto=format&fit=crop&q=80&w=800',
    description: 'Premium non-GMO heirloom tomato seeds for a bountiful harvest.',
    rating: 4.8,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Premium Liquid Seaweed Fertilizer',
    category: 'Fertilizers',
    price: 24.50,
    image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800',
    description: 'Natural growth stimulant derived from cold-pressed seaweed.',
    rating: 4.9,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Ergonomic Hand Trowel',
    category: 'Tools',
    price: 18.00,
    image: 'https://images.unsplash.com/photo-1617576621334-427061637c0f?auto=format&fit=crop&q=80&w=800',
    description: 'Stainless steel trowel with a comfortable ash wood handle.',
    rating: 4.7,
    isFeatured: true
  },
  {
    id: '4',
    name: 'Neem Oil Pest Spray',
    category: 'Pesticides',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?auto=format&fit=crop&q=80&w=800',
    description: '100% cold-pressed neem oil for natural pest control.',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Hybrid Sweet Corn Seeds',
    category: 'Seeds',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800',
    description: 'High-yield hybrid corn seeds optimized for home gardens.',
    rating: 4.5
  },
  {
    id: '6',
    name: 'Slow-Release Nitrogen Pellets',
    category: 'Fertilizers',
    price: 32.00,
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80&w=800',
    description: 'Professional grade nitrogen fertilizer for lush green growth.',
    rating: 4.8
  }
];
