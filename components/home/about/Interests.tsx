import { Flex, GridItem } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Interests({ children }: Props) {
  return (
    <GridItem rowSpan={[1, 2]} colSpan={[3, 1]} h="min-content">
      <Flex
        w="100%"
        flexDirection="column"
        py="1rem"
        color="light.70"
        fontWeight="normal"
        id="interests"
        h="min-content"
      >
        {children}
      </Flex>
    </GridItem>
  );
}

export default Interests;
