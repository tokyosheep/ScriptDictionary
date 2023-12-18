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

/**
 * sencond hierarchy on topicref list.
 * @param param0 
 * @returns 
 */
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
	/* Bridge has different construction. so it branches bridge and others. I don't know why. */
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
