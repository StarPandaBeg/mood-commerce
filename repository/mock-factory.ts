import HttpFactory from "./factory";

class MockFactory extends HttpFactory {
  protected async mock<T>(data: T): Promise<T> {
    return Promise.resolve<T>(data);
  }

  protected find<T>(data: T[], predicate: (val: T) => boolean): T {
    const obj = data.find(predicate);
    if (obj == undefined) {
      throw createError({
        statusCode: 404,
        message: "Item not found",
        fatal: true,
      });
    }
    return obj;
  }
}

export default MockFactory;
