import JSONSample from "./xmlType.json";
import BridheSampleJSON from "./bridgeXMLType.json";

export type BridgeRoot = typeof BridheSampleJSON;
export type BridgeRootMap = typeof BridheSampleJSON["dictionary"]["map"];
export type BridgeTopicref = typeof BridheSampleJSON["dictionary"]["map"]["topicref"]["topicref"];

export type JSONRoot = typeof JSONSample;
export type RootMap = typeof JSONSample["dictionary"]["map"];
export type Topicref = typeof JSONSample["dictionary"]["map"]["topicref"][number];

export type ClassDef = typeof JSONSample["dictionary"]["package"]["classdef"][number];
export type ClassDef_Elements= ClassDef["elements"];

export type ClassDef_Property = {
	shortdesc?: string;
    datatype: {
        type: string;
        value: number;
    };
    "@_name": string;
    "@_rwaccess": string;
};

export type ClassDes_Method_Parameters_Type = {
	"type": "bool",
	"value": unknown
}|{
	"type":{
		"#text": string,
		"@_href": string
	}
}

export type ClassDes_Method_Parameter = {
	"shortdesc": string,
	"datatype"?: ClassDes_Method_Parameters_Type,
	"@_name": string,
	"@_optional"?: string
};

export type ClassDes_Method_Parameters = {
	"parameter": ClassDes_Method_Parameter[]
}

export type ClassDef_Method = {
	"shortdesc": string,
	"@_name": string,
	"parameters"?: ClassDes_Method_Parameters,
	"datatype"?: {
		"type": {
			"#text": string,
			"@_href": "#/LegacyTextItem"
		}
	},
}

export type ClassDef_PropsAndMethods = {
	"method"?:ClassDef_Method[],
	"property"?: ClassDef_Method[]
}