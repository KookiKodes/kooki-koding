import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Avatar({ children }: Props) {
  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      color="Primary.default.solid"
    >
      {children}
    </Flex>
  );
}

export default Avatar;
