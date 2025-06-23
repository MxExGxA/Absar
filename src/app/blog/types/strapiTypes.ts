type StrapiImageFormat = {
  url: string;
  width: number;
  height: number;
};

export type StrapiImage = {
  url: string;
  alternativeText?: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
};
