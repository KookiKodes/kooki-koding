//* Packages
import {useState, useEffect} from "react";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

//* Components
import { Page } from "@components/layout/page";
import { Layout } from "@components/layout/layout";
import { Fonts } from "@components/fonts";

//* Static
import theme from "@static/themes";
import navlinks from "@static/links";

function App({ Component, pageProps }: AppProps) {
	const [name, setName] = useState("Kooki Kodes");
	const router = useRouter();
  const [links, setLinks] = useState(navlinks);

	useEffect(() => {
		if (window && !window.location.href.includes("kookikoding")) {
			setName("Devin Jackson")
		}
	}, [null])

	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout name={name} links={links}>
				<AnimatePresence initial={false}>
					<Page key={router.route}>
						<Component {...pageProps} name={name} setLinks={setLinks} />
					</Page>
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
}

export default App;
