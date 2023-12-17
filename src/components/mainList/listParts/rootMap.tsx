import React, { FC } from "react";
import styled from "styled-components";
import { RootMap, BridgeRootMap } from "xmlroot";

import { HrefComponent, BridgeHrefComponent } from "./href";

type RootProp = {
	root: RootMap | BridgeRootMap
};

const RootTitle = styled.span`
	display: block;
	font-size: 13px;
`;

const RootWrapper = styled.ul`
	padding: 0;
`;

export const RootMapCompo:FC<RootProp> = ({
	root
}) => {
	const hrefList = Array.isArray(root.topicref) ? root.topicref.map((cref) => {
		return (
			<HrefComponent
				key={cref["@_navtitle"]}
				XMLprop={cref}
			/>
		);
	}) :
		<BridgeHrefComponent
			XMLProps={root.topicref.topicref}
			navTitle={root.topicref["@_navtitle"]}
		/>;
	return (
		<>
			<RootWrapper>
				{hrefList}
			</RootWrapper>
			<RootTitle>{root["@_title"]}</RootTitle>
			<RootTitle>{root["@_time"]}</RootTitle>
		</>
	);
};
