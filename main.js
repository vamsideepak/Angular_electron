var { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
var java = require('java');
var path = require("path");
var url = require("url");
var fs = require("fs");
var javaInit = require('./javaInit')
var childProcess = require('child_process');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1000, height: 800, webPreferences: {
      webSecurity: false
    }
  });

  //to remove menu 
  win.setMenu(null);

  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `dist/index.html`),
      protocol: "file:",
      slashes: true,
    })
  );

  //added this line to open developer tools for debugging
  win.webContents.openDevTools();

  // The following is optional and will open the DevTools:
  //win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });
}

//camera access code

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }

});

/*
 * Read SmartCard Functionality Start Here
  */

ipcMain.on('readSmartcard', (event, arg) => {
  var javaInstancePath = "com.genfare.applet.encoder.EncoderApplet"
  var cardName = "ACS ACR1252 1S CL Reader PICC 0"
  var cardConfig = {
    "agency_id": 194,
    "end_of_transit_day_desfire": null,
    "priorities_and_configuration_type": 1,
    "printed_id_file_version": 2,
    "card_properties_file_version": 0,
    "transfer_file_version": 1,
    "product_list_file_version": 0,
    "product_file_version": 3,
    "journal_file_version": 1,
    "equipment_id": 0,
    "first_product_must_be_stored_value": true,
    "number_of_products": 4,
    "number_of_transfers": 1,
    "number_of_bonus_passes": 1,
    "number_of_pay_as_you_go_passes": 1,
    "max_stored_value": 20000,
    "max_pending_passes": 3,
    "agency_timezone_offset": -21600000,
    "accountFlag": false
  }

  var EncoderApplet = java.import(javaInstancePath);
  var EncoderInstance = new EncoderApplet()

  console.log("before java call  Data", EncoderInstance)

  var result = EncoderInstance.setEncoderSync(cardName, JSON.stringify(cardConfig), "49 A8 B4 8B 3F 45 9F BC 3A 31 9B 53 90 EB 68 08",
    "79 AA EF 33 FB EF C1 2C E3 13 04 9F 91 16 B4 86", "90 CF 88 CB E0 8E D1 7C F3 37 C2 93 2B E9 CF E2");

  console.log("setEncoder Data", '' + result)
  try {
    var smartread = EncoderInstance.readCardSync();
  } catch (error) {
    console.log(error);
  }

  event.sender.send('updateResult', smartread);
})

/*
 * Read SmartCard Functionality End Here
  */