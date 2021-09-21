import { Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Bio({ children }: Props) {
  return (
    <Flex flexDirection="column" w="100%" py="1rem" color="light.70" id="bio">
      {children}
    </Flex>
  );
}

export default Bio;
