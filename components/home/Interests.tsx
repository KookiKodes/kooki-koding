import { GridItem, UnorderedList, ListItem, Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Interests({ children }: Props) {
  return (
    <GridItem rowSpan={[1, 2]} colSpan={[3, 1]}>
      <Flex
        w="100%"
        flexDirection="column"
        py="1rem"
        color="light.70"
        fontWeight="normal"
      >
        {children}
      </Flex>
    </GridItem>
  );
}

export default Interests;
