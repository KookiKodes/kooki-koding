//* Packages
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Components
// import SvgWrapper from "@components/Footer/SvgWrapper";

//* Variants
import error404Variants from "../lib/static/error404Variants";

export default function ErrorPage() {
	// const router = useRouter();
	// const { colors } = useThemedContext();
	// const container = useAnimation();

	// React.useEffect(() => {
	//   if (router.asPath !== "/404") {
	//     router.push("/404");
	//   }
	//   router.prefetch("/");
	// }, [router]);

	return (
		// <motion.div
		//   layout
		//   initial="initial"
		//   animate="visible"
		//   variants={error404Variants.page(colors)}
		//   transition={{ duration: 0.5, type: "spring" }}
		//   className="w-full h-full flex flex-col items-center justify-center"
		// >
		<>
			<Head>
				<title>Error 404</title>
			</Head>
			<h1 className='text-4xl lg:text-6xl lg:mb-12 mb-8 font-semibold'>
				404 - Page not Found
			</h1>
			<Link href='/'>
				<motion.a
					initial='initial'
					// animate={container}
					// variants={error404Variants.anchor(colors)}
					whileHover='hover'
					className='w-28 lg:w-40 h-10 lg:h-16 lg:text-xl flex color-current items-center justify-center cursor-pointer rounded-lg font-medium border-current border-2 flex-col text-sm relative overflow-hidden'>
					Home
					{/* <SvgWrapper
						initial='initial'
						path='utility/long-arrow-left-light'
						// variants={error404Variants.arrowIcon(colors)}
					/> */}
				</motion.a>
			</Link>
		</>
		// </motion.div>
	);
}
