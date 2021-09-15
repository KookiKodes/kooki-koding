//* packages
import { Grid, Flex } from "@chakra-ui/react";

//* static
import TopSkillWave from "@lib/assets/waves/4k-skill-top-wave.png";
import BotSkillWave from "@lib/assets/waves/4k-skill-bottom-wave.png";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function SkillSection({ children }: Props) {
  return (
    <Flex
      bgGradient="linear(to bottom, Neutral.default.70 5%, Primary.default.solid 20%, Primary.default.solid 80%, Neutral.default.70 100%)"
      position="relative"
      w="100vw"
      maxW="1080px"
      h="min-content"
      as="section"
      pointerEvents="all"
      flexDir="column"
      alignItems="center"
      overflow="hidden"
      justifyContent="space-between"
      id="skills"
    >
      <Flex
        transform="translate(5%, -1%)"
        backgroundImage={`url(${TopSkillWave.src})`}
        w={TopSkillWave.width}
        h={TopSkillWave.height}
      />
      <Flex
        w="100%"
        h="min-content"
        position="relative"
        flexDir="column"
        alignItems="center"
        px="25px"
      >
        {children}
      </Flex>
      <Flex
        transform="translate(5%, 1%)"
        backgroundImage={`url(${BotSkillWave.src})`}
        w={TopSkillWave.width}
        h={TopSkillWave.height}
      />
    </Flex>
  );
}

export default SkillSection;
