//* Packages
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useThemedContext } from "kooki-components";

//* Styles
import footer from "../../styles/Footer.module.sass";

//* Variants
import iconVariants from "@components/variants/iconVariants";

type Props = {
  href: string;
  filename: string;
  name: string;
};

export default function SvgWrapper(props: Props) {
  const SvgComponent = dynamic(() =>
    import(`../icons/${props.filename}.svg`).then((mod) => mod.ReactComponent)
  );
  const { colors } = useThemedContext();

  return (
    <motion.a
      href={props.href}
      className={footer.svg_link}
      target="_blank"
      variants={iconVariants.wrapper(colors)}
      whileHover={{
        color: colors.bkDark.color,
        border: `.15em solid ${colors.bkPrim.color}`,
        background: colors.bkPrim.color,
        transition: {
          duration: 0.2,
          ease: "easeIn",
        },
      }}
    >
      <SvgComponent />
    </motion.a>
  );
}
