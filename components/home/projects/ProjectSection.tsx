import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
  id: string;
}

function ProjectSection({ children, id }: Props) {
  return (
    <Flex
      bg="dark.solid"
      position="relative"
      w="100vw"
      maxW="1080px"
      h="min-content"
      as="section"
      pointerEvents="all"
      flexDir="column"
      alignItems="center"
      overflow="hidden"
      justifyContent="space-between"
      id={id}
      pb={10}
      pt="5rem"
    >
      <Flex
        w="100%"
        h="min-content"
        position="relative"
        flexDir="column"
        alignItems="center"
        px="25px"
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default ProjectSection;
