//* Packages
import React from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Interfaces
import { Nlink } from "../interfaces/Navigation";

//* Variants
import navlinkVariants from "../variants/navlinkVariants";

//* Style
import navlink from "../../styles/Navlink.module.sass";

export default function Navlink(props: Nlink) {
  const { colors } = useThemedContext();

  return (
    <motion.li
      className={`${navlink.link}`}
      variants={navlinkVariants.link(colors)}
      animate={{
        color: props.isHovering ? colors.bkDark.color : colors.sec.color,
      }}
      whileHover={{ color: colors.bkDark.color }}
      onHoverStart={props.onHover}
      onTapStart={props.onHover}
      exit="closed"
    >
      {props.isHovering && (
        <motion.div
          layoutId="selector"
          layout
          variants={navlinkVariants.hoverSelector(colors)}
          className={navlink.selector}
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
          className={navlink.active__selector}
          transition={{
            type: "spring",
            duration: 0.3,
          }}
        />
      )}
      <Link href={props.href}>
        <a
          onClick={props.isActive ? () => {} : props.onClick}
          className={props.isActive ? navlink.active : ""}
        >
          {props.title}
        </a>
      </Link>
    </motion.li>
  );
}
