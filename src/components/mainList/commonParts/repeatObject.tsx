import React, { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import styled from "styled-components";

import { FallbackBackComponent } from "./errorCompo";
import { CommonTitle, MarkKey } from "./header";

const CONSTRUCTOBJ = "Object";
const TYPEOFOBJ = "object";

const RepeatWrapper = styled.div`
	padding: 5px;
	border: 1px solid #707d72;
	margin-bottom: 5px;
`;

const ObjectWrapper = styled.div`
	padding: 5px;
	border: 1px solid #999;
	margin-bottom: 5px;
`;

const ArrayWrapper = styled.ul`
	$ > li {
		margin-bottom: 5px;
	}
`;

type PossiblyType = object|Array<PossiblyType>|string|number|null|undefined;
type PossiblyArray = PossiblyType[];

const ArrayRepeat:FC<{array:PossiblyArray, Objkey:string}> = ({
	array,
	Objkey
}) => {
	const arrayList = array.map(value => {
		return (
			Array.isArray(value) ?
				<li>
					<ArrayRepeat 
						Objkey=""
						array={value}
					/>
				</li>
				:
				typeof value === TYPEOFOBJ && value.constructor.name === CONSTRUCTOBJ ?
					<li>
						<RepeatBlock
							Objkey=""
							object={value}
						/>
					</li>
					:
					<li>
						<CommonTitle>
							{value?.toString() ?? "none"}
						</CommonTitle>
					</li>
		);
	});
	return (
		<>
			<CommonTitle>
				<MarkKey>{Objkey} :</MarkKey>
			</CommonTitle>
			<ArrayWrapper>
				{arrayList}
			</ArrayWrapper>
		</>
	);
};

const RepeatBlock:FC<{
	object: PossiblyType,
	Objkey: string
}> = ({
	object,
	Objkey
}) => {
	const objList = Object.entries(object).map(([key, value]) => {
		return (
			Array.isArray(value) ?
				<ArrayRepeat 
					Objkey={key}
					array={value}
				/>
				:
				typeof value === TYPEOFOBJ && value.constructor.name === CONSTRUCTOBJ ?
					<RepeatBlock 
						Objkey={key}
						object={value}
					/>
					:
					<CommonTitle>
						<MarkKey>{key} :</MarkKey>{value}
					</CommonTitle>
		);
	});
	return (
		<ObjectWrapper>
			<CommonTitle>
				<MarkKey>{Objkey}</MarkKey>
			</CommonTitle>
			{objList}
		</ObjectWrapper>
	);
};

export const UnknownProperty:FC<{
	value: PossiblyType,
	Objkey: string
}> = ({
	value,
	Objkey
}) => {
	const anyType = Array.isArray(value) ?
		<ArrayRepeat 
			Objkey={Objkey}
			array={value}
		/>
		:
		typeof value === TYPEOFOBJ && value.constructor.name === CONSTRUCTOBJ ?
			<RepeatBlock
				Objkey={Objkey}
				object={value}
			/>
			:
			<CommonTitle>
				<MarkKey>{Objkey}</MarkKey>
				{
					":  " + value?.toString() ?? "none"
				}
			</CommonTitle>;
	return (
		<ErrorBoundary
			FallbackComponent={FallbackBackComponent}
		>
			<RepeatWrapper>
				{anyType}
			</RepeatWrapper>
		</ErrorBoundary>
	);
};