import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef } from "xmlroot";

import { PropsBranchCompo } from "./properties/branchProp";
import { OptionalValues } from "./optional";
import { TargetTitle } from "../../commonParts/header";

const ClassDefWrapper = styled.div`

`;

type ClassDefProps = {
	classDef:ClassDef
};

export const ClassDefCompo:FC<ClassDefProps> = ({
	classDef
}) => {
	return (
		<ClassDefWrapper>
			<TargetTitle 
				id={classDef["@_name"]}
				text={classDef["@_name"]}
			/>
			<OptionalValues 
				classDef={classDef}
			/>
			<PropsBranchCompo 
				param={classDef.elements}
			/>
		</ClassDefWrapper>
	);
};
