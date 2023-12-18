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

/**
 * sencond hierarchy on Object list.
 * each XML has their own name, elements, and some other properties.
 * generally elements has list of Object list.
 * but in some case it can be slightly different.
 * @param param0 
 * @returns 
 */
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
				{/*other string values. it passes class Object just in case.*/}
				<OptionalValues 
					classDef={classDef}
					excludeKeys={["@_name", "elements"]}
				/>
				{
					/* if elements property has property and method directly. */
					Object.hasOwn(classDef, "elements") && !Array.isArray(classDef.elements) ?
						<PropsBranchCompo 
							param={classDef.elements}
						/>
						:
						""
				}
				{
					/*in case of array Object */
					Array.isArray(classDef.elements) ? 
						<ArrayBranchPropAndMethod params={classDef.elements} />
						: 
						""
				}
			</ClassDefWrapper>
		</ErrorBoundary>
	);
};
