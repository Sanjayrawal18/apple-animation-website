export type NavLinksProps = {
  label: string;
};

export type MacbookStoreProps = {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  texture: string;
  setTexture: (texture: string) => void;

  reset: () => void;
};

export type ModelSwitcherProps = {
  scale: number;
  isMobile: boolean;
};

export type FeaturesProps = {
  id: number;
  icon: string;
  highlight: string;
  text: string;
  styles: string;
};
