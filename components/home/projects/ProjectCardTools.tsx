import { Link } from "@chakra-ui/react";
import React, { ReactElement } from "react";

import { ToolLink } from "@static/links";

interface Props {
  tools: ToolLink[];
  separator: string;
}

function ProjectCardTools({ tools, separator }: Props): ReactElement {
  return (
    <>
      {tools.map((tool, index) => {
        return (
          <Link
            tabIndex={-1}
            key={index}
            href={tool.href}
            target={tool.target ? "_blank" : ""}
            _hover={{
              textDecoration: "none",
              color: "Primary.default.solid",
            }}
            _focus={{
              outline: "none",
              color: "Primary.default.solid",
            }}
          >
            {tool.name + (index !== tools.length - 1 ? separator : "")}
          </Link>
        );
      })}
    </>
  );
}

export default ProjectCardTools;
