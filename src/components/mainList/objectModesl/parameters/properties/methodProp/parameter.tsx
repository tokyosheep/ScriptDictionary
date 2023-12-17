import React, { FC } from "react";
import styled from "styled-components";
import { ClassDes_Method_Parameter } from "xmlroot";
import { ErrorBoundary } from "react-error-boundary";

import { FallbackBackComponent } from "../../../../commonParts/errorCompo";
import { UnknownProperty } from "../../../../commonParts/repeatObject";

import { TheDepthsParam } from "./parameterType/parameterDataType";
import { TargetTitle, CommonTitle } from "../../../../commonParts/header";

type ParameterProps = {
	param: ClassDes_Method_Parameter
};

const ParameterWrapper = styled.li`
	
`;

export const MehotParameterCompo:FC<ParameterProps> = ({
	param
}) => {
	const otherLists = Object.entries(param).map(([key, value], i) => {
		if(key === "@_name" || key === "datatype")return;
		return (
			<CommonTitle key={i}>
				<UnknownProperty 
					Objkey={key}
					value={value} />
			</CommonTitle>
		);
	});
	return (
		<ErrorBoundary
			FallbackComponent={FallbackBackComponent}
		>
			<ParameterWrapper>
				<TargetTitle 
					id={param["@_name"]}
					text={param["@_name"]}
				/>
				{
					Object.hasOwn(param, "datatype") ?
						<TheDepthsParam 
							root={param.datatype}
						/>
						:
						""
				}
				{otherLists}
			</ParameterWrapper>
		</ErrorBoundary>
	);
};
