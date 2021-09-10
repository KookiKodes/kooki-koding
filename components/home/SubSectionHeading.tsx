import { Tag, Heading, useMultiStyleConfig } from "@chakra-ui/react";

interface Props {
  children: string;
  size: "sm" | "md" | "lg";
}

function SubSectionHeading({ children, size }) {
  const styles = useMultiStyleConfig("SubSectionHeading", {
    size,
    variant: "default",
  });

  return (
    <Tag sx={styles.tag}>
      <Heading sx={styles.heading}>{children}</Heading>
    </Tag>
  );
}

export default SubSectionHeading;
