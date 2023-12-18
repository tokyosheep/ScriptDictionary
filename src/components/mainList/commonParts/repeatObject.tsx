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

// basically Object or Array or String.
type PossiblyType = object|Array<PossiblyType>|string|number|null|undefined;
type PossiblyArray = PossiblyType[];

/**
 * in case of Array
 * @param {array:PossiblyArray, Objkey:string} param0 
 * @returns 
 */
const ArrayRepeat:FC<{array:PossiblyArray, Objkey:string}> = ({
	array,
	Objkey
}) => {
	const arrayList = array.map((value, i) => {
		return (
			Array.isArray(value) ?
				<li key={i}>
					<ArrayRepeat 
						Objkey=""
						array={value}
					/>
				</li>
				:
				typeof value === TYPEOFOBJ && value.constructor.name === CONSTRUCTOBJ ?
					<li key={i}>
						<RepeatBlock
							Objkey=""
							object={value}
						/>
					</li>
					:
					<li key={i}>
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

/**
 * in case of Object.
 * inspect keys and value in object.
 * @param { object: PossiblyType, Objkey: string }param0 
 * @returns 
 */
const RepeatBlock:FC<{
	object: PossiblyType,
	Objkey: string
}> = ({
	object,
	Objkey
}) => {
	const objList = Object.entries(object).map(([key, value], i) => {
		return (
			Array.isArray(value) ?
				<ArrayRepeat 
					key={i}
					Objkey={key}
					array={value}
				/>
				:
				typeof value === TYPEOFOBJ && value.constructor.name === CONSTRUCTOBJ ?
					<RepeatBlock 
						key={i}
						Objkey={key}
						object={value}
					/>
					:
					<CommonTitle
						key={i}
					>
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

/**
 * recursively inspect objects.
 * untill it reaches string value
 * @param param0 
 * @returns 
 */
export const UnknownProperty:FC<{
	value: PossiblyType,
	Objkey: string
}> = ({
	value,
	Objkey
}) => {
	/**
	 * Array.isArray(value)
	 * ..... in case of Array object
	 * 
	 * typeof value === TYPEOFOBJ && value.constructor.name === CONSTRUCTOBJ
	 * ....... in case of Object.
	 * 
	 * else ......
	 * in case of string value.
	 */
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