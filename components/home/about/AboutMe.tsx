// packages
import { Grid, Flex } from "@chakra-ui/react";

// static
import TopWave from "@lib/assets/waves/4k-top-wave.png";

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AboutMe({ children }: Props) {
  return (
    <Flex
      minW="0%"
      pt="9rem"
      bgGradient="linear(to bottom, Neutral.dark.80, dark.80)"
      position="relative"
      maxW="1080px"
      as="section"
      pointerEvents="all"
      overflow="hidden"
      id="aboutme"
    >
      <Flex
        position="absolute"
        transform="translate(-58%, -51%)"
        backgroundImage={`url(${TopWave.src})`}
        w={TopWave.width}
        h={TopWave.height}
      />
      <Grid
        flexDir="column"
        h="min-content"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(5, 1fr)"]}
        templateRows={[
          "repeat(3, min-content)",
          "repeat(3, min-content)",
          "repeat(1, min-content)",
        ]}
        px={["20px", "25px"]}
      >
        {children}
      </Grid>
    </Flex>
  );
}

export default AboutMe;
