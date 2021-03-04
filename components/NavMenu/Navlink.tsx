//* Packages
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Interfaces
import { Nlink } from "@interfaces/NavMenuInterface";

//* Variants
import navlinkVariants from "@variants/navlinkVariants";

export default function Navlink(props: Nlink) {
  const { colors } = useThemedContext();

  return (
    <motion.li
      className="relative flex flex-col items-center justify-center w-full h-20 my-2 md:my-4 md:h-32"
      variants={navlinkVariants.link(colors)}
      animate={{
        color: props.isHovering ? colors.bkDark.color : colors.sec.color,
      }}
      whileHover={{ color: colors.bkDark.color }}
      onFocus={props.onHover}
      onHoverStart={props.onHover}
      onTapStart={props.onHover}
      exit="closed"
    >
      {props.isHovering && (
        <motion.div
          layoutId="selector"
          layout
          initial="theme"
          variants={navlinkVariants.hoverSelector(colors)}
          className="absolute z-10 w-full h-full shadow-lg top-1 md:top-2"
          transition={{
            type: "spring",
            duration: 0.5,
          }}
        />
      )}
      {props.isActive && (
        <motion.div
          layoutId="active"
          layout
          variants={navlinkVariants.activeSelector(colors)}
          className="box-border absolute z-30 w-40 h-16 border-2 border-current rounded-md shadow-md top-3 md:w-96 md:h-28 md:top-4"
          transition={{
            type: "spring",
            duration: 0.3,
          }}
        />
      )}
      <Link href={props.href}>
        <a
          onClick={props.isActive ? () => {} : props.onClick}
          className={`z-20 focus:outline-none lg:text-8xl md:text-6xl sm:text-4xl text-4xl ${
            props.isActive ? "cursor-default" : ""
          }`}
        >
          {props.title}
        </a>
      </Link>
    </motion.li>
  );
}
