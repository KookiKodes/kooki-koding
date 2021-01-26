//* Packages
import React from "react";
import Head from "next/head";
import { useThemedContext } from "kooki-components";
import { motion, Variants } from "framer-motion";

//* Components
import Typewriter from "@components/Typewriter";

//* Variants
import themeTransitionVariant from "@components/variants/themeTransitionVariant";

//* Styles
import general from "../styles/general.module.sass";

const buttonVariants = (colors): Variants => {
  return {
    theme: {
      color: colors.prim.color,
      border: `.3em solid ${colors.prim.color}`,
      ...themeTransitionVariant,
    },
  };
};

//TODO Update stylesheets to work with mobile view -> use em and percentages to update accordingly so it will always be displayed correctly on any screen size/

export default function Index() {
  const { updateTheme, themeName, colors } = useThemedContext();

  return (
    <motion.div variants={{ theme: { ...themeTransitionVariant } }}>
      <Head>
        <title>Devin Jackson | Front-end Developer</title>
      </Head>
      <header>
        <h1>&lt; Front-end Developer /&gt;</h1>
        <Typewriter
          words={[
            "Designing",
            "Developing",
            "Delivering",
            "Designing, developing, and delivering elegant React Apps.",
            "Devin Jackson",
          ]}
          start={1}
        />
      </header>
      <section>
        <motion.button
          initial="theme"
          whileHover={{ scale: 1.1 }}
          variants={buttonVariants(colors)}
          className={general.btn}
          onClick={() =>
            updateTheme(themeName === "colorful" ? "test" : "colorful")
          }
        >
          Change Theme
        </motion.button>
      </section>
    </motion.div>
  );
}
