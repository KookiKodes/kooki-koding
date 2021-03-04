//* Packages
import React from "react";
import { motion } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Component
import SvgLinkWrapper from "./SvgLinkWrapper";

//* Variants
import iconVariants from "@variants/iconVariants";

//* Interfaces
import { IconInfo } from "@interfaces/FooterInterface";

type Props = {
  icons: IconInfo[];
};

export default function SvgContainer(props: Props) {
  const { colors } = useThemedContext();

  return (
    <motion.div
      variants={iconVariants.container(colors)}
      className="flex items-center justify-center w-full my-2"
    >
      {props.icons.map((icon, index) => {
        return (
          <SvgLinkWrapper
            href={icon.href}
            filename={icon.filename}
            key={index}
            name={icon.name}
          />
        );
      })}
    </motion.div>
  );
}
