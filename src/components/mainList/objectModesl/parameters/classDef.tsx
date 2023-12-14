import React, { FC } from "react";
import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";

import { FallbackBackComponent } from "../../commonParts/errorCompo";
import { ClassDef } from "xmlroot";

import { PropsBranchCompo, ArrayBranchPropAndMethod } from "./properties/branchProp";
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
		<ErrorBoundary
			FallbackComponent={FallbackBackComponent}
		>
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
				{
					Array.isArray(classDef.elements) ? 
						<ArrayBranchPropAndMethod params={classDef.elements} />
						: 
						""
				}
			</ClassDefWrapper>
		</ErrorBoundary>
	);
};
