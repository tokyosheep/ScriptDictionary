const { XMLParser } = require("fast-xml-parser");
const path = require("path");
const fs = require("fs");

(async () => {
	const xml = await fs.promises.readFile("/Library/Application Support/Adobe/Scripting Dictionaries CC/CommonFiles/javascript.xml", "utf-8");
	const options = {
		ignoreAttributes : false
	};
	const parser = new XMLParser(options);
	const json = parser.parse(xml);
	console.log(json);
	await fs.promises.writeFile(path.join(__dirname, "JavaScript.json"), JSON.stringify(json));
})();