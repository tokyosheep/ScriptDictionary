import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef_Method } from "xmlroot";

import { DataTypeCompo } from "./methodProp/dataType";
import { ParametersCompo } from "./methodProp/parameters";
import { TargetTitle, CommonTitle } from "../../../commonParts/header";

type MethodProps = {
	methodClass: ClassDef_Method
};

const MethodWrapper = styled.li`

`;

export const MethodCompo:FC<MethodProps> = ({
	methodClass
}) => {
	return (
		<MethodWrapper>
			<TargetTitle
				id={methodClass["@_name"]}
				text={methodClass["@_name"]}
			/>
			<CommonTitle>{methodClass.shortdesc}</CommonTitle>

			{
				Object.hasOwn(methodClass, "datatype") 
					? <DataTypeCompo 
						dataType={methodClass.datatype}
					/>
					:
					""
			}
			{
				Object.hasOwn(methodClass, "parameters")
					?
					<ParametersCompo 
						params={methodClass.parameters}
					/>
					:
					""
			}
		</MethodWrapper>
	);
};
