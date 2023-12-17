import React, { FC } from "react";
import styled from "styled-components";
import { Topicref, BridgeTopicref } from "xmlroot";

import { HrefTitle, Linktext } from "../commonParts/header";

// import { BsBoundingBoxCircles } from "react-icons/bs";

const HrefWrapper = styled.li`

`;

const ListWrapper = styled.ul`
	font-size: 11px;
`;

type TopicrefProps = {
	XMLprop:Topicref
}

export const HrefComponent:FC<TopicrefProps> = ({ XMLprop }) => {
	let topicrefComp;
	if (Object.hasOwn(XMLprop, "topicref") && Array.isArray(XMLprop.topicref)) {
		topicrefComp = XMLprop.topicref.map(propList => {
			return (
				<HrefWrapper key={propList["@_navtitle"]}>
					<Linktext 
						text={propList["@_navtitle"]}
						href={propList["@_navtitle"]}
					/>
				</HrefWrapper>
			);
		});
	}
	if (topicrefComp === undefined && Object.hasOwn(XMLprop, "topicref") && !Array.isArray(XMLprop.topicref)) {
		topicrefComp = (
			<HrefWrapper>
				<Linktext 
					text={XMLprop.topicref["@_navtitle"]}
					href={XMLprop.topicref["@_navtitle"]}
				/>
			</HrefWrapper>
		);
	}
	return (
		<ListWrapper>
			<HrefTitle>{XMLprop["@_navtitle"]}</HrefTitle>
			{topicrefComp}
		</ListWrapper>
	);
};

export const BridgeHrefComponent:FC<{XMLProps: BridgeTopicref, navTitle:string}> = ({ 
	XMLProps,
	navTitle
}) => {
	const topicrefComp = XMLProps.map((propList) => {
		return (
			<HrefWrapper key={propList["@_navtitle"]}>
				<Linktext 
					text={propList["@_navtitle"]}
					href={propList["@_navtitle"]}
				/>
			</HrefWrapper>
		);
	});
	return (
		<ListWrapper>
			<HrefTitle>{navTitle}</HrefTitle>
			{topicrefComp}
		</ListWrapper>
	);
};