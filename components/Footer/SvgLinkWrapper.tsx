//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import dynamic from "next/dynamic";
import { useThemedContext } from "kooki-components";

//* Variants
import iconVariants from "@variants/iconVariants";

type Props = {
  href: string;
  filename: string;
  name: string;
};

export default function SvgLinkWrapper(props: Props) {
  const SvgComponent = dynamic(() =>
    import(`../../lib/icons/${props.filename}.svg`).then(
      (mod) => mod.ReactComponent
    )
  );
  const { colors, themeName } = useThemedContext();
  const container = useAnimation();

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  return (
    <motion.a
      initial="initial"
      animate={container}
      href={props.href}
      className="flex items-center justify-center w-12 h-12 p-2.5 rounded-full mx-2 focus:outline-none"
      target="_blank"
      variants={iconVariants.wrapper(colors)}
      whileHover="hover"
      onFocus={() => container.start("hover")}
      onBlur={() => container.start("initial")}
    >
      <SvgComponent />
    </motion.a>
  );
}
