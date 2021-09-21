import { GridItem, Flex } from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Education({ children }: Props) {
  return (
    <Flex
      // rowSpan={[1, 2]}
      // colSpan={[1, 3]}
      gridColumn="span 5/span 5"
      display="flex"
      w="100%"
      flexDirection="column"
      py="1.5rem"
      color="light.70"
      fontWeight="normal"
      id="education"
      fontSize="lg"
    >
      {children}
    </Flex>
  );
}

export default Education;
