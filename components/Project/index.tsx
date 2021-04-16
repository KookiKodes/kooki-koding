import React from "react";
import ProjectModal from "./ProjectModal";
import { ProjectFiles } from "@interfaces/ProjectFileInterface";
import { motion } from "framer-motion";

interface Props {
	valueArray: ProjectFiles[];
	isViewing: string;
	wasViewing: string;
	setIsViewing(title: string[]): void;
}

export default function ProjectGrid({
	valueArray,
	isViewing,
	wasViewing,
	setIsViewing,
}: Props) {
	let [selected, setSelected]: any = React.useState(null);
	let [unselected, setUnselected]: any = React.useState([]);

	React.useEffect(() => {
		const newArray: any[] = [];
		valueArray.forEach(({ title, desc, placeholderImg }, index) => {
			const newModal = (
				<ProjectModal
					desc={desc}
					title={title + index}
					img={placeholderImg}
					key={index}
					isViewing={title + index === isViewing}
					wasViewing={wasViewing}
					setIsViewing={() => {
						const prev = isViewing;
						const viewing = isViewing === title + index ? "" : title + index;
						setIsViewing([prev, viewing]);
					}}
					viewingTitle={isViewing}
				/>
			);

			if (title + index === isViewing) {
				setSelected(newModal);
			} else {
				newArray.push(newModal);
			}
		});
		setUnselected(newArray);
		if (isViewing === "") setSelected(null);
	}, [valueArray, isViewing]);

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
