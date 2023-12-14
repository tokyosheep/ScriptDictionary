import React from "react";
import styled from "styled-components";

const ErrorText = styled.span`
	display: block;
	font-size: 15px;
	color: #ca0000;
`;

const ErrorWrapper = styled.div`
	height: 20px;
`;

export const FallbackBackComponent = ({ error }) => {
	console.log(error);
	return (
		<ErrorWrapper>
			<ErrorText>Error: something wronf</ErrorText>
		</ErrorWrapper>
	);
};

