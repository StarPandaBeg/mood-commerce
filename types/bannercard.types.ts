import type { VLinkProps } from "./vlink.types";

export type BannerCardProps = VLinkProps & {
  title?: string;
  subtitle?: string;
  imagePath: string;
};
