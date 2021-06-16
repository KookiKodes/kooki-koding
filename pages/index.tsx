//* Packages
import React from "react";
import Head from "next/head";
import { Heading } from "@chakra-ui/react";

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Devin Jackson | Front-end Developer</title>
			</Head>
			<header>
				<Heading
					className='mb-8'
					onClick={() => console.log("hello world")}
					pointerEvents='all'
					zIndex='5'>
					&lt; Front-end Developer /&gt;
				</Heading>
			</header>
			<section></section>
		</>
	);
}
