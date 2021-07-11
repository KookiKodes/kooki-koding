//* packages
import dynamic from "next/dynamic"

//* components
import {MotionIcon} from "@components/framer"

//* interfaces
import {SVGWrapperProps as Props} from "@interfaces/Utilities"

export function SVGWrapper({SVG, styles}: Props) {

	return (
		<MotionIcon sx={styles}>
			<SVG />
		</MotionIcon>
	)
}
