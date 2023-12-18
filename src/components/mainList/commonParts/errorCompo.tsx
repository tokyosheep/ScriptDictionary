import React from "react";
import styled from "styled-components";

const ErrorText = styled.span`
	display: block;
	font-size: 15px;
	color: #ca0000;
`;

const ErrorWrapper = styled.div`
	height: auto;
	padding: 10px;
`;

/**
 * ErrorBoundry receives error.
 * then it returns this component.
 * error prop tells what is causing the error.
 * @param param0 
 * @returns 
 */
export const FallbackBackComponent = ({ error }: {error: Error}) => {
	console.log(error);
	return (
		<ErrorWrapper>
			<ErrorText>
				Error: something wrong
				{error.message}	
			</ErrorText>
		</ErrorWrapper>
	);
};

