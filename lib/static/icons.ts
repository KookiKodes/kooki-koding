import { ComponentType } from "react";

import { IconInfo } from "@interfaces/FooterInterface";
import Twitter from "@icons/socials/twitter-logo.svg";
import LinkedIn from "@icons/socials/linkedin-logo.svg";
import CaretRight from "@icons/input/caret-right.svg";
import Chat from "@icons/input/chat.svg";
import Checkmark from "@icons/input/checkmark.svg";
import ChevronBigRight from "@icons/input/chevron-big-right.svg";
import ChevronDuoRight from "@icons/input/chevron-duo-right.svg";
import Close from "@icons/input/close.svg";
import ErrorOutline from "@icons/input/error-outline.svg";
import Error from "@icons/input/error.svg";
import Loading from "@icons/input/loading.svg";
import LongRight from "@icons/input/long-right.svg";
import Mail from "@icons/input/mail.svg";
import ShortRight from "@icons/input/short-right.svg";
import TextAlignLeft from "@icons/input/text-align-left.svg";
import UserCard from "@icons/input/user-card.svg";
import GithubLogo from "@icons/socials/github-brands.svg";

//* Skill Icons
import MiroLogo from "@icons/skills/miro-logo.svg";
import FigmaLogo from "@icons/skills/figma-logo.svg";
import ClickUpLogo from "@icons/skills/clickup-logo.svg";

import SassLogo from "@icons/skills/sass-logo.svg";
import WebLanguages from "@icons/skills/web-languages-logos.svg";
import TypescriptLogo from "@icons/skills/typescript-logo.svg";

import ReactLogo from "@icons/skills/react-logo.svg";
import SvelteLogo from "@icons/skills/svelte-logo.svg";
import VueLogo from "@icons/skills/vuejs-logo.svg";

import CreativityIcon from "@icons/skills/creativity-icon.svg";
import TeamworkIcon from "@icons/skills/teamwork-icon.svg";
import ResponsiveIcon from "@icons/skills/responsive-icon.svg";

const icons: IconInfo[] = [
  {
    href: "https://www.linkedin.com/in/devin-jackson-b06208152/",
    SVG: LinkedIn,
    name: "LinkedIn",
    target: true,
  },
  {
    href: "https://www.github.com/KookiKodes",
    SVG: GithubLogo,
    name: "Github",
    target: true,
  },
  {
    href: "https://www.twitter.com",
    SVG: Twitter,
    name: "Twitter",
    target: true,
  },
];

export const designToolIcons: IconInfo[] = [
  {
    name: "Miro",
    href: "https://miro.com",
    SVG: MiroLogo,
    target: true,
  },
  {
    name: "Figma",
    href: "https://figma.com",
    SVG: FigmaLogo,
    target: true,
  },
  {
    name: "ClickUp",
    href: "https://clickup.com",
    SVG: ClickUpLogo,
    target: true,
  },
];

export const webLanguagesIcons: IconInfo[] = [
  {
    name: "Sass",
    href: "https://sass-lang.com",
    SVG: SassLogo,
    target: true,
  },
  {
    name: "HTML, CSS, & Javascript",
    href: "https://developer.mozilla.org/en-US/docs/Learn",
    SVG: WebLanguages,
    target: true,
  },
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    SVG: TypescriptLogo,
    target: true,
  },
];

export const frameworkIcons: IconInfo[] = [
  {
    name: "Svelte",
    href: "https://svelte.dev/",
    SVG: SvelteLogo,
    target: true,
  },
  {
    name: "React",
    href: "https://reactjs.org/",
    SVG: ReactLogo,
    target: true,
  },
  {
    name: "Vue",
    href: "https://v3.vuejs.org/",
    SVG: VueLogo,
    target: true,
  },
];

export const softSkillIcons: IconInfo[] = [
  {
    name: "Responsive Web Design",
    href: "#projects",
    SVG: ResponsiveIcon,
    target: false,
  },
  {
    name: "Creativity",
    href: "#projects",
    SVG: CreativityIcon,
    target: false,
  },
  {
    name: "Teamwork",
    href: "#projects",
    SVG: TeamworkIcon,
    target: false,
  },
];

export interface InputIconProps {
  [key: string]: ComponentType;
}

export const InputIcons = {
  CaretRight,
  Chat,
  Checkmark,
  ChevronBigRight,
  ChevronDuoRight,
  Close,
  ErrorOutline,
  Error,
  Loading,
  LongRight,
  Mail,
  ShortRight,
  TextAlignLeft,
  UserCard,
};

export default icons;
