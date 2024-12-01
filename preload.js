const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    sendDownloadVideo: (url) => ipcRenderer.send('download-video', url),
    onDownloadComplete: (callback) => ipcRenderer.on('download-complete', callback),
    onDownloadProgress: (callback) => ipcRenderer.on('download-progress', callback),
    onDownloadError: (callback) => ipcRenderer.on('download-error', callback)
});
