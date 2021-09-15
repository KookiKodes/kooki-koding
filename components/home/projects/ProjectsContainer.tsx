import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function ProjectsContainer({ children }: Props) {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      rows={[4, 4, 4]}
      w="100%"
      px="1rem"
      h="min-content"
      gap={10}
    >
      {children}
    </SimpleGrid>
  );
}

export default ProjectsContainer;
