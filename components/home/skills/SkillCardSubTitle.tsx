import { Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

function SkillCardSubTitle({ children }: Props) {
  return (
    <Heading
      fontWeight="medium"
      fontSize="xl"
      textShadow="0 .3rem .2rem rgba(0, 0, 0, .2)"
      w="100%"
      textAlign="center"
      pt="1rem"
      pb=".5rem"
    >
      {children}
    </Heading>
  );
}

export default SkillCardSubTitle;
