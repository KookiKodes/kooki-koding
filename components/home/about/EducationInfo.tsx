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
    <Flex
      w="100%"
      justifyContent="flex-start"
      alignItems="center"
      px={[".5rem", "1rem"]}
      py=".5rem"
    >
      <EducationYear>{year}</EducationYear>
      <Link
        href={educatorLink}
        target="_blank"
        color="light.50"
        px={["1rem", "3rem"]}
        fontSize={["xs", "md"]}
      >
        {educator}
      </Link>
      <Text color="light.50" fontSize={["xs", "md"]}>
        {source}
      </Text>
    </Flex>
  );
}

export default EducationInfo;
