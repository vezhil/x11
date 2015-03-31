var b = require('bonescript');
var fs = require('fs');
var net = require('net');

var bit1 = "P8_7";
var file1 = 'timers.json';
var HOST = '192.168.7.1';
var PORT = 5050;

var config_file = fs.readFileSync(file1,'utf8');
var myObj;

try{
    myObj = JSON.parse(config_file);
    console.dir(myObj);
}

catch (err) {
    console.log('There has been an error parsing your JSON.')
    console.log(err);
  }








