import React, { FC } from "react";
import styled from "styled-components";

import { ClassDes_Method_Parameters_Type } from "xmlroot";
import { CommonTitle, MarkKey } from "../../../../../commonParts/header";

import { DataTypeCompo } from "../dataType";

type DepthProps = {
	root: ClassDes_Method_Parameters_Type
};

const TypeWrapper = styled.div`
`;

export const TheDepthsParam:FC<DepthProps> = ({
	root
}) => {
	const otherLists = Object.entries(root).map(([key, value], i) => {
		if (key ==="type" || typeof value !== "string")return;
		return (
			<CommonTitle key={i}>
				<MarkKey>{key}: </MarkKey> {value}
			</CommonTitle>
		);
	});
	return (
		<>
			{
				typeof root["type"] === "string" ?
				
					<TypeWrapper>
						<CommonTitle>
							<MarkKey>type: </MarkKey> {root["type"]}
						</CommonTitle>
					</TypeWrapper>
					:
					<DataTypeCompo
						dataType={{
							type: {
								"#text": root.type["#text"],
								"@_href": root.type["@_href"]
							}}}
					/>
			}
			{otherLists}
		</>
	);
};

/*
<CommonTitle>
	{ 
		Object.hasOwn(root, "value") ? "value: " + root["value"] : ""
	}
</CommonTitle>
*/
