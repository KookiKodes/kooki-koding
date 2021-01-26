//* Packages
import React from "react";
import { motion } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Component
import SvgWrapper from "./SvgWrapper";

//* Variants
import iconVariants from "@components/variants/iconVariants";

//* Styles
import footer from "../../styles/Footer.module.sass";

//* Interfaces
import { IconInfo } from "../interfaces/Footer";

type Props = {
  icons: IconInfo[];
};

export default function SvgContainer(props: Props) {
  const { colors } = useThemedContext();

  return (
    <motion.div
      variants={iconVariants.container(colors)}
      className={footer.svg_container}
    >
      {props.icons.map((icon, index) => {
        return (
          <SvgWrapper
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
