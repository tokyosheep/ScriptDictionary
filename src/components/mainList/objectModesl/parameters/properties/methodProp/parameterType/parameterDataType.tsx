import React, { FC } from "react";
import styled from "styled-components";

import { ClassDes_Method_Parameters_Type } from "xmlroot";
import { CommonTitle } from "../../../../../commonParts/header";

import { DataTypeCompo } from "../dataType";

type DepthProps = {
	root: ClassDes_Method_Parameters_Type
};

const TypeWrapper = styled.div`
`;

export const TheDepthsParam:FC<DepthProps> = ({
	root
}) => {

	return (
		<>
			{
				typeof root["type"] === "string" ?
				
					<TypeWrapper>
						<CommonTitle>
							type: {root["type"]}
						</CommonTitle>
						<CommonTitle>
							{ 
								Object.hasOwn(root, "value") ? "value: " + root["value"] : ""
							}
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
		</>
	);
};
