import React, { FC } from "react";
import styled from "styled-components";
import { RootMap } from "xmlroot";

import { HrefComponent } from "./href";

type RootProp = {
	root: RootMap
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
	const hrefList = root.topicref.map((cref) => {
		return (
			<HrefComponent
				key={cref["@_navtitle"]}
				XMLprop={cref}
			/>
		);
	});
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
