import { Text } from "@chakra-ui/react";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

function ProjectCardDescription({ children }: Props) {
  return (
    <Text
      textAlign="center"
      fontSize="1rem"
      fontWeight="regular"
      textShadow="0 .4rem .8rem rgba(0,0,0,.25)"
      py={2.5}
    >
      {children}
    </Text>
  );
}

export default ProjectCardDescription;
