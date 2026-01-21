export type NavLinksProps = {
  label: string;
};

export type MacbookStoreProps = {
  color: string;
  setColor: (color: string) => void;

  scale: number;
  setScale: (scale: number) => void;

  reset: () => void;
};

export type ModelSwitcherProps = { 
    scale: number;
    isMobile: boolean;
};