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
/**
 * third hierarchy on topicref list.
 * topicref property has navigating title.
 * each title can be linked to property list.
 * @param param0 
 * @returns 
 */
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

/**
 * as I said Bridge has different construction.
 * @param param0 
 * @returns 
 */
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