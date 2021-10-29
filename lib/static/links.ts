export default [
  { name: "home", to: "#aboutme" },
  { name: "skills", to: "#skills" },
  { name: "projects", to: "#projects" },
  { name: "contact", to: "#contact" },
] as NavigationLinks;

export type NavigationLinks = NavigationLink[];
interface NavigationLink {
  name: string;
  to: string;
}

export interface ToolLink {
  name: string;
  href: string;
  target: boolean;
}

export const discordBotTools: ToolLink[] = [
  {
    name: "DiscordJs",
    href: "https://discord.js.org/#/",
    target: true,
  },
  {
    name: "FaunaDB",
    href: "https://fauna.com/",
    target: true,
  },
  {
    name: "Google Translate Api",
    href: "https://cloud.google.com/translate",
    target: true,
  },
  {
    name: "Typescript",
    href: "https://www.typescriptlang.org/",
    target: true,
  },
  {
    name: "NodeJs",
    href: "https://nodejs.org/en/",
    target: true,
  },
];

export const kookiKomerceTools: ToolLink[] = [
  {
    name: "React",
    href: "https://reactjs.org/",
    target: true,
  },
  {
    name: "ChakraUi",
    href: "https://chakra-ui.com/",
    target: true,
  },
  {
    name: "React Redux",
    href: "https://react-redux.js.org/",
    target: true,
  },
  {
    name: "Express JS",
    href: "https://expressjs.com/",
    target: true,
  },
  {
    name: "Mongo DB",
    href: "https://www.mongodb.com/",
    target: true,
  },
  {
    name: "Firebase",
    href: "https://firebase.google.com/",
    target: true,
  },
  {
    name: "Cloudinary",
    href: "https://cloudinary.com/",
    target: true,
  },
];
