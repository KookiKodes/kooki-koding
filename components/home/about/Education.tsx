import {
  GridItem,
  Flex
} from "@chakra-ui/react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function Education({ children }: Props) {
  return (
    <GridItem
      rowSpan={[1, 2]}
      colSpan={[1, 3]}
      display="flex"
      w="100%"
      flexDirection="column"
      pb="1rem"
      color="light.70"
      fontWeight="normal"
      id="education"
      fontSize="lg"
    >
      {children}
    </GridItem>
  );
}

export default Education;
