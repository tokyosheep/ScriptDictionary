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