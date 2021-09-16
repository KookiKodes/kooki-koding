import { Flex } from "@chakra-ui/react";
import { ReactElement } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function ProjectCardBtnContainer({ children }: Props): ReactElement {
  return (
    <Flex w="100%" justifyContent="space-evenly" alignItems="center" py={3}>
      {children}
    </Flex>
  );
}

export default ProjectCardBtnContainer;
