import type { RouteLocationRaw } from "vue-router";

export type VLinkProps = {
  to?: RouteLocationRaw;
  newTab?: boolean;
  variant?: "default" | "plain" | "background" | "button";
  round?: boolean;
};
