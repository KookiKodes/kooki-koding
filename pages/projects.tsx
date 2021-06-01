//* Packages
import React, { useEffect, MutableRefObject, useState } from "react";
import Head from "next/head";

import { Projects } from "@interfaces/ProjectFileInterface";

interface Props {
	projects: MutableRefObject<Projects>;
}

export default function ProjectsPage({ projects }: Props) {
	// const [isLoading, setIsLoading] = useState(true);
	// const [isViewing, setIsViewing] = useState(["", ""]);

	// async function getData() {
	// 	const data = await fetch("/api/projects", {
	// 		method: "GET",
	// 		headers: {
	// 			"Content-Disposition": "attachment;",
	// 		},
	// 	});
	// 	const files = await data.json();
	// 	projects.current = Object.assign(projects.current, files);
	// 	setIsLoading(false);
	// }

	// useEffect(() => {
	// 	if (Object.keys(projects.current).length === 0) {
	// 		getData();
	// 	} else setIsLoading(false);
	// }, []);

	return (
		<>
			<Head>
				<title>Devin Jackson | Projects</title>
			</Head>
			<header className='flex flex-col items-center justify-start w-full mb-20 h-1/6'>
				<h1 className='text-6xl'>My Projects</h1>
			</header>
		</>
	);
}
