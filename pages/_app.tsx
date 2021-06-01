//* Packages
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";

//* Components
import { Page } from "../new-components/layout/page";
import { Layout } from "../new-components/layout/layout";
import { Fonts } from "../new-components/fonts";

//* Static
import theme from "@static/themes";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout>
				<AnimatePresence initial={false}>
					<Page key={router.route}>
						<Component {...pageProps} />
					</Page>
				</AnimatePresence>
			</Layout>
		</ChakraProvider>
	);
}

export default App;
