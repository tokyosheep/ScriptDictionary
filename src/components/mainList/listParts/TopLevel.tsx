import React from "react";
import SampleJSON  from "../../../../ll.json";

import { RootMapCompo } from "./rootMap";
import { RootContainer } from "../container/container";

const { ListContainer } = RootContainer;

export const ListTopLevelRoot = () => {
	return (
		<ListContainer>
			<RootMapCompo 
				root={SampleJSON.dictionary.map}
			/>
		</ListContainer>
	);
};
