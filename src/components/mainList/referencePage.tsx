import React, { useState, useEffect } from "react";

import { FILEPICK } from "../../../environment/environment";
import { FilePickerParam } from "sender-context";
import { ipcRenderer } from "electron";
import XMLType from "../../../types/xmlType.json";

import { OverCover } from "./overlayer/overlayer";
import { SearchCompo } from "./search/searchContainer";
import { ListTopLevelRoot } from "./listParts/TopLevel";
import { ObjectModelTopLevel } from "./objectModesl/TopLevel";

import { NoneOfResultCompo, ErrorResultCompo } from "./LoadResult";
import { RootContainer } from "./container/container";
const { Container } = RootContainer;

export type AppStatus = typeof XMLType|null|"error"|"loading";

export const ReferenceContainer = () => {
	const [xmlData, setXmlData] = useState<AppStatus>("loading");
	const getXml = async () => {
		setXmlData("loading");
		const option:FilePickerParam = {
			ext: "xml"
		};
		const result = await ipcRenderer.invoke(FILEPICK, option);
		console.log(result);
		setXmlData(result);
	};
	useEffect(() => {
		(async () => {
			await getXml();
		})();
	}, []);
	return (
		<>
			<OverCover
				isVisible={xmlData === "loading"}
			/>
			
			{
				xmlData === null || xmlData === "loading"?
					<NoneOfResultCompo 
						func={getXml}
					/>
					:
					xmlData === "error" ?
						<ErrorResultCompo />
						:
						<>
							<SearchCompo />
							<Container>
								<ListTopLevelRoot rootData={xmlData} />
								<ObjectModelTopLevel rootData={xmlData} />
							</Container>
						</>
			}
		</>
	);
};
