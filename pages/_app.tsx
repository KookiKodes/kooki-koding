//* Packages
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Themed } from "kooki-components";

//* Component
import Page from "@components/Page";
import Layout from "@components/Layout";

//* Static
import themes from "lib/static/themes";

//* Style
import "tailwindcss/tailwind.css";
import "../styles/default.sass";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathname = router.pathname;

  if (pathname.includes("/projects/[...projectTitle]")) {
    return <Component {...pageProps} />;
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

export default MyApp;
