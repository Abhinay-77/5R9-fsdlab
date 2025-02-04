const events= require('events');

const event= new events.EventEmitter();

event.on("details",(name,age)=>{
    console.log(`Hello, ${name} you are ${age} years old`);
});

event.emit("details","abhinay",20);