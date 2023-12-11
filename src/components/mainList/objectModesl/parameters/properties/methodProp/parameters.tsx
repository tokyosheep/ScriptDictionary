import React, { FC } from "react";
import styled from "styled-components";
import { ClassDes_Method_Parameters } from "xmlroot";

import { MehotParameterCompo } from "./parameter";

type ParameterProps = {
	params:ClassDes_Method_Parameters
}

const ParameterListWrapper = styled.ul`
	
`;

export const ParametersCompo:FC<ParameterProps> = ({
	params
}) => {
	const paramList = Array.isArray(params.parameter) ? params.parameter.map(param => {
		return (
			<MehotParameterCompo 
				key={param["@_name"]}
				param={param}
			/>
		);
	}) : "";
	return (
		<ParameterListWrapper>
			{paramList}
		</ParameterListWrapper>
	);
};
