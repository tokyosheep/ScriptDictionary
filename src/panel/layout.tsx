import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { FallbackBackComponent } from "../components/mainList/commonParts/errorCompo";
import { GlobalStyle } from "../styles/global";
import { ReferenceContainer } from "../components/mainList/referencePage";

export const Layout = () => {
	return (
		<>
			<GlobalStyle bg="#333" />
			<ErrorBoundary
				FallbackComponent={FallbackBackComponent}
			>
				<ReferenceContainer />
			</ErrorBoundary>
		</>
	);
};
