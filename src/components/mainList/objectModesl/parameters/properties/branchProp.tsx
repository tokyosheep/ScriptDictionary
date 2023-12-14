import React, { FC } from "react";
import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";

import { FallbackBackComponent } from "../../../commonParts/errorCompo";
import { ClassDef, ClassDes_Method_Parameter, ClassDef_Property } from "xmlroot";

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

	const propsList = hasProp && Array.isArray(param["property"]) ? param["property"].map(property => {
		return (
			<PropertyCompo 
				key={property["PropertyCompo"]}
				property={property}
			/>
		);
	}) : "";
	return (
		<PropWrapper>
			{
				methodList.length >= 1 ?
					<>
						<HrefTitle>methods</HrefTitle>
						<ListWrapper>
							{methodList}
						</ListWrapper>
					</>
					:
					""
			}
			{
				propsList.length >= 1 ?
					<>
						<HrefTitle>properties</HrefTitle>
						<ListWrapper>
							{propsList}
						</ListWrapper>
					</>
					:
					""
			}
		</PropWrapper>
	);
};

type ArrayPropAndMethod = ClassDes_Method_Parameter | ClassDef_Property;
type ArrayProps = {
	params: ArrayPropAndMethod[]
}
export const ArrayBranchPropAndMethod:FC<ArrayProps> = ({
	params
}) => {
	const methodsAndPropsList = params.map((prop, i) => {
		return (
			<li key={i}>
				<PropsBranchCompo
					param={prop}
				/>
			</li>
		);
	});
	return (
		<ListWrapper>
			{methodsAndPropsList}
		</ListWrapper>
	);
};
