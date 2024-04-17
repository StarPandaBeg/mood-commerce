export type Product = {
  id: number;
  name: string;
  brand: string;
  type: string;
  image?: string;
  price: number;
  slug: string;
  additional?: {
    sizes?: string[];
    gender?: string;
    color?: string;
  };
};
