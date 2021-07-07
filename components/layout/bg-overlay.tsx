import * as React from "react";
import Particles from "react-tsparticles";
import { useTheme, Box } from "@chakra-ui/react";
import themes from "@static/themes";

export function BgOverlay() {
	const particlesInit = React.useRef();
	const particlesLoaded = React.useRef();

	const theme = useTheme();

	return (
		<>
			<Box
				zIndex='2'
				position='absolute'
				w='100%'
				h='100%'
				bgGradient='linear(to-b, dark.70 50%, Neutral.dark.50) 80%'
				backdropFilter='blur(3px)'
				pointerEvents='none'
				top='0'
				left='0'
				overflowX='hidden'
			/>
			<Particles
				id='tsparticles'
				init={particlesInit.current}
				loaded={particlesLoaded.current}
				options={{
					background: {
						color: {
							value: themes.colors.dark["0"],
						},
					},
					fpsLimit: 30,
					interactivity: {
						detectsOn: "canvas",
						events: {
							onClick: {
								enable: true,
								mode: ["push", "light"],
							},
							onHover: {
								enable: true,
								mode: ["bubble", "attract"],
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 500,
							},
							light: {
								shadow: {
									color: theme.colors.neutral["900"].solid,
									length: 500,
								},
								area: {
									gradient: {
										start: theme.colors.Accent.solid,
										stop: theme.colors.Accent.solid,
									},
									radius: 1,
								},
							},
							bubble: {
								distance: 200,
								duration: 2,
								opacity: 1,
								size: 20,
							},
							push: {
								quantity: 1,
							},
							repulse: {
								distance: 150,
								duration: 0.4,
							},
							attract: {
								distance: 100,
								duration: 2,
								factor: 1,
								maxSpeed: 3,
								speed: 1,
							},
						},
					},
					particles: {
						color: {
							value: [
								// theme.colors.accent["500"].solid,
								theme.colors.Accent.solid,
								theme.colors.Accent["80"],
								theme.colors.Accent["60"],
							],
						},
						links: {
							color: theme.colors.Accent["50"],
							distance: 150,
							enable: true,
							opacity: 0.8,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: "none",
							enable: true,
							outMode: "bounce",
							random: false,
							speed: 2,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 100,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: "circle",
						},
						size: {
							random: true,
							value: 8,
						},
					},
					detectRetina: true,
				}}
			/>
		</>
	);
}
