import { UnorderedList, ListItem } from "@chakra-ui/react";

interface Props {
  children: string[];
}

function InterestsList({ children }: Props) {
  return (
    <UnorderedList w="100%" pl="1rem">
      {children.map((str, index) => {
        return <ListItem key={index}>{str}</ListItem>;
      })}
    </UnorderedList>
  );
}

export default InterestsList;
