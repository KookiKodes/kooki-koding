import * as React from "react";
import Particles from "react-tsparticles";
import { useTheme } from "@chakra-ui/react";
import themes from "@static/themes";

export function BgOverlay() {
  const particlesInit = React.useRef();
  const particlesLoaded = React.useRef();

  const theme = useTheme();

  return (
    <>
      {/* <Box
        zIndex="2"
        position="absolute"
        w="100%"
        h="100%"
        bgGradient="linear(to-b, dark.30 50%, Neutral.dark.30) 80%"
        backdropFilter="blur(3px)"
        pointerEvents="none"
        top="0"
        left="0"
        overflowX="hidden"
      /> */}
      <Particles
        id="tsparticles"
        init={particlesInit.current}
        loaded={particlesLoaded.current}
        options={{
          background: {
            color: {
              value: themes.colors.dark["0"],
            },
          },
          fpsLimit: 30,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: ["push"],
              },
              onHover: {
                enable: true,
                mode: ["bubble"],
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 500,
              },
              bubble: {
                distance: 200,
                duration: 2,
                opacity: 1,
                size: 20,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: theme.colors.Accent["80"],
            },
            links: {
              color: theme.colors.Accent["50"],
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 1200,
              },
              value: 75,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 8,
            },
          },
          // detectRetina: true,
        }}
      />
    </>
  );
}
