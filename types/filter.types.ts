export type FilterBaseProps = {
  title: string;
};

export type FilterRangeProps = FilterBaseProps & {
  min: number;
  max: number;
};
