var b = require('bonescript');
var fs = require('fs');
var bit1 = "P8_7";
var bit2 = "P8_9";
var file1 = 'par1.inx';
var file2 = 'par2.inx';

var storeFreq_secs = 15;
var count1 = fs.readFileSync(file1,'utf8');
var count2 = fs.readFileSync(file2,'utf8');

b.pinMode(bit1,b.INPUT,7);
b.pinMode(bit2,b.INPUT,7);

while(true){
    if(b.digitalRead(bit1)==b.HIGH)
        setInterval(counter(count1),1000);    
    if(b.digitalRead(bit2)==b.HIGH)
        setInterval(counter(count2),1000)
}


function counter(i){
    if(b.digitalRead(inbit)==b.HIGH) {
        i++;
        console.log(" :"+counter);
    }
    if(i%storeFreq_secs == 0)
        fs.writeFile(fileio,counter,function(err){
            if (err) throw err;
        });
}






