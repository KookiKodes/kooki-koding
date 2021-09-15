import { Flex, UnorderedList, ListItem } from "@chakra-ui/react";

interface Props {
  children: string[];
}

function EducationDescription({ children }: Props) {
  return (
    <Flex w="100%" px="1rem" pl="2rem">
      <UnorderedList>
        {children.map((str, index) => {
          return <ListItem key={index}>{str}</ListItem>;
        })}
      </UnorderedList>
    </Flex>
  );
}

export default EducationDescription;
