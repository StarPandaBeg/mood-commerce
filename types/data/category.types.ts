export type Category = {
  id: number;
  name: string;
  slug: string;
  url: string;
  filters: CategoryFilter[];
};

export type CategoryFilter = {
  id: number;
  title: string;
  items: string[];
  multiple: boolean;
};
