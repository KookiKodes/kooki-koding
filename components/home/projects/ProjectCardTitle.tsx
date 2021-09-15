import { Heading } from "@chakra-ui/react";

interface Props {
  children: string;
  size: string | string[];
  color: string | string[];
}

function ProjectCardTitle({ children, size, color }: Props) {
  return (
    <Heading
      color={color}
      textShadow="0 0 .3rem currentColor"
      fontSize={size}
      fontWeight="medium"
      textAlign="center"
      pt={2.5}
      pb={2.5}
    >
      {children}
    </Heading>
  );
}

export default ProjectCardTitle;
