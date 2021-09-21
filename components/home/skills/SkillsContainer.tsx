import { SimpleGrid, Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function SkillsContainer({ children }: Props) {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      rows={[4, 4, 4]}
      w="100%"
      px={[".5rem", "1rem"]}
      h="min-content"
      gap={10}
      maxW="45rem"
    >
      {children}
    </SimpleGrid>
  );
}

export default SkillsContainer;
