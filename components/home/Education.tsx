import {
  GridItem,
  Tag,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
  Text,
  Badge,
} from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Education({ children }: Props) {
  return (
    <GridItem
      rowSpan={[1, 2]}
      colSpan={[3, 2]}
      display="flex"
      w="100%"
      flexDirection="column"
      py="1rem"
      color="light.70"
      fontWeight="normal"
    >
      {children}
    </GridItem>
  );
}

export default Education;
