import React, { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { FallbackBackComponent } from "../../../../../commonParts/errorCompo";
import { UnknownProperty } from "../../../../../commonParts/repeatObject";
import { ClassDes_Method_Parameters_Type } from "xmlroot";

type DepthProps = {
	root: ClassDes_Method_Parameters_Type
};

export const TheDepthsParam:FC<DepthProps> = ({
	root
}) => {
	const otherLists = Object.entries(root).map(([key, value], i) => {
		// if (key === "type")return;
		return (
			<UnknownProperty 
				key={i}
				value={value}
				Objkey={key}
			/>
		);
	});
	return (
		<ErrorBoundary
			FallbackComponent={FallbackBackComponent}
		>
			{otherLists}
		</ErrorBoundary>
	);
};

/*
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
*/