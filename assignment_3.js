/* Assignment 3 : To initialize Client with data from Server and then passing value to the server on interval */

var b = require('bonescript');
var fs = require('fs');
var net = require('net');

var bit1 = "P8_7";
var bit2 = "P8_9";
var file1 = 'timerfile.inx';
var HOST = '192.168.7.1';
var PORT = 5050;


var client = new net.Socket();

var storeFreq_secs = 15;
var counter1 = -1;
var counter2 = -1;
var counter3 = -1;
var counter4 = -1;

b.pinMode(bit1,b.INPUT,7);
b.pinMode(bit2,b.INPUT,7);


client = net.connect(PORT, HOST,function(){
    console.log('client connected');
});


client.on('data',function(data){
    console.log('Data'+data);
    
    counter1 = JSON.parse(data).value1;
    counter2 = JSON.parse(data).value2;
    counter3 = JSON.parse(data).value3;
    counter4 = JSON.parse(data).value4;
});


setInterval(count,1000);       

client.on('end',function(end){
    console.log('Connection Ended with err'+end);
    //client = net.connect(PORT,HOST,function(){console.log("Client Reconnected");});
});

function count(){
    if(b.digitalRead(bit1)==b.HIGH) 
        counter1++
    else
        counter2++;
    
    if(b.digitalRead(bit2)==b.HIGH)
        counter3++;
    else
        counter4++;
    
    console.log('Counter1: '+counter1+', Counter2: '+counter2+', Counter3: '+counter3+', Counter4: '+counter4);
    var obj = JSON.stringify({name: 'mc_on',value: counter1});
    client.write(obj+'\n');
    //socket.emit(obj+'\n');
}









