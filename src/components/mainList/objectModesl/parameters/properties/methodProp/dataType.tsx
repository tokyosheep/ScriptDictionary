import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef_Method } from "xmlroot";
import { /*Linktext,*/CommonTitle, MarkKey } from "../../../../commonParts/header";

type DataType = ClassDef_Method["datatype"];

type DataTypeProp = {
	dataType: DataType
};

const DataTypeWrapper = styled.div`
`;

export const DataTypeCompo:FC<DataTypeProp> = ({
	dataType
}) => {
	const valueList = typeof dataType.type === "string" ? 
		(
			<CommonTitle>
				<MarkKey>type: </MarkKey> {dataType.type}
			</CommonTitle>
		)
		: Object.entries(dataType.type).map(([key, value], i) => {
			return (
				<CommonTitle key={i}>
					<MarkKey>{key}: </MarkKey> {value}
				</CommonTitle>
			);
		});
	return (
		<DataTypeWrapper>
			{valueList}
		</DataTypeWrapper>
	);
};

/*
Object.hasOwn(dataType.type, "#text") ?
<DataTypeWrapper>
	<Linktext 
		text={"dataType:" + dataType.type["#text"]}
		href={dataType.type["#text"]}
	/>
</DataTypeWrapper>
:
""
*/