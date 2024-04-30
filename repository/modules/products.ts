import products from "../data/products";
import MockFactory from "../mock-factory";

class ProductsModule extends MockFactory {
  all() {
    return this.mock(products);
  }

  bySlug(slug: string) {
    const product = this.find(products, (p) => p.slug == slug);
    return this.mock(product);
  }

  byId(id: number) {
    const product = this.find(products, (p) => p.id == id);
    return this.mock(product);
  }

  getPriceMinMax() {
    const prices = products.map((p) => p.price);
    const data = {
      min: prices.reduce((a, b) => Math.min(a, b)),
      max: prices.reduce((a, b) => Math.max(a, b)),
    };
    return this.mock(data);
  }
}

export default ProductsModule;
