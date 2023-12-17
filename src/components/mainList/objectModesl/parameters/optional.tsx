import React, { FC } from "react";

import { ClassDef } from "xmlroot";

import { UnknownProperty } from "../../commonParts/repeatObject";

type OptionalProps = {
	classDef:ClassDef,
	excludeKeys: string[]
}

export const OptionalValues:FC<OptionalProps> = ({
	classDef,
	excludeKeys
}) => {
	const valueLists = Object.entries(classDef).map(([key, value], i) =>{
		if (excludeKeys.some(ek => ek === key)) return;
		return (
			<UnknownProperty
				key={i}
				Objkey={key}
				value={value}
			/>
		);
	});
	return (
		<div>
			{valueLists}
		</div>
	);
};
