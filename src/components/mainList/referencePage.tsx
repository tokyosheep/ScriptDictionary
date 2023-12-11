import React from "react";

import { ListTopLevelRoot } from "./listParts/TopLevel";
import { ObjectModelTopLevel } from "./objectModesl/TopLevel";

import { RootContainer } from "./container/container";
const { Container } = RootContainer;

export const ReferenceContainer = () => {
	return (
		<Container>
			<ListTopLevelRoot />
			<ObjectModelTopLevel />
		</Container>
	);
};
