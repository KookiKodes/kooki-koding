//* Packages
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Static
import variants from "../variants/menubtnVariants";

//* Interfaces
import { BarProps, MenuBtnProps } from "../interfaces/Navigation";

const MenuBar = (props: BarProps) => {
  const { colors } = useThemedContext();

  return (
    <motion.div
      className="flex-shrink w-4/6 h-1.5 lg:h-2 my-0.5 lg:my-1 rounded"
      variants={props.variants(colors)}
      transition={{
        duration: 0.8,
        type: "spring",
      }}
    />
  );
};

export default function MenuBtn({
  isOpen,
  toggleNavbar,
  isDisabled,
}: MenuBtnProps) {
  const { colors, themeName } = useThemedContext();
  const container = useAnimation();

  React.useEffect(() => {
    container.start("theme");
  }, [themeName]);

  React.useEffect(() => {
    if (isOpen) container.start("open");
    else container.start("closed");
  }, [isOpen]);

  return (
    <motion.button
      animate={container}
      layout="position"
      className="box-border absolute z-20 flex flex-col items-center justify-center mt-2 ml-2 scale-100 rounded-full shadow-lg w-14 h-14 focus:outline-none focus:ring-4 focus:ring-current lg:h-20 lg:w-20"
      onClick={toggleNavbar}
      whileHover="hover"
      disabled={isDisabled}
      variants={variants.button(colors)}
      onFocus={() => container.start("focus")}
      onBlur={() => container.start("initial")}
    >
      {variants.bars.map((bar, index) => {
        return <MenuBar variants={bar.variants} key={index} />;
      })}
    </motion.button>
  );
}
