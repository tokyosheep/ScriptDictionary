import React, { FC } from "react";
import styled from "styled-components";

import { UnknownProperty } from "../../../commonParts/repeatObject";
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

/**
 * third hierarchy on Object list.
 * as you know ExtendScript has its own Object Model.
 * each Object has methods and properties.
 * XML list indicates them in this list. 
 */
export const PropsBranchCompo:FC<BranchProps> = ({
	param
}) => {
	// if the param has method property.
	const hasMethod = Object.hasOwn(param, "method");
	// if the param has property(ExtendScript) property.
	const hasProp = Object.hasOwn(param, "property");
	const methodList = hasMethod && Array.isArray(param["method"]) ? param["method"].map((method, i) => {
		return (
			<MethodCompo 
				key={i}
				methodClass={method}
			/>
		);
	}) : "";

	const propsList = hasProp && Array.isArray(param["property"]) ? param["property"].map((property, i) => {
		return (
			<PropertyCompo 
				key={i}
				property={property}
			/>
		);
	}) : "";
	const otherProps = Object.entries(param).map(([key, value], i) => {
		if (hasProp && propsList !== "") return;
		if (hasMethod && methodList !== "") return;
		// they can have unique object. this recieves it just in case.
		return (
			<UnknownProperty
				key={i}
				Objkey={key}
				value={value}
			/>
		);
	});
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
			{
				otherProps
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
