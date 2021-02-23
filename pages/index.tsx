//* Packages
import React from "react";
import Head from "next/head";
import { useThemedContext } from "kooki-components";
import { motion, Variants } from "framer-motion";

//* Components
import Typewriter from "@components/Typewriter";

//* Variants
import themeTransitionVariant from "lib/variants/themeTransitionVariant";

//TODO Update stylesheets to work with mobile view -> use em and percentages to update accordingly so it will always be displayed correctly on any screen size/

export default function Index() {
  const { updateTheme, themeName } = useThemedContext();
  return (
    <>
      <Head>
        <title>Devin Jackson | Front-end Developer</title>
      </Head>
      <header className="flex flex-col items-center justify-center w-full text-6xl h-96">
        <h1 className="mb-8">&lt; Front-end Developer /&gt;</h1>
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
          onClick={() =>
            updateTheme(themeName === "test" ? "colorful" : "test")
          }
        >
          Change Theme
        </motion.button>
      </section>
    </>
  );
}
