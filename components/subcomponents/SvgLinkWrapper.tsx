//* Packages
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useThemedContext } from "kooki-components";

//* Variants
import iconVariants from "@components/variants/iconVariants";

type Props = {
  href: string;
  filename: string;
  name: string;
};

export default function SvgLinkWrapper(props: Props) {
  const SvgComponent = dynamic(() =>
    import(`../icons/${props.filename}.svg`).then((mod) => mod.ReactComponent)
  );
  const { colors } = useThemedContext();

  return (
    <motion.a
      href={props.href}
      className="flex items-center justify-center w-12 h-12 p-2.5 rounded-full mx-2 focus:outline-none"
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
