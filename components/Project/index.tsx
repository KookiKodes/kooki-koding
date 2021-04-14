import React from "react";
import ProjectModal from "./ProjectModal";
import { ProjectFiles } from "@interfaces/ProjectFileInterface";
import { motion } from "framer-motion";

interface Props {
	valueArray: ProjectFiles[];
	isViewing: string;
	setIsViewing(title: string): void;
}

export default function ProjectGrid({
	valueArray,
	isViewing,
	setIsViewing,
}: Props) {
	let selected: any = null;
	let unselected: any[] = [];

	valueArray.forEach(({ desc, title, placeholderImg }, index) => {
		const newModal = (
			<ProjectModal
				key={index}
				title={title + index}
				desc={desc}
				img={placeholderImg}
				isViewing={title + index === isViewing}
				setIsViewing={() =>
					setIsViewing(isViewing === title + index ? "" : title + index)
				}
				viewingTitle={isViewing}
			/>
		);
		if (title + index === isViewing) {
			selected = newModal;
		} else unselected.push(newModal);
	});

	return (
		<motion.ul
			className='relative flex flex-wrap items-start justify-start flex-auto w-5/6 h-full gap-10 min-h-max'
			layout>
			{selected !== null && (
				<motion.div layout className='flex items-center justify-center w-full'>
					{selected}
				</motion.div>
			)}
			<motion.div layout className='flex flex-wrap flex-1 w-full gap-10'>
				{unselected}
			</motion.div>
		</motion.ul>
	);
}
