import fs from "fs"
import path from "path"

fs.mkdir("./NewClass" , (error): void =>{
    if(error){
        console.log("an arror in creating folder" + error);
    }else{
        console.log("folder created succesfuly");
        
    }
})

const newMsg = "Help me buy food"
fs.writeFile(path.join( __dirname , "Newclass" , "Oldfile.txt") 
 newMsg,
(error): void =>{
    if(error){
        console.log("Error writing a file" , error);
    }else{
        console.log("New file Added");
    }
const newMsg2 = "\nBuy snacks for joan"
fs.writeFile(path.join( __dirname , "Newclass" , "Oldfile.txt") ,newMsg2,
(error): void =>{
    if(error){
        console.log("An error in appending file" , error);
    }else{
        console.log("New file Appended");
    }
})
})



setInterval(() =>{
    const newMsg3 = "\nmy name is sean"
    fs.appendFile(path.join( __dirname , "Newclass" , "Oldfile.txt") ,newMsg3,
    (error): void =>{
        if(error){
            console.log("An error in appending file" , error);
        }else{
            console.log("New file Appended");
        }
    },)  
}, 3000)

fs.readFile(path.join(__dirname , "NewClass" , "Oldfile.txt"),
 "utf-8" ,(error,data) =>{
    if(error){
        console.log(error)
    }else{
        console.log(data);
        
    }})