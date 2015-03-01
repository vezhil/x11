var b = require('bonescript');
var fs = require('fs');

var p8 = "P8_";
var p9 = "P9_";
var i =0;

fs.writeFileSync('pins.txt','');

for (i=1;i<=46;i++){
    b.getPinMode(p8+i,printStat);
}

for (i=1;i<=46;i++){
    b.getPinMode(p9+i,printStat);
}

function printStat(x){
    fs.appendFile('pins.txt','Name '+x.name+', Pin '+x.pin+": "+x.mux+" \nOptions: "+x.options+"\n",function(err){if (err) throw err;})
}

