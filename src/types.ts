export interface AgriItem {
  id: string;
  name: string;
  category: 'Product' | 'Tool';
  description: string;
  price: string;
  image: string;
  tag?: string;
}
