import React, { FC } from "react";
import styled from "styled-components";

import SampleJSON  from "../../../../ll.json";
import { RootContainer } from "../container/container";
const { ObjectModelContainer } = RootContainer;

import { ClassDefCompo } from "./parameters/classDef";

const ListWrapper = styled.li`
`;

export const ObjectModelTopLevel:FC<{rootData: typeof SampleJSON}> = ({
	rootData
}) => {
	const classList = rootData.dictionary.package.classdef.map((classDef) => {
		return (
			<ListWrapper
				key={classDef["@_name"]}
			>
				<ClassDefCompo 
					classDef={classDef}
				/>
			</ListWrapper>
		);
	});
	return (
		<ObjectModelContainer>
			<ul>
				{classList}
			</ul>
		</ObjectModelContainer>
	);
};

