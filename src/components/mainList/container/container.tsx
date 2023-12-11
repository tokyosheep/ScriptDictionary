import styled from "styled-components";

export const RootContainer = {
	Container:styled.div`
		display: grid;
		grid-template-rows: 100vh;
		grid-template-columns: 300px 1fr;
		grid-template-areas:
			"list objectmodel"
		;
	`,
	ListContainer: styled.div`
		grid-area: list;
		box-sizing: border-box;
		overflow: scroll;
	`,
	ObjectModelContainer: styled.div`
		grid-area: objectmodel;
		padding: 10px;
		box-sizing: border-box;
		overflow: scroll;
	`
};
