//* Packages
import { useRef, useState } from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Themed } from "kooki-components";

//* Component
import Page from "@components/Page";
import Layout from "@components/Layout";

//* Interfaces
import { Projects } from "@interfaces/ProjectFileInterface";

//* Static
import themes from "lib/static/themes";

//* Style
import "tailwindcss/tailwind.css";
import "../styles/default.sass";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const availPaths = useRef<string[]>([]);
  const projects = useRef<Projects>({});

  if (
    router.pathname === "/projects/[...projectTitle]" &&
    router.query.projectTitle instanceof Array
  ) {
    const title = router.query.projectTitle;
    Reflect.set(pageProps, "availPaths", availPaths);
    if (title.length === 1) {
      availPaths.current.push(`/projects/${title[0]}`);
    }
    return (
      <Themed themes={themes} defaultTheme={"colorful"}>
        <Component {...pageProps} />
      </Themed>
    );
  }

  if (router.pathname === "/projects") {
    Reflect.set(pageProps, "projects", projects);
  }

  if (router.pathname === "/404") {
    return (
      <Themed themes={themes} defaultTheme={"colorful"}>
        <Layout>
          <Page>
            <Component {...pageProps} />
          </Page>
        </Layout>
      </Themed>
    );
  }

  return (
    <Themed themes={themes} defaultTheme={"colorful"}>
      <Layout>
        <AnimatePresence initial={false}>
          <Page key={router.route}>
            <Component {...pageProps} />
          </Page>
        </AnimatePresence>
      </Layout>
    </Themed>
  );
}

export default App;
