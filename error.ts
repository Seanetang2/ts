const Fs = require ("fs");

function readFile() {
    const readFile = Fs.createWriteStream("./streamfile.txt" , "utf-8");

    readFile.on("error" , function error(){
        console.log(`Am error occured` , error);
        
    })
    
    readFile.on("data" , function buffer(){
        console.log(`Reading data from my file ` , buffer);
        
    })
    
}

readFile();