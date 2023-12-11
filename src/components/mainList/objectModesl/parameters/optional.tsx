import React, { FC } from "react";

import { ClassDef } from "xmlroot";

import { CommonTitle } from "../../commonParts/header";

type OptionalProps = {
	classDef:ClassDef
}

export const OptionalValues:FC<OptionalProps> = ({
	classDef
}) => {
	const hasDynamic = Object.hasOwn(classDef, "@_dynamic");
	const hasEnummeration = Object.hasOwn(classDef, "@_enumeration");
	const hasShortDesc = Object.hasOwn(classDef, "shortdesc");
	const hasSuperClass = Object.hasOwn(classDef, "superclass");
	return (
		<>
			{
				(
					hasDynamic ? 
						<CommonTitle>
							@_dynamic: {classDef["@_dynamic"]}
						</CommonTitle>
						:
						""
				)
			}
			{
				(
					hasEnummeration ?
						<CommonTitle>
							enumeration: {classDef["@_enumeration"]}
						</CommonTitle>
						:
						""
				)
			}
			{
				(
					hasShortDesc ?
						<CommonTitle>
							shortdesc: {classDef.shortdesc}
						</CommonTitle>
						:
						""
				)
			}
			{
				(
					hasSuperClass ?
						<CommonTitle>
							superclass: {classDef.superclass}
						</CommonTitle>
						:
						""
				)
			}
		</>
	);
};
