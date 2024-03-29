export type PageNav = {
  current: Readonly<Ref<number>>;
  total: Readonly<Ref<number>>;

  prev: () => void;
  next: () => void;
  set: (index: number) => void;
};
