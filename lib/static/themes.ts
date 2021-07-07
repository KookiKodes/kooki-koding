//* Packages
import { extendTheme } from "@chakra-ui/react";

//* Static
import { Navigation } from "@static/themes/navigation/navigation";
import { Page } from "@static/themes/layout/page";
import { Layout } from "@static/themes/layout/layout";
import { Footer } from "@static/themes/footer/footer";
import { ContactForm } from "@static/themes/form/contact-form";
import {FlushIconInput} from "@static/themes/form/flush-icon-input"

//* Helper Functions
import { objFromRgba } from "@helper/objFromRgba";

export default extendTheme({
	styles: {
		global: {
			html: {
				overflowX: "hidden",
			},
			"#tsparticles": {
				position: "absolute",
				width: "100%",
				height: "100%",
				zIndex: 1,
				top: 0,
				left: 0,
			},
		},
	},
	components: {
		Navigation,
		Page,
		Layout,
		Footer,
		ContactForm,
		FlushIconInput,
	},
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	fonts: {
		heading: "'Fira Code', monospace",
		body: "'Fira Code', monospace",
	},
	colors: {
		primary: {
			50: objFromRgba("rgba(228, 251, 236, 1)"),
			100: objFromRgba("rgba(196, 234, 212, 1)"),
			200: objFromRgba("rgba(162, 219, 186, 1)"),
			300: objFromRgba("rgba(128, 203, 159, 1)"),
			400: objFromRgba("rgba(93, 188, 133, 1)"),
			500: objFromRgba("rgba(67, 162, 107, 1)"),
			600: objFromRgba("rgba(50, 126, 82, 1)"),
			700: objFromRgba("rgba(34, 90, 59, 1)"),
			800: objFromRgba("rgba(16, 55, 34, 1)"),
			900: objFromRgba("rgba(0, 21, 7, 1)"),
		},
		neutral: {
			50: objFromRgba("rgba(237, 240, 253, 1)"),
			100: objFromRgba("rgba(206, 209, 229, 1)"),
			200: objFromRgba("rgba(176, 179, 207, 1)"),
			300: objFromRgba("rgba(144, 148, 186, 1)"),
			400: objFromRgba("rgba(113, 118, 166, 1)"),
			500: objFromRgba("rgba(88, 92, 141, 1)"),
			600: objFromRgba("rgba(68, 72, 110, 1)"),
			700: objFromRgba("rgba(50, 53, 82, 1)"),
			800: objFromRgba("rgba(28, 31, 50, 1)"),
			900: objFromRgba("rgba(9, 9, 22, 1)"),
		},
		complementary: {
			50: objFromRgba("rgba(255, 234, 234, 1)"),
			100: objFromRgba("rgba(237, 200, 200, 1)"),
			200: objFromRgba("rgba(219, 163, 166, 1)"),
			300: objFromRgba("rgba(203, 128, 130, 1)"),
			400: objFromRgba("rgba(188, 93, 94, 1)"),
			500: objFromRgba("rgba(162, 67, 69, 1)"),
			600: objFromRgba("rgba(127, 52, 53, 1)"),
			700: objFromRgba("rgba(92, 36, 38, 1)"),
			800: objFromRgba("rgba(56, 20, 22, 1)"),
			900: objFromRgba("rgba(26, 3, 5, 1)"),
		},
		accent: {
			50: objFromRgba("rgba(223, 251, 247, 1)"),
			100: objFromRgba("rgba(192, 237, 229, 1)"),
			200: objFromRgba("rgba(157, 222, 212, 1)"),
			300: objFromRgba("rgba(122, 208, 195, 1)"),
			400: objFromRgba("rgba(86, 194, 177, 1)"),
			500: objFromRgba("rgba(61, 169, 152, 1)"),
			600: objFromRgba("rgba(44, 131, 118, 1)"),
			700: objFromRgba("rgba(28, 95, 84, 1)"),
			800: objFromRgba("rgba(8, 57, 51, 1)"),
			900: objFromRgba("rgba(0, 22, 17, 1)"),
		},
		Neutral: {
			dark: objFromRgba("rgba(34, 36, 56, 1)"),
			default: objFromRgba("rgba(50, 53, 82, 1)"),
			light: objFromRgba("rgba(96, 103, 158, 1)"),
		},
		Primary: {
			dark: objFromRgba("rgba(36, 87, 57, 1)"),
			default: objFromRgba("rgba(62, 150, 99, 1)"),
			light: objFromRgba("rgba(88, 214, 140, 1)"),
		},
		Complementary: {
			dark: objFromRgba("rgba(112, 46, 47, 1)"),
			default: objFromRgba("rgba(138, 56, 58, 1)"),
			light: objFromRgba("rgba(214, 88, 90, 1)"),
		},
		Accent: objFromRgba("rgba(54, 150, 135, 1)"),
		light: objFromRgba("rgba(245, 245, 252, 1)"),
		dark: objFromRgba("rgba(26, 28, 43, 1)"),
	},
});
