import { Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

function SkillHeading({ children }: Props) {
  return (
    <Heading
      fontSize="5xl"
      color="Primary.light.solid"
      fontWeight="medium"
      textShadow="0 0 .5rem currentColor"
      pb="3rem"
    >
      {children}
    </Heading>
  );
}

export default SkillHeading;
