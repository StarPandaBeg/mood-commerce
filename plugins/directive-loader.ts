function getDirectiveName(path: string, module: any) {
  if (module.name != null) return module.name;
  return path.split("/").pop()!.split(".").slice(0, -1).join(".");
}

export default defineNuxtPlugin((nuxtApp) => {
  const modules = import.meta.glob("~/directives/*.ts");

  for (const path in modules) {
    modules[path]().then((module) => {
      // @ts-expect-error
      const directive = module.default;
      if (!directive) return;

      const name = getDirectiveName(path, module);
      nuxtApp.vueApp.directive(name, directive);
    });
  }
});
