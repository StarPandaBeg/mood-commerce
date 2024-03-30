import type { PageNav } from "~/types/page.types";

export function usePage(
  total: Readonly<Ref<number>> | number,
  start: number = 0,
): PageNav {
  const current = ref(start);
  const totalPages = toReadonlyRef(total);

  const prev = () => {
    const nextValue = (current.value || totalPages.value) - 1;
    set(nextValue);
  };
  const next = () => {
    const nextValue = (current.value + 1) % totalPages.value;
    set(nextValue);
  };
  const set = (index: number) => {
    const value = Math.max(Math.min(index, totalPages.value - 1), 0);
    current.value = value;
  };

  return <PageNav>{
    current,
    total: totalPages,
    prev,
    next,
    set,
  };
}

function toReadonlyRef(
  value: Readonly<Ref<number>> | number,
): Readonly<Ref<number>> {
  if (isRef(value)) return value;
  return readonly(toRef(value));
}
