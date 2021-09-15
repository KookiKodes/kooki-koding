import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  id?: string;
}

function SkillCard({ children, id }: Props) {
  return (
    <Flex w="100%" justifyContent="center" id={id ? id : ""}>
      <Flex
        flexDir="column"
        boxSizing="content-box"
        border=".2rem solid"
        borderColor="Primary.dark.solid"
        borderRadius=".3rem"
        boxShadow="dark-glow"
        color="light.70"
        p="1rem"
        maxW="20rem"
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default SkillCard;
