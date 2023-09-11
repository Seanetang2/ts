import events from "events"
import welcomeEvent from "./new";

console.log(events);

const emitter = new events

emitter.on("Money" , () =>{
    console.log(welcomeEvent);
})


setInterval (() =>{
    emitter.emit("Money", "please get me rice 300")
}, 5000)
