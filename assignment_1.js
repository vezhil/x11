var b = require('bonescript');
var fs = require('fs');
var bit1 = "P8_9";                                  //Spindle hours
var file1 = 'timerfile.inx';

var storeFreq_secs = 15;
var counter = fs.readFileSync(file1,'utf8');

b.pinMode(bit1,b.INPUT,7);

setInterval(count,1000);    

function count(){
    if(b.digitalRead(bit1)==b.HIGH) {
        counter++
        console.log(" :"+counter);
    }
    if(counter%storeFreq_secs == 0)
        fs.writeFile(file1,counter,function(err){
            if (err) throw err;
        });
}







