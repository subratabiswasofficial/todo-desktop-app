const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    title: "Todo App",
    webPreferences: {
      nodeIntegration: true,
    },
    maxWidth: 600,
    icon: path.join(__dirname, "public", "images", "icon.ico"),
  });

  win.loadFile(path.join(__dirname, "public", "index.html"));
  win.menuBarVisible = false;
  //   win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
