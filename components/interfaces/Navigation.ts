import {Variants} from 'framer-motion';

type voidFn = () => void;

export interface Nlink {
  href: string;
  title: string;
  isHovering?: boolean;
  toggleNavbar?: voidFn;
  onHover?: voidFn;
}

export interface NlinkContainer {
  links: Nlink[];
  toggleNavbar?: voidFn;
}

export interface BarProps {
  variants: Variants
}

export interface MenuBtnProps {
  toggleNavbar: voidFn;
  bars: BarProps[];
}