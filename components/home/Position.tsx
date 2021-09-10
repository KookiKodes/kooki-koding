import { Badge, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

function Position({ children }) {
  return (
    <Badge color="Primary.dark.solid" bg="Primary.default.solid" mt=".5rem">
      <Text fontWeight="normal" fontSize="lg" p=".1rem">
        {children}
      </Text>
    </Badge>
  );
}

export default Position;
