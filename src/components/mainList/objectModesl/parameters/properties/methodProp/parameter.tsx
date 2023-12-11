import React, { FC } from "react";
import styled from "styled-components";
import { ClassDes_Method_Parameter } from "xmlroot";

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
	return (
		<ParameterWrapper>
			<TargetTitle 
				id={param["@_name"]}
				text={param["@_name"]}
			/>
			<CommonTitle>
				{Object.hasOwn(param, "shortdesc") ? "shortdesc: " + param["shortdesc"] : ""}
			</CommonTitle>
			{
				Object.hasOwn(param, "@_optional") ?
					<CommonTitle>
						{"optional: " + param["@_optional"]}
					</CommonTitle>
					:
					""
			}
			{
				Object.hasOwn(param, "datatype") ?
					<TheDepthsParam 
						root={param.datatype}
					/>
					:
					""
			}
		</ParameterWrapper>
	);
};
