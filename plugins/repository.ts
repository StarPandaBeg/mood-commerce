import { $fetch, type FetchOptions } from "ofetch";
import CategoriesModule from "~/repository/modules/categories";
import ProductsModule from "~/repository/modules/products";

interface IApiInstance {
  products: ProductsModule;
  categories: CategoriesModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.apiBaseUrl,
  };
  const fetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    products: new ProductsModule(fetcher),
    categories: new CategoriesModule(fetcher),
  };
  return {
    provide: {
      api: modules,
    },
  };
});
