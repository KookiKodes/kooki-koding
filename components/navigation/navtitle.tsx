import * as React from "react";
import Link from "next/link";
import { useStyles } from "@chakra-ui/react";
import { MotionLink } from "../framer";

interface Props {
  children: string;
}

export function Navtitle({ children }: Props) {
  const styles = useStyles();

  return (
    <Link href="/#aboutme">
      <MotionLink __css={styles.title} transition={{ duration: 0.3 }} layout>
        {children}
      </MotionLink>
    </Link>
  );
}
