// packages
import {
  GridItem,
} from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function About({ children }: Props) {
  return (
    <GridItem
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100%"
      rowSpan={[1, 1, 1, 2]}
      colSpan={[5, 5, 5, 3]}
      w="100%"
      id="about"
      position="relative"
    >
      {children}
    </GridItem>
  );
}

export default About;
