import styled from "styled-components";

export const RootContainer = {
	Container:styled.div`
		position: relative;
		z-index: 1;
		display: grid;
		margin-top: 50px;
		grid-template-rows: calc(100vh - 50pt);
		grid-template-columns: 300px 1fr;
		grid-template-areas:
			"list objectmodel"
		;
	`,
	SearchContainer: styled.aside`
		padding: 5px;
		box-sizing: border-box;	
		border-bottom: 1px solid #aaa;
		width: 100vw;
		height: 50px;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 10;
	`,
	ListContainer: styled.div`
		grid-area: list;
		box-sizing: border-box;
		overflow: scroll;
		padding-top: 20px;
	`,
	ObjectModelContainer: styled.div`
		grid-area: objectmodel;
		padding: 10px;
		box-sizing: border-box;
		overflow: scroll;
		padding-top: 20px;
	`
};
