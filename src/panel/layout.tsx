import React from "react";

import { GlobalStyle } from "../styles/global";
import { ReferenceContainer } from "../components/mainList/referencePage";

export const Layout = () => {
	return (
		<>
			<GlobalStyle bg="#333" />
			<ReferenceContainer />
		</>
	);
};
