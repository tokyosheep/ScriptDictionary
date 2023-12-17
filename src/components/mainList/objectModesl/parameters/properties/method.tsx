import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef_Method } from "xmlroot";
import { UnknownProperty } from "../../../commonParts/repeatObject";

import { ParametersCompo } from "./methodProp/parameters";
import { TargetTitle } from "../../../commonParts/header";

type MethodProps = {
	methodClass: ClassDef_Method
};

const MethodWrapper = styled.li`

`;

export const MethodCompo:FC<MethodProps> = ({
	methodClass
}) => {
	const otherProps = Object.entries(methodClass).map(([key, value], i) => {
		if (key === ("@_name" || "parameters")) return;
		return (
			<UnknownProperty
				Objkey={key}
				key={i}
				value={value}
			/>
		);
	});
	return (
		<MethodWrapper>
			<TargetTitle
				id={methodClass["@_name"]}
				text={methodClass["@_name"]}
			/>
			{
				Object.hasOwn(methodClass, "parameters")
					?
					<ParametersCompo 
						params={methodClass.parameters}
					/>
					:
					""
			}
			{otherProps}
		</MethodWrapper>
	);
};
/*
<CommonTitle><MarkKey>shortdesc: </MarkKey>{methodClass.shortdesc}</CommonTitle>
{
	Object.hasOwn(methodClass, "datatype") 
		? <DataTypeCompo 
			dataType={methodClass.datatype}
		/>
		:
		""
}
*/