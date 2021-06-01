//* Packages
import * as React from "react";
import { useRouter } from "next/router";
import {
	useBoolean,
	Portal,
	useMultiStyleConfig,
	StylesProvider,
} from "@chakra-ui/react";

//* Components
import { Navtitle } from "./navtitle";
import { NavlinkContainer } from "../navigation/navlink-container";
import { MotionFlex, MotionNav } from "new-components/framer";
import { MenuBtn } from "./menu-btn";

//* Static
import links from "@static/links";

interface Props {
	containerRef: React.RefObject<HTMLElement | null> | undefined;
	hideLinks: boolean;
}

export function Navigation({ containerRef, hideLinks }: Props) {
	const router = useRouter();
	const [isOpen, setIsOpen] = useBoolean(false);
	// const [disabled, setDisabled] = useBoolean(false);

	React.useEffect(() => {
		if (hideLinks) setIsOpen.off();
	}, [hideLinks]);

	const styles = useMultiStyleConfig("Navigation", {
		variant: hideLinks && isOpen ? "navmenu" : "navbar",
		size: hideLinks && isOpen ? "isOpen" : "default",
	});

	return (
		<>
			<Portal containerRef={containerRef}>
				<MotionNav
					sx={styles.container}
					transition={{
						type: "spring",
						bounce: 0.1,
						damping: 17,
					}}
					layout>
					<MotionFlex sx={styles.position} layout>
						<StylesProvider value={styles}>
							<MotionFlex
								alignItems='center'
								w='100%'
								justifyContent='space-between'
								layout>
								<Navtitle>devin jackson</Navtitle>
								{hideLinks && (
									<MenuBtn
										state={isOpen ? "open" : "closed"}
										toggleOpen={setIsOpen.toggle}
									/>
								)}
							</MotionFlex>
							{((hideLinks && isOpen) || !hideLinks) && (
								<NavlinkContainer
									activeRoute={router.route}
									links={links}
									closeOnLinkClick={() => setIsOpen.off()}
								/>
							)}
						</StylesProvider>
					</MotionFlex>
				</MotionNav>
			</Portal>
		</>
	);
}
