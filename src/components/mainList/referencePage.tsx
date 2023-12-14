import React from "react";

import { OverCover } from "./overlayer/overlayer";
import { SearchCompo } from "./search/searchContainer";
import { ListTopLevelRoot } from "./listParts/TopLevel";
import { ObjectModelTopLevel } from "./objectModesl/TopLevel";

import { RootContainer } from "./container/container";
const { Container } = RootContainer;

export const ReferenceContainer = () => {
	return (
		<>
			<OverCover />
			<SearchCompo />
			<Container>
				<ListTopLevelRoot />
				<ObjectModelTopLevel />
			</Container>
		</>
	);
};
