var b = require('bonescript');
var fs = require('fs');
var net = require('net');

var bit1 = "P8_7";
var file1 = 'timerfile.inx';
var HOST = '192.168.7.1';
var PORT = 5050;


var client = new net.Socket();

var storeFreq_secs = 15;
var counter = fs.readFileSync(file1,'utf8');

b.pinMode(bit1,b.INPUT,7);

setInterval(count,1000);    

client = net.connect(PORT, HOST,function(){
    console.log('client connected');
});

    
client.on('data',function(data){
    console.log('Data'+data);
    //client.end();
});

client.on('end',function(end){
    console.log('Connection Ended with err'+end);
});

function count(){
    if(b.digitalRead(bit1)==b.HIGH) {
        counter++
        //console.log('Counter : '+counter);
    }
    if(counter%storeFreq_secs == 0)
        fs.writeFile(file1,counter,function(err){
            if (err) throw err;
        });
    //console.log('Counter'+counter)
    var obj = JSON.stringify(counter);
    client.write(obj+'\n');
}









