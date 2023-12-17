import electron, { app, ipcMain } from "electron";
import path from "path";

import { SEARCHTYPE, FILEPICK } from "../environment/environment";
import { pickFile } from "./readingXML";
import { SearchParam, FilePickerParam } from "sender-context";

const { BrowserWindow } = electron;

let mainWindow:null|electron.BrowserWindow = null;
const DEBUG = false;

const width = 800;
const height = 600;

app.on("ready", () => {
	mainWindow = new BrowserWindow({
		width,
		height,
		maxWidth: width + 400,
		maxHeight: height + 100,
		useContentSize: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false,
			zoomFactor: 1
		}
	});
	mainWindow.loadURL(path.join(`file://${__dirname}`, "index.html"));
	if (DEBUG) mainWindow.webContents.openDevTools();
	mainWindow.on("closed", () => {
		mainWindow = null;
	});

	mainWindow.webContents.on("found-in-page",(event, result) => {
		console.log(event, result);
	});
	ipcMain.handle(SEARCHTYPE,(event, arg:SearchParam) => {
		console.log(event);
		console.log(arg);
		const requestId = mainWindow.webContents.findInPage(arg.value, {
			forward: true,
			findNext: true,
			matchCase: false
		});
		return requestId;
	});

	ipcMain.handle(FILEPICK, async (event, option:FilePickerParam) => {
		console.log(event);
		const result = await pickFile([option.ext]);
		return result;
	});
});
