import { Variants } from "framer-motion";

type voidFn = () => void;

export interface Nlink {
  href: string;
  title: string;
  isHovering?: boolean;
  onClick?: voidFn;
  onHover?: voidFn;
  isActive?: boolean;
}

export interface NlinkContainer {
  links: Nlink[];
  toggleNavbar: voidFn;
  isOpen: boolean;
}

export interface BarProps {
  variants(colors: object): Variants;
}

export interface MenuBtnProps {
  toggleNavbar: voidFn;
  isDisabled: boolean;
  isOpen: boolean;
}
