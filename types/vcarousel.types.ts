export type VCarouselProps = {
  noScroll?: boolean;
  start?: number;
  autoPlay?: number;
  perSlide?: number;
  scrollFull?: boolean;
};

export type VCarouselPaginationProps = {
  direction?: "left" | "right" | "top" | "bottom";
};

export type VCarouselNavigationProps = {
  hover?: boolean;
};
