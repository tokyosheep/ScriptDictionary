import React, { FC } from "react";
import styled from "styled-components";

import { ClassDef_Method } from "xmlroot";
import { Linktext } from "../../../../commonParts/header";

type DataType = ClassDef_Method["datatype"];

type DataTypeProp = {
	dataType: DataType
};

const DataTypeWrapper = styled.div`
`;

export const DataTypeCompo:FC<DataTypeProp> = ({
	dataType
}) => {
	return (
		Object.hasOwn(dataType, "#text") ?
			<DataTypeWrapper>
				<Linktext 
					text={"dataType:" + dataType.type["#text"]}
					href={dataType.type["#text"]}
				/>
			</DataTypeWrapper>
			:
			""
	);
};