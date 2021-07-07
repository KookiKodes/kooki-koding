//* packages
import {useStyles} from "@chakra-ui/react"

//* components
import {MotionInputLeftIcon, MotionInputRightIcon} from "@components/framer";
import {SVGWrapper} from "@components/utilities/svg-wrapper"

//* interfaces
import {IconInputProps as Props} from "@interfaces/form/FlushIconInput";


export function InputIcon({dir, Icon}: Props) {
    const styles = useStyles();
     
    return (
        <>
            {dir === "left" && (
                <MotionInputLeftIcon __css={styles["icon-left"]}>
                    <SVGWrapper SVG={Icon} styles={styles.icon} />
                </MotionInputLeftIcon>
                )
            }
            {dir !== "left" && (
                <MotionInputRightIcon __css={styles["icon-right"]}>
                    <SVGWrapper SVG={Icon} styles={styles.icon} />
                </MotionInputRightIcon>
                )
            }
        </>
    )
}
