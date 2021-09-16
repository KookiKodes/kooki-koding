export default [
  { name: "home", to: "#aboutme" },
  { name: "skills", to: "#skills" },
  { name: "projects", to: "#projects" },
  { name: "contact", to: "#contact" },
];

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
