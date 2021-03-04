//* Packages
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useThemedContext } from "kooki-components";
import { motion } from "framer-motion";

//* Components
import LoadingSpinner from "@components/LoadingSpinner";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function Project() {
  const { colors, themeName } = useThemedContext();
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <>
      <Head>
        <title>Devin Jackson | Projects</title>
      </Head>
      <header className="w-full h-1/6 flex flex-col items-center justify-center">
        <h1 className="text-6xl">My Projects</h1>
      </header>
      <motion.section className="w-full h-5/6">
        <Link href="/projects/nothing">
          <a className="text-2xl block">Go to Test Page</a>
        </Link>

        {/* {isLoading && <LoadingSpinner spinnerSize={8} dotSize={0.5} />}
        <button onClick={() => setIsLoading(!isLoading)}>Load</button> */}
      </motion.section>
    </>
  );
}
