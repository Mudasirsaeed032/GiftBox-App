export type Availability = 'in' | 'out';
export type SortKey = 'popular' | 'price_asc' | 'price_desc' | 'new';

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;             // PKR, integer
  image_url: string;
  in_stock: boolean;
  type: string;              // e.g., 'toy' | 'chocolate' | 'accessory'
  category_slug: string;     // e.g., 'toys'
  created_at: string;
}

export interface ProductsResponse {
  items: Product[];
  nextCursor: string | null;
  total: number;
}
