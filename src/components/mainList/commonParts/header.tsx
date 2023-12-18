import React, { FC, useEffect } from "react";
import styled from "styled-components";

export const HrefTitle = styled.h3`
	font-size: 15px;
`;

export const TargetWrapper = styled.h3`
	font-size: 15px;
`;

type TargetProps = {
	id: string,
	text: string
};

/**
 * target title must have id.
 * because it must be able to jump from topics list left side on UI.
 * @param param0 
 * @returns 
 */
export const TargetTitle:FC<TargetProps> = ({
	id,
	text
}) => {
	return (
		<TargetWrapper
			id={id}
		>
			{text}
		</TargetWrapper>
	);
};

export const CommonTitle = styled.span`
	font-size: 12px;
	display: block;
	margin-block: 5px;
`;

export const MarkKey = styled.span`
	color: #c3e3df;
`;

export const HrefText = styled.span`
	font-size: 13px;
`;

const LinkWrapper = styled.a`
    color: #b7e8ff;
    cursor:pointer;
    &:visited {
        color: #b7e8ff;
    }
`;

type LinkProps = {
	href: string,
	text: string
}

/**
 * topics link has link href attribute.
 * it can jump to each property list on right side.
 * @param param0 
 * @returns 
 */
export const Linktext:FC<LinkProps> = ({
	href, text
}) => {
	let id;
	useEffect(() => {
		id = document.getElementById(href);
	}, []);
	return (
		<LinkWrapper
			onClick={() => {
				console.log(href);
				id.scrollIntoView();
			}}
		>
			{text}
		</LinkWrapper>
	);
};