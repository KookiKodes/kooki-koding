//* Packages
import { extendTheme, theme } from "@chakra-ui/react";

//* Static
import { Navigation } from "@static/themes/navigation/navigation";
import { Page } from "@static/themes/layout/page";
import { Layout } from "@static/themes/layout/layout";
import { Footer } from "@static/themes/footer/footer";
import { SvgLinkWrapper } from "@static/themes/footer/svg-link-wrapper";
import { ContactForm } from "@static/themes/form/contact-form";
import { FlushIconInput } from "@static/themes/form/flush-icon-input";
import { FlushIconButton } from "@static/themes/form/flush-icon-button";
import { FlushIconTextarea } from "@static/themes/form/flush-icon-textarea";
import { SubSectionHeading } from "@static/themes/text/subsectionheading";

//* Helper Functions
import { objFromRgba } from "@helper/objFromRgba";

export default extendTheme({
  shadows: {
    // Neutral: {
    //   dark: `.1rem -.1rem 0 .1rem rgba(27, 24, 43, 1)}`,
    //   default: `.1rem -.1rem 0 .1rem rgba(81, 73, 131, 1)`,
    //   light: `.1rem -.1rem 0 .1rem rgba(149, 135, 222, 1)`,
    // },
    "invalid-focus": `.1rem -.1rem 0 .1rem rgba(138, 56, 58, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "invalid-hover": `.1rem -.1rem 0 .1rem rgba(138, 56, 58, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    "valid-focus": `.1rem -.1rem 0 .1rem rgba(62, 150, 99, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "valid-hover": `.1rem -.1rem 0 .1rem rgba(62, 150, 99, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    sending: `.1rem -.1rem 0 .1rem rgba(36, 87, 57, 1)`,
    "sending-focus": `.1rem -.1rem 0 .1rem rgba(36, 87, 57, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "sending-hover": `.1rem -.1rem 0 .1rem rgba(36, 87, 57, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    "button-sent-hover": `0 0 0 .2rem rgba(36, 87, 57, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    "button-sent-focus": `0 0 0 .2rem rgba(62, 150, 99, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "button-sent-focus-hover": `0 0 0 .2rem rgba(62, 150, 99, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    "button-error-hover": `0 0 0 .2rem rgba(112, 46, 47, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    "button-error-focus": `0 0 0 .2rem rgba(138, 56, 58, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "button-error-focus-hover": `0 0 0 .2rem rgba(138, 56, 58, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    error: `.1rem -.1rem 0 .1rem rgba(112, 46, 47, 1)`,
    "error-focus": `.1rem -.1rem 0 .1rem rgba(138, 56, 58, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "error-hover": `.1rem -.1rem 0 .1rem rgba(112, 46, 47, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    "error-focus-hover": `.1rem -.1rem 0 .1rem rgba(138, 56, 58, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    sent: `.1rem -.1rem 0 .1rem rgba(36, 87, 57, 1)`,
    "sent-focus": `.1rem -.1rem 0 .1rem rgba(62, 150, 99, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "sent-hover": `.1rem -.1rem 0 .1rem rgba(62, 150, 99, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,
    "default-focus": `.1rem -.1rem 0 .1rem rgba(88, 214, 140, 1), 0 .8rem .4rem rgba(0,0,0, .3)`,
    "default-hover": `.1rem -.1rem 0 .1rem rgba(88, 214, 140, 1), 0 1.6rem .8rem rgba(0,0,0, .3)`,

    "dark-glow": "0 0 .1rem rgba(20, 22, 34, 1)",
    // Primary: {
    //   dark: `.1rem -.1rem 0 .1rem rgba(36, 87, 57, 1)`,
    //   default: `.1rem -.1rem 0 .1rem rgba(62, 150, 99, 1)`,
    //   light: `.1rem -.1rem 0 .1rem rgba(88, 214, 140, 1)`,
    // },
    // Complementary: {
    //   dark: `.1rem -.1rem 0 .1rem rgba(112, 46, 47, 1)`,
    //   default: `.1rem -.1rem 0 .1rem rgba(138, 56, 58, 1)`,
    //   light: `.1rem -.1rem 0 .1rem rgba(214, 88, 90, 1)`,
    // },
    // Accent: `.1rem -.1rem 0 .1rem rgba(54, 150, 135, 1)`,
    // light: `.1rem -.1rem 0 .1rem rgba(245, 245, 252, 1)`,
    // dark: `.1rem -.1rem 0 .1rem rgba(20, 22, 34, 1)`,
  },
  styles: {
    global: {
      html: {
        overflowX: "hidden",
        scrollBehavior: "smooth",
        "::-webkit-scrollbar": {
          width: ".5rem",
        },
        "::-webkit-scrollbar-track": {
          background: "rgba(27, 24, 43, 1)",
        },
        "::-webkit-scrollbar-thumb": {
          background: "rgba(54, 150, 135, 1)",
          borderRadius: "50rem",
          transition: ".3s background ease",
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: "rgba(88, 214, 140, 1)",
        },
      },
      "#tsparticles": {
        position: "absolute",
        minWidth: "100vw",
        minHeight: "100vh",
        width: "100%",
        height: "100%",
        zIndex: 1,
        top: 0,
        left: 0,
      },
    },
  },
  components: {
    Navigation,
    Page,
    Layout,
    Footer,
    SvgLinkWrapper,
    ContactForm,
    FlushIconInput,
    FlushIconButton,
    FlushIconTextarea,
    SubSectionHeading,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Fira Code', monospace",
    body: "'Fira Code', monospace",
  },
  colors: {
    Neutral: {
      dark: objFromRgba("rgba(27, 24, 43, 1)"),
      default: objFromRgba("rgba(81, 73, 131, 1)"),
      light: objFromRgba("rgba(149, 135, 222, 1)"),
    },
    Primary: {
      dark: objFromRgba("rgba(36, 87, 57, 1)"),
      default: objFromRgba("rgba(62, 150, 99, 1)"),
      light: objFromRgba("rgba(88, 214, 140, 1)"),
    },
    Complementary: {
      dark: objFromRgba("rgba(112, 46, 47, 1)"),
      default: objFromRgba("rgba(138, 56, 58, 1)"),
      light: objFromRgba("rgba(214, 88, 90, 1)"),
    },
    Accent: objFromRgba("rgba(54, 150, 135, 1)"),
    light: objFromRgba("rgba(245, 245, 252, 1)"),
    dark: objFromRgba("rgba(20, 22, 34, 1)"),
  },
});
