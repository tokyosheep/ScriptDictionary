import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef_Property } from "xmlroot";

import { TargetTitle, CommonTitle, MarkKey } from "../../../commonParts/header";

type PropertyProp = {
	property: ClassDef_Property
};

const PropWrapper = styled.li`
	padding: 5px;
`;

export const PropertyCompo:FC<PropertyProp> = ({ property }) => {
	return (
		<PropWrapper>
			<TargetTitle
				id={property["@_name"]}
				text={property["@_name"]}
			/>
			<CommonTitle>
				<MarkKey>@_rwaccess: </MarkKey> {property["@_rwaccess"]}
			</CommonTitle>
			{
				Object.hasOwn(property, "shortdesc") ?
					<CommonTitle>
						<MarkKey>shortdesc: </MarkKey>{property.shortdesc}
					</CommonTitle>
					:
					""
			}
		</PropWrapper>
	);
};
