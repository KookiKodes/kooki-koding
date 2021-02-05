//* Packages
import React, { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useThemedContext } from "kooki-components";

//* Components
import Navlink from "./Navlink";

//* Interfaces
import { NlinkContainer } from "../interfaces/Navigation";

//* Static
import navlinkVariants from "../variants/navlinkVariants";

export default function NavlinkContainer(props: NlinkContainer) {
  const router = useRouter();
  const { colors } = useThemedContext();
  const [hovering, setHovering] = useState("null");
  const [active, setActive] = useState(router.route);

  function onClick(href: string) {
    setActive(href);
    setTimeout(() => {
      props.toggleNavbar();
    }, 200);
  }

  React.useEffect(() => {
    setActive(router.route);
  }, [router.route]);

  return (
    <AnimateSharedLayout>
      <motion.ul
        className="relative flex flex-col justify-start w-full h-full p-0 mt-20 list-none"
        variants={navlinkVariants.container(colors)}
      >
        <AnimatePresence>
          {props.isOpen &&
            props.links.map((link, index) => {
              return (
                <Navlink
                  href={active === link.href ? " " : link.href}
                  title={link.title}
                  key={index}
                  isHovering={hovering === link.title}
                  onHover={() => setHovering(link.title)}
                  onClick={() => onClick(link.href)}
                  isActive={active === link.href}
                />
              );
            })}
        </AnimatePresence>
      </motion.ul>
    </AnimateSharedLayout>
  );
}
