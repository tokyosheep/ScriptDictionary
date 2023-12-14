import React from "react";
import styled from "styled-components";
import { ButtonProps } from "form-parts";

const StdButtonBox = styled.button`
	
`;

export const StdButton = <T extends (arg:string)=>void,>({
	arg,
	name,
	func
}:ButtonProps<T>) => {
	return (
		<StdButtonBox
			onClick={() => func(arg)}
		>
			{name}
		</StdButtonBox>
	);
};
