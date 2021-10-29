import { Text } from "@chakra-ui/react";

interface Props {
  children: string | JSX.Element | JSX.Element[];
  isTruncated?: boolean;
  mb?: number | string;
}

function ProjectCardDescription({ children, isTruncated, mb }: Props) {
  return (
    <Text
      textAlign="center"
      fontWeight="regular"
      textShadow="0 .4rem .8rem rgba(0,0,0,.25)"
      isTruncated={!isTruncated}
      noOfLines={!isTruncated ? 5 : Infinity}
      whiteSpace="normal"
      mb={mb}
    >
      {children}
    </Text>
  );
}

export default ProjectCardDescription;
