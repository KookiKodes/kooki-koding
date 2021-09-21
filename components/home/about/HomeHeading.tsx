// packages
import { Flex, Heading, GridItem } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function HomeHeading({ children }: Props) {
  return (
    <GridItem
      colSpan={[5, 5, 5, 2]}
      rowSpan={1}
      display="flex"
      flexDir="column"
      position="relative"
      alignItems="center"
      justifyContent="center"
      h="min-content"
      id="me"
    >
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        h="100%"
      >
        {children}
      </Flex>
    </GridItem>
  );
}

export default HomeHeading;
