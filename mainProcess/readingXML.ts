import { dialog } from "electron";
import fs from "fs";
import { XMLParser } from "fast-xml-parser";
import { AppStatus } from "../src/components/mainList/referencePage";

export const pickFile = async (files:string[]):Promise<AppStatus> => {
	try {
		const file = await dialog.showOpenDialog({
			title: "select file",
			filters:[
				{ name: "file", extensions: files}
			],
			properties: ["openFile"]
		});
		if (file.canceled) return null;
		const xml = await fs.promises.readFile(file.filePaths[0], "utf-8");
		const options = {
			ignoreAttributes : false
		};
		const parser = new XMLParser(options);
		const json = parser.parse(xml);
		return json;
	} catch (e) {
		return "error";
	}
};
