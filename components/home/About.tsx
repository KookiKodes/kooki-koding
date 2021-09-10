// packages
import {
  Heading,
  Flex,
  Tag,
  Badge,
  Text,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
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
      h="min-content"
      rowSpan={[1, 1, 1, 2]}
      colSpan={[5, 5, 5, 3]}
      w="100%"
    >
      {children}
    </GridItem>
  );
}

export default About;
