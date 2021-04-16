//* Packages
import React, { useEffect, useRef } from "react";
import {
	AnimatePresence,
	motion,
	useAnimation,
	useTransform,
	useMotionValue,
} from "framer-motion";
import { useThemedContext } from "kooki-components";

//* Variants
import projectModalVariant from "@variants/projectModalVariants";

//* Interfaces
import { DefaultModalSize, ProjectModalProps } from "@interfaces/ProjectModal";

export default function ProjectModal({
	title,
	desc,
	img,
	isViewing,
	wasViewing,
	setIsViewing,
	viewingTitle,
}: ProjectModalProps) {
	const container = useAnimation();
	const { colors } = useThemedContext();
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
		} else await container.start("unselected");
	}

	function focusOnRef() {
		viewRef?.current?.scrollIntoView({
			behavior: "smooth",
			block: "center",
			inline: "center",
		});
	}

	useEffect(() => {
		setTimeout(() => {
			if (viewingTitle === "" && wasViewing === title) focusOnRef();
		}, 400);
	}, [wasViewing]);

	const x = useMotionValue(0.5);
	const y = useMotionValue(0.5);
	const rotateY = useTransform(x, [0, 1], [-20, 20], { clamp: true });
	const rotateX = useTransform(y, [0, 1], [-20, 20], { clamp: true });

	const textRotateX = useTransform(rotateX, (value) => {
		return Math.sign(value) === -1 ? value * 1 : value * -1;
	});

	const textRotateY = useTransform(rotateY, (value) => {
		return value * -1;
	});

	const onMove = (e) => {
		const bounds = e.currentTarget.getBoundingClientRect();

		const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
		const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

		x.set(xValue, true);
		y.set(yValue, true);
	};

	return (
		<motion.li
			layout
			style={{ x, y, rotateX, rotateY }}
			className='box-border relative flex flex-col items-center justify-end gap-12 rounded-md cursor-pointer flex-basis-96 h-96 hover:shadow-lg'
			onClick={() => setIsViewing(isViewing ? "" : title)}
			initial='intial'
			onPointerMove={onMove}
			onPointerLeave={() => {
				container.start({
					rotateX: 0.5,
					rotateY: 0.5,
				});
			}}
			animate={container}
			variants={projectModalVariant.container(colors)}
			transition={{ duration: 0.5 }}
			onAnimationComplete={() => {
				if (isViewing) focusOnRef();
			}}>
			<motion.div className='relative z-20 flex flex-col items-center self-end justify-center order-2 w-full py-4 text-2xl bg-black border-4 border-black h-1/6'>
				<motion.h1
					style={{
						rotateX: textRotateX,
						rotateY: textRotateY,
						z: 1000,
						textShadow: "1px 10px 10px green",
					}}>
					{title.substring(0, 1).toUpperCase() + title.substring(1)}
				</motion.h1>
				<AnimatePresence>
					{isViewing && (
						<motion.p className='relative z-20 order-2' exit={{ opacity: 0 }}>
							{desc}
						</motion.p>
					)}
				</AnimatePresence>
			</motion.div>
			{img && (
				<motion.img
					layout
					ref={viewRef}
					className='absolute z-10 order-1 object-cover object-top w-full h-full shadow-lg'
					src={img}
					alt={`${title} placeholder`}
				/>
			)}
		</motion.li>
	);
}
