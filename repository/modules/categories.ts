import categories from "../data/categories";
import MockFactory from "../mock-factory";

class CategoriesModule extends MockFactory {
  all() {
    return this.mock(categories);
  }

  bySlug(slug: string) {
    const category = this.find(categories, (c) => c.slug == slug);
    return this.mock(category);
  }

  byId(id: number) {
    const category = this.find(categories, (c) => c.id == id);
    return this.mock(category);
  }
}

export default CategoriesModule;
