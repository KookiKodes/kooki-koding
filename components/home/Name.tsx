import { Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

function Name({ children }) {
  return (
    <Heading
      color="Primary.light.solid"
      fontSize={["4xl", "4xl"]}
      fontWeight="medium"
      textShadow="0 0 .4rem currentColor"
      pt="1rem"
    >
      {children}
    </Heading>
  );
}

export default Name;
