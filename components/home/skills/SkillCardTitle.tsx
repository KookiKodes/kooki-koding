//* packages
import { Flex } from "@chakra-ui/react";

//* components
import SubSectionHeading from "@components/home/utilities/SubSectionHeading";

interface Props {
  children: string;
}

function SkillCardTitle({ children }: Props) {
  return (
    <Flex alignItems="center" justifyContent="center" w="100%" pb="1rem">
      <SubSectionHeading
        color="Primary.default.solid"
        bg="Primary.dark.solid"
        size="lg"
      >
        {children}
      </SubSectionHeading>
    </Flex>
  );
}

export default SkillCardTitle;
