export type VCardTitleProps = {
  title?: string;
};

export type VCardSubtitleProps = {
  subtitle?: string;
};

export type VCardProps = VCardTitleProps &
  VCardSubtitleProps & {
    variant?: "default" | "plain";
  };
