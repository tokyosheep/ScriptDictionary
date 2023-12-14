import React from "react";
import styled from "styled-components";

import { TextBoxProps } from "form-parts";

const StdTextBoxInput = styled.input`

`;

export const StdTextBox = <T extends never,>({
	name,
	placeholder,
	func,
	value
}:TextBoxProps<T>) => {
	return (
		<>
			<StdTextBoxInput
				type="text"
				value={value}
				placeholder={placeholder}
				onChange={(e) => {
					func(e);
				}}
			/>	{name}
		</>
	);
};
