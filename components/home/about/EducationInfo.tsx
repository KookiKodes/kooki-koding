import { Flex, Text, Link } from "@chakra-ui/react";

// components
import EducationYear from "@components/home/about/EducationYear";

interface Props {
  year: string;
  educator: string;
  educatorLink: string;
  source: string;
}

function EducationInfo({ year, educator, educatorLink, source }: Props) {
  return (
    <Flex w="100%" justifyContent="space-between" px="1rem" py=".5rem">
      <EducationYear>{year}</EducationYear>
      <Link href={educatorLink} target="_blank" color="light.50">
        {educator}
      </Link>
      <Text color="light.50">{source}</Text>
    </Flex>
  );
}

export default EducationInfo;
