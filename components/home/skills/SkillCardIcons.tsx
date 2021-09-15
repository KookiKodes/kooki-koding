//* packages
import { Flex, Tooltip, LinkOverlay } from "@chakra-ui/react";

//* components
import { SVGWrapper } from "@components/utilities/svg-wrapper";

//* interfaces
import { IconInfo } from "@interfaces/FooterInterface";

interface Props {
  svgs: IconInfo[];
}

function SkillCardIcons({ svgs }: Props) {
  return (
    <Flex alignItems="center" justifyContent="center" w="100%" h="auto">
      {svgs.map(({ name, href, SVG, target }, index) => {
        return (
          <Tooltip
            key={index}
            label={name}
            bg="Neutral.dark.solid"
            color="Primary.default.solid"
          >
            <LinkOverlay
              href={href}
              target={target ? "_blank" : ""}
              position="relative"
            >
              <SVGWrapper
                SVG={SVG}
                styles={{
                  w: "3.5rem",
                  h: "3.5rem",
                }}
              />
            </LinkOverlay>
          </Tooltip>
        );
      })}
    </Flex>
  );
}

export default SkillCardIcons;
