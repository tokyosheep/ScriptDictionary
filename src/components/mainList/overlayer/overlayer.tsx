import React, { FC } from "react";
import styled from "styled-components";

/**
 * isvisible must be string type
 */
const OverLayer = styled.div<{isvisible: string}>`
	width: 100%;
	height: 100%;
	background: rgba(0,0,0, 0.4);
	z-index: 30;
	position: fixed;
	top: 0;
	left: 0;
	display: ${props => props.isvisible === "true" ? "display": "none"};
`;

const LoadingTitle = styled.span`
	color: #fff;
	display: block;
	position: absolute;
	font-size: 15px;
	top: 30%;
	left: 50%;
	transform: translateX(-50%);
`;

/**
 * loading over layer
 * @param {boolean} param0 
 * @returns 
 */
export const OverCover:FC<{
		isVisible: boolean
}> = ({
	isVisible
}) => {
	return (
		<OverLayer
			isvisible={isVisible.toString()}
		>
			<LoadingTitle>
				Loading...
			</LoadingTitle>
		</OverLayer>
	);
};