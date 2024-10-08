import { LucideIcon } from "lucide-react";
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

export type FeaturesDataType = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

export type FeatureCardProps = {
  feature: FeaturesDataType;
};

export type FeatureCardIconKey = "chart" | "database" | "dashboard";

export type FeatureCardIconMap = Record<FeatureCardIconKey, LucideIcon>;

export type FAQsDataType = {
  id: number;
  question: string;
  answer: string;
};

export type FooterLogoDataType = {
  id: number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};
