//* Packages
import dynamic from "next/dynamic";
import React from "react";

export default function SvgWrapper(props: { path: string }) {
  const SvgComponent = dynamic(() =>
    import(`../icons/${props.path}.svg`).then((mod) => mod.ReactComponent)
  );
  return (
    <>
      <SvgComponent />
    </>
  );
}
