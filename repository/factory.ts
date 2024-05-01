import type { $Fetch, FetchOptions } from "ofetch";

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  protected async call<T>(
    method: string,
    url: string,
    data?: object | string,
    fetchOptions?: FetchOptions<"json">,
  ): Promise<T> {
    return this.$fetch<T>(url, {
      method,
      body: data,
      ...fetchOptions,
    });
  }
}

export default HttpFactory;
