import { Global } from "@emotion/react";
import React from "react";

export function Fonts() {
	return (
		<Global
			styles={`
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
      `}
		/>
	);
}
