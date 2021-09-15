import React from "react";
import { Tag, Heading, useMultiStyleConfig } from "@chakra-ui/react";
import { MotionTag, MotionHeading } from "@components/framer";

interface Props {
  children: string;
  size: "sm" | "md" | "lg" | "xl";
  color: string;
  bg: string;
  id?: string;
}

function SubSectionHeading({ children, size, color, bg, id }: Props) {
  const styles = useMultiStyleConfig("SubSectionHeading", {
    size,
    variant: "default",
  });

  return (
    <MotionTag __css={styles.tag} bg={bg} id={id ? id : ""}>
      <MotionHeading __css={styles.heading} color={color}>
        {children}
      </MotionHeading>
    </MotionTag>
  );
}

export default SubSectionHeading;
