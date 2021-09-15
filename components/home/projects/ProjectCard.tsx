import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  id: string;
}

function ProjectCard({ children, id }: Props) {
  return (
    <Flex w="100%" justifyContent="center" id={id ? id : ""}>
      <Flex
        p="1rem"
        borderRadius=".3rem"
        bgGradient="linear(to bottom right, Neutral.default.20, Neutral.light.15, Neutral.dark.10)"
        boxShadow="0 .8rem 1.6rem rgba(0, 0, 0, .25)"
        flexDir="column"
        color="light.70"
        maxW="25rem"
        transition="all .3s ease"
        transformstyle="perserve-3d"
        _hover={{
          boxShadow: "0 1.6rem 1.6rem rgba(0, 0, 0, .25)",
          perspective: "40rem",
          transform: "scale(1.05)",
        }}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default ProjectCard;
