import { Flex, Text } from "@chakra-ui/react";

// components
import EducationYear from "@components/home/about/EducationYear";

interface Props {
  year: string;
  educator: string;
  source: string;
}

function EducationInfo({ year, educator, source }: Props) {
  return (
    <Flex w="100%" justifyContent="space-between" px="1rem" py=".5rem">
      <EducationYear>{year}</EducationYear>
      <Text color="light.50">{educator}</Text>
      <Text color="light.50">{source}</Text>
    </Flex>
  );
}

export default EducationInfo;
