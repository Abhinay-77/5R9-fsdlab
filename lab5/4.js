const events= require('events');

const event= new events.EventEmitter();

event.once("event",()=>{
    console.log(`event triggered`);
});

event.emit("event");
event.emit("event");