export type Product = {
  id: number;
  name: string;
  brand: string;
  type: string;
  image?: string;
  price: number;
  slug: string;
  additional?: {
    sizes?: ProductSize[] | string[];
    gender?: string;
    color?: string;
  };
};

export type ProductSize = {
  eu?: string;
  ru?: string;
};
