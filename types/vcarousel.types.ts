export type VCarouselProps = {
  noScroll?: boolean;
};

export type VCarouselNav = {
  active: Readonly<Ref<number>>;
  total: Readonly<Ref<number>>;
  prev: () => void;
  next: () => void;
  set: (index: number) => void;
};
