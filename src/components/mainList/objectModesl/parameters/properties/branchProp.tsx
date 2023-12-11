import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef } from "xmlroot";

import { HrefTitle } from "../../../commonParts/header";

import { MethodCompo } from "./method";
import { PropertyCompo } from "./property";

type BranchProps = {
	param: ClassDef["elements"]
}

const PropWrapper = styled.div`
`;

const ListWrapper = styled.ul`
`;

export const PropsBranchCompo:FC<BranchProps> = ({
	param
}) => {
	const hasMethod = Object.hasOwn(param, "method");
	const hasProp = Object.hasOwn(param, "property");
	const methodList = hasMethod && Array.isArray(param["method"]) ? param["method"].map(method => {
		return (
			<MethodCompo 
				key={method["@_name"]}
				methodClass={method}
			/>
		);
	}) : "";

	const PropsList = hasProp && Array.isArray(param["property"]) ? param["property"].map(property => {
		return (
			<PropertyCompo 
				key={property["PropertyCompo"]}
				property={property}
			/>
		);
	}) : "";
	return (
		<PropWrapper>
			<HrefTitle>methods</HrefTitle>
			<ListWrapper>
				{methodList}
			</ListWrapper>
			<HrefTitle>properties</HrefTitle>
			<ListWrapper>
				{PropsList}
			</ListWrapper>
		</PropWrapper>
	);
};
