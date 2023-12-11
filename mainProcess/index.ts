import electron, { app } from "electron";
import path from "path";

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
});