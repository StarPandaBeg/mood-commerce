type TailwindScreens = ReturnType<typeof useTailwind>["theme"]["screens"];
type TailwindBreakpoint = keyof TailwindScreens;

type Breakpoint<T> = {
  [K in TailwindBreakpoint]?: T;
};

export function useBreakpoints<T>(
  defaultValue: T,
  values: Breakpoint<T> = {},
): Ref<T> {
  const outputValue = ref<T>(defaultValue) as Ref<T>;

  const window = useWindow();
  const breakpoints = Object.entries(window.breakpoints) as [
    TailwindBreakpoint,
    Ref,
  ][];

  function recalculateValue(defaultValue: T, values: Breakpoint<T> = {}): T {
    let outputValue: T = defaultValue;
    if (process.server) {
      return outputValue;
    }

    for (const [bp, value] of breakpoints) {
      if (bp in values) {
        if (value.value) {
          outputValue = values[bp]!;
        }
      }
    }
    return outputValue;
  }

  watchPostEffect(() => {
    outputValue.value = recalculateValue(defaultValue, values);
  });
  return outputValue;
}
