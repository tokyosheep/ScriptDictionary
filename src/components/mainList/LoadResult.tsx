import React from "react";
import styled from "styled-components";

const Container = styled.div`
	display: grid;
	place-items: center;
	padding: 10px;
	width: 100vw;
	height: 100vh;
	box-sizing: border-box;
`;

const ResultText = styled.span`
	display: block;
	font-size: 16px;
	color: #999;
`;

const ErrorText = styled(ResultText)`
	color: #ca0000;
`;

export const ErrorResultCompo = () => {
	return (
		<Container>
			<ErrorText>
				Error something went wrong
			</ErrorText>
		</Container>
	);
};

const LoadButton = styled.button`

`;

export const NoneOfResultCompo = <F extends () =>Promise<unknown> ,>({
	func
}:{func:F}) => {
	return (
		<Container>
			<ResultText>
				None
			</ResultText>
			<LoadButton 
				onClick={() => {
					func();
				}}
			>
			load xml
			</LoadButton>
		</Container>
	);
};



