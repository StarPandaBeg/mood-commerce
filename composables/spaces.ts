export function useNumberWithSpaces(number: number | Ref<number>) {
  const x = toRef(number);

  return computed(() => {
    const parts = x.value.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  });
}
