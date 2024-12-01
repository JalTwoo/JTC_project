const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const electronBuilder = require('electron-builder');
const pkg = require('pkg');
const fs = require('fs');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false, // важно для безопасности
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);