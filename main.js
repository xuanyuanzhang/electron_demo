/**
 * Created by xz258 on 9/18/2017.
 */

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 800, height: 600, transparent: false, frame: true});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file',
        slashes: false
    }));
});

// Here is how we read a txt file

const fs = require('fs');
const data = fs.readFileSync('~/../dummy.txt');
console.log(data.toString());


// Here is how to use math functions

/*
const math = require('mathjs');
console.log(math.log(10000, 10));
*/
