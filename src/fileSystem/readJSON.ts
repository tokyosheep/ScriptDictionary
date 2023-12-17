import { XmlRoot } from "xmlroot";
import SampleJSON  from "../../ll.json";

export const resolveJson = () => {
	const hrefs = SampleJSON.dictionary.map.topicref.map(data => {
		const list = data?.topicref;
		if (!list) return data;
		if (Array.isArray(list)) {
			return list.map(l => l["@_href"]);
		}
		return data;
	});
	console.log(hrefs);
};