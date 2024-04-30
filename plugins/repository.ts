import { $fetch, type FetchOptions } from "ofetch";
import ProductsModule from "~/repository/modules/products";

interface IApiInstance {
  products: ProductsModule;
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.public.apiBaseUrl,
  };
  const fetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    products: new ProductsModule(fetcher),
  };
  return {
    provide: {
      api: modules,
    },
  };
});
