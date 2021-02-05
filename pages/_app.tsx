//* Packages
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Themed } from "kooki-components";

//* Component
import Page from "@components/Page";
import Layout from "@components/Layout";

//* Static
import themes from "@components/static/themes";

//* Style
import "tailwindcss/tailwind.css";
import "../styles/globals.sass";

function MyApp({ Component: Route, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<Themed themes={themes} defaultTheme={"colorful"}>
			<Layout>
				<AnimatePresence initial={false}>
					<Page key={router.route}>
						<Route {...pageProps} />
					</Page>
				</AnimatePresence>
			</Layout>
		</Themed>
	);
}

export default MyApp;
