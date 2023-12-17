import React, { FC } from "react";
import SampleJSON  from "../../../../types/xmlType.json";

import { RootMapCompo } from "./rootMap";
import { RootContainer } from "../container/container";

const { ListContainer } = RootContainer;

export const ListTopLevelRoot:FC<{rootData: typeof SampleJSON}> = ({
	rootData
}) => {
	return (
		<ListContainer>
			<RootMapCompo 
				root={rootData.dictionary.map}
			/>
		</ListContainer>
	);
};
