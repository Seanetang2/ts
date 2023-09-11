const fs = require ("fs");

const file = fs.createWriteStream("./streamfile.txt")

for (let i = 0; i < 1000; i++) {
// file.write("\nwelcome to set 08 class");    
}

file;

let increment = 1;
setInterval (() =>{
    file.write(`\nthese is attemt one ${increment ++}`)
}, 1000);
