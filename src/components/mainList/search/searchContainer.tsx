import React, { useState } from "react";
import styled from "styled-components";

import { SEARCHTYPE } from "../../../../environment/environment";
import { SearchParam } from "sender-context";
import { ipcRenderer } from "electron";

import { StdButton } from "../commonParts/button";
import { StdTextBox } from "../commonParts/textbox";

import { RootContainer } from "../container/container";
const { SearchContainer } = RootContainer;

const FormWrapper = styled.div`
	height: 100%;
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	align-items: center;	
`;

/**
 * searching component.
 * @returns 
 */
export const SearchCompo = () => {
	const [searchValue, setSearch] = useState<string>("");
	const handleTextBox = (e:React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};
	/**
	 * this function sends message to main process.
	 * because search method only works on main process.
	 * @param {string} v search word. 
	 */
	const searchOnUI = async (v) => {
		const option:SearchParam = {value: v};
		const result = await ipcRenderer.invoke(SEARCHTYPE, option);
		console.log(result);
	};
	return (
		<SearchContainer>
			<FormWrapper>
				<StdTextBox 
					name="search"
					func={handleTextBox}
					value={searchValue}
					placeholder="item"
				/>
				<StdButton
					name="search"
					arg={searchValue}
					func={searchOnUI}
				/>
			</FormWrapper>
		</SearchContainer>
	);
};
