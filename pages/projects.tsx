//* Packages
import React, { useEffect, MutableRefObject, useState } from "react";
import Head from "next/head";
import { useThemedContext } from "kooki-components";
import ProjectGrid from "@components/Project";
import { motion, AnimateSharedLayout } from "framer-motion";

//* Components
import LoadingSpinner from "@components/LoadingSpinner";

//* Interfaces
import { Projects } from "@interfaces/ProjectFileInterface";

interface Props {
	projects: MutableRefObject<Projects>;
}

export default function ProjectsPage({ projects }: Props) {
	const { colors, themeName } = useThemedContext();
	const [isLoading, setIsLoading] = useState(true);
	const [isViewing, setIsViewing] = useState(["", ""]);

	async function getData() {
		const data = await fetch("/api/projects", {
			method: "GET",
			headers: {
				"Content-Disposition": "attachment;",
			},
		});
		const files = await data.json();
		projects.current = Object.assign(projects.current, files);
		setIsLoading(false);
	}

	useEffect(() => {
		if (Object.keys(projects.current).length === 0) {
			getData();
		} else setIsLoading(false);
	}, []);

	return (
		<>
			<Head>
				<title>Devin Jackson | Projects</title>
			</Head>
			<header className='flex flex-col items-center justify-start w-full mb-20 h-1/6'>
				<h1 className='text-6xl'>My Projects</h1>
			</header>
			<motion.section className='relative flex items-start justify-center w-full min-h-screen'>
				{isLoading && <LoadingSpinner spinnerSize={8} dotSize={0.5} />}
				{Object.keys(projects.current).length > 0 && (
					<AnimateSharedLayout>
						<ProjectGrid
							isViewing={isViewing[1]}
							wasViewing={isViewing[0]}
							setIsViewing={setIsViewing}
							valueArray={Object.values(projects.current).concat(
								Object.values(projects.current),
								Object.values(projects.current),
								Object.values(projects.current),
								Object.values(projects.current),
								Object.values(projects.current),
								Object.values(projects.current),
								Object.values(projects.current),
								Object.values(projects.current)
							)}
						/>
					</AnimateSharedLayout>
				)}
			</motion.section>
		</>
	);
}
