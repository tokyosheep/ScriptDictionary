import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef_Property } from "xmlroot";

import { UnknownProperty } from "../../../commonParts/repeatObject";
import { TargetTitle } from "../../../commonParts/header";

type PropertyProp = {
	property: ClassDef_Property
};

const PropWrapper = styled.li`
	padding: 5px;
`;

export const PropertyCompo:FC<PropertyProp> = ({ property }) => {
	const otherProps = Object.entries(property).map(([key, value], i) => {
		if (key === "@_name") return;
		// other than name, inspect all of properties in any depth
		return (
			<UnknownProperty
				Objkey={key}
				key={i}
				value={value}
			/>
		);
	});
	return (
		<PropWrapper>
			<TargetTitle
				id={property["@_name"]}
				text={property["@_name"]}
			/>
			{
				otherProps
			}
		</PropWrapper>
	);
};
