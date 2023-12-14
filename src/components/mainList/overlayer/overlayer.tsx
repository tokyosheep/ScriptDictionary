import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { FilePickerParam } from "sender-context";
import { ipcRenderer } from "electron";

const OverLayer = styled.div<{isVisible: boolean}>`
	width: 100%;
	height: 100%;
	background: rgba(0,0,0, 0.4);
	z-index: 30;
	position: fixed;
	top: 0;
	left: 0;
	display: ${props => props.isVisible ? "display": "none"};
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

export const OverCover = () => {
	const [isVisible, serVisible] = useState<boolean>(false);
	useEffect(() => {
		(async () => {
			const option:FilePickerParam = {
				ext: "xml"
			};
			const result = await ipcRenderer.invoke(FILEPICK, option);
			console.log(result);
		})();
	}, []);
	return (
		<OverLayer
			isVisible={isVisible}
		>
			<LoadingTitle>
				Loading...
			</LoadingTitle>
		</OverLayer>
	);
};