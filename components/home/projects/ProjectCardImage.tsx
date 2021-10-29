import { Flex, Image } from "@chakra-ui/react";
// import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  minH?: string;
}

function ProjectCardImage(props: Props) {
  return (
    <Flex
      minH={props.minH ? props.minH : "10rem"}
      maxH={props.minH ? props.minH : 150}
      border=".3rem solid"
      borderColor="dark.solid"
      rounded="md"
      objectFit="cover"
      mb={2.5}
    >
      <Image src={props.src} alt={props.alt} objectFit="cover" />
    </Flex>
  );
}

export default ProjectCardImage;
