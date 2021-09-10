// packages
import { Flex, Heading, GridItem } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function HomeHeading({ children }: Props) {
  return (
    <GridItem
      rowSpan={[1, 1, 1, 2]}
      colSpan={[5, 5, 5, 2]}
      display="flex"
      flexDir="column"
      position="relative"
      alignItems="center"
      justifyContent="center"
      h="min-content"
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
