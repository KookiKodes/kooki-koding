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
      className="h-2 my-1 rounded w-14"
      variants={props.variants(colors)}
      transition={{
        duration: 0.8,
        type: "spring",
      }}
    />
  );
};

export default function MenuBtn({ toggleNavbar, isDisabled }: MenuBtnProps) {
  const { colors } = useThemedContext();

  return (
    <motion.button
      layout="position"
      className="absolute z-20 flex flex-col items-center justify-center flex-initial w-20 h-20 mt-2 ml-2 scale-100 shadow-lg rounded-3xl focus:outline-none"
      onClick={toggleNavbar}
      whileHover={{ scale: 0.8 }}
      disabled={isDisabled}
      variants={variants.button(colors)}
    >
      {variants.bars.map((bar, index) => {
        return <MenuBar variants={bar.variants} key={index} />;
      })}
    </motion.button>
  );
}
