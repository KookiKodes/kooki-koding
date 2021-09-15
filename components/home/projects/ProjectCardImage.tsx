import { Flex } from "@chakra-ui/react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function ProjectCardImage(props: Props) {
  return (
    <Flex
      w="100%"
      h="auto"
      minH="10rem"
      border=".3rem solid"
      boxSizing="border-box"
      borderColor="dark.solid"
      borderRadius=".2rem"
      objectFit="cover"
      mb={2.5}
    >
      <Image {...props} objectFit="cover" />
    </Flex>
  );
}

export default ProjectCardImage;
