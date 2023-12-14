import React, { FC } from "react";

import { ClassDef } from "xmlroot";

import { CommonTitle, MarkKey } from "../../commonParts/header";

type OptionalProps = {
	classDef:ClassDef
}

export const OptionalValues:FC<OptionalProps> = ({
	classDef
}) => {
	const valueLists = Object.entries(classDef).map(([key, value], i) =>{
		if (typeof value !== "string"|| key === "@_name") return;
		return (
			<CommonTitle key={i}>
				<MarkKey>{key}: </MarkKey> {value}
			</CommonTitle>
		);
	});
	return (
		<div>
			{valueLists}
		</div>
	);
};
