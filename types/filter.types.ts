export type FilterBaseProps = {
  title: string;
};

export type FilterRangeProps = FilterBaseProps & {
  min: number;
  max: number;
};

export type FilterSelectProps = FilterBaseProps & {
  items: string[];
  multiple?: boolean;
};
