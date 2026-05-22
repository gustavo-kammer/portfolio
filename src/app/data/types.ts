export interface LocalizedString {
  pt: string;
  en: string;
}

export interface GalleryImage {
  src: string;
  caption: LocalizedString;
  type?: 'screen' | 'detail' | 'flow' | 'mockup' | 'process';
  device?: 'web' | 'mobile' | 'tablet';
}

export interface VersatilityCrop {
  src: string;
  alt: { pt: string; en: string };
  styleTag: { pt: string; en: string };
}

export type ProjectType =
  | 'healthtech'
  | 'edtech'
  | 'agritech'
  | 'govtech'
  | 'sports'
  | 'enterprise';

export interface BrandColor {
  hex: string;
  cmyk: { c: number; m: number; y: number; k: number };
  name?: LocalizedString;
}

export interface BrandFont {
  family: string;
  weight: number;
  label: string;
  sample?: string;
}

export interface BrandToken {
  name: string;
  hex: string;
  referencesToken?: string;
  description?: LocalizedString;
}

export interface BrandTokenGroup {
  groupName: LocalizedString;
  description?: LocalizedString;
  tokens: BrandToken[];
}

export interface BrandSystem {
  fontFamily: {
    name: string;
    googleFontsUrl?: string;
    fonts: BrandFont[];
  };
  palette?: BrandColor[];
  tokenGroups?: BrandTokenGroup[];
  manualReference?: LocalizedString;
}

export interface Project {
  slug: string;
  title: LocalizedString;
  client: string;
  year: number;
  type: ProjectType;
  role: string;
  description: LocalizedString;
  context: LocalizedString;
  styleTag: string;
  thumbnail?: string;
  hero?: string;
  externalUrl?: string;
  gallery: GalleryImage[];
  brandSystem?: BrandSystem;
}
