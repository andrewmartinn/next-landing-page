import { StaticImageData } from "next/image";

export type NavLinkType = {
  id: number;
  url: string;
  name: string;
};

export type LogoDataType = {
  id: number;
  src: StaticImageData;
  alt: string;
};
