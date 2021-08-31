//* packages
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

//* components
import { MotionHeading, MotionSpan } from "@components/framer";

//* interfaces
import { FormStatusProps as Props } from "@interfaces/form/ContactForm";

//* helpers
import { firstToUpper } from "@helper/utilities";

function getInvalidNameMessage(getInvalidFieldNames: any) {
  return `Please correct the following fields: ${getInvalidFieldNames()
    .map((name, index, arr) =>
      index + 1 === arr.length && arr.length > 1
        ? `and ${firstToUpper(name)}`
        : firstToUpper(name)
    )
    .join(", ")}`;
}

export function FormStatus({ state = "inactive", message }: Props) {
  const container = useAnimation();

  useEffect(() => {
    container.start({
      opacity: [0, 1],
    });
  }, [state]);

  return (
    <MotionHeading
      animate={container}
      variants={{}}
      color="currentColor"
      size={state === "invalid" ? "lg" : "xl"}
      fontWeight="light"
      display="block"
      whiteSpace="pre-wrap"
    >
      {message}
    </MotionHeading>
  );
}
