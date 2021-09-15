import { Text, Flex } from "@chakra-ui/react";

interface Props {
  children: string;
}

export default function SkillCardDescription({ children }) {
  return (
    <Flex justifyContent="center" alignItems="center" px="1rem">
      <Text
        w="100%"
        fontSize="md"
        fontWeight="normal"
        textAlign="center"
        lineHeight="1.1rem"
        maxW="15rem"
      >
        {children}
      </Text>
    </Flex>
  );
}
