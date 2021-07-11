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
import { Component } from "react";

const icons: IconInfo[] = [
  {
    href: "https://www.linkedin.com/in/devin-jackson-b06208152/",
    SVG: LinkedIn,
    name: "LinkedIn",
  },
  {
    href: "https://www.twitter.com",
    SVG: Twitter,
    name: "Twitter",
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
