//* Packages
import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
// import projectModalVariant from "@variants/projectModalVariants";

//* Interfaces
import { DefaultModalSize, ProjectModalProps } from "@interfaces/ProjectModal";

export default function ProjectModal({
	title,
	desc,
	img,
	isViewing,
	setIsViewing,
	viewingTitle,
}: ProjectModalProps) {
	const container = useAnimation();
	// const { colors } = useThemedContext();
	const viewRef = useRef<HTMLImageElement>(null);
	const defaultModalSize = useRef<DefaultModalSize>({ width: 0, height: 0 });

	useEffect(() => {
		const width = viewRef?.current?.width as number;
		const height = viewRef?.current?.height as number;
		defaultModalSize.current = { width, height };
	}, []);

	useEffect(() => {
		initView();
	}, [isViewing]);

	async function initView() {
		const { width, height } = defaultModalSize.current;
		if (isViewing) {
			await container.start({
				height: height * 2,
			});
		}
	}

	function focusOnSelected() {
		viewRef?.current?.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
	}

	return (
		<motion.li
			layout
			className='box-border relative flex flex-col items-center justify-end gap-12 overflow-hidden rounded-md cursor-pointer flex-basis-96 h-96 hover:shadow-lg'
			onClick={() => setIsViewing(isViewing ? "" : title)}
			animate={container}
			transition={{ duration: 0.5 }}
			onAnimationComplete={() => {
				if (isViewing) focusOnSelected();
				if (viewingTitle === "") focusOnSelected();
			}}>
			<motion.div
				className='relative z-10 flex flex-col items-center self-end justify-center order-2 w-full py-4 text-2xl bg-black border-4 border-black h-1/6'
				layout>
				<motion.h1>
					{title.substring(0, 1).toUpperCase() + title.substring(1)}
				</motion.h1>
				<AnimatePresence>
					{isViewing && (
						<motion.p className='relative z-10 order-2' exit={{ opacity: 0 }}>
							{desc}
						</motion.p>
					)}
				</AnimatePresence>
			</motion.div>
			{img && (
				<motion.img
					ref={viewRef}
					layout
					className='absolute order-1 object-cover object-top w-full h-full'
					src={img}
					alt={`${title} placeholder`}
				/>
			)}
		</motion.li>
	);
}
