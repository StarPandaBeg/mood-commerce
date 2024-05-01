export function useWindow() {
  const screens = useTailwind().theme.screens;

  type TailwindBreakpoint = keyof typeof screens;

  const width = ref(window?.innerWidth);
  const height = ref(window?.innerHeight);

  function onResize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => window.addEventListener("resize", onResize));
  onUnmounted(() => window.removeEventListener("resize", onResize));

  // @ts-ignore
  const breakpoints: Record<TailwindBreakpoint, Ref> = {};
  const screenNames = Object.keys(screens) as TailwindBreakpoint[];

  screenNames.forEach((breakpoint: TailwindBreakpoint) => {
    const strPxValue = screens[breakpoint].replace("px", "");
    const value = parseInt(strPxValue);
    breakpoints[breakpoint] = computed(() => width.value >= value);
  });

  return {
    width,
    height,
    breakpoints,
  };
}
