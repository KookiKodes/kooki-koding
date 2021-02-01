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
        className="flex flex-col justify-start relative w-full h-full list-none mt-20 p-0"
        variants={navlinkVariants.container(colors)}
      >
        <AnimatePresence>
          {props.isOpen &&
            props.links.map((link, index) => {
              return (
                <Navlink
                  href={link.href}
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
