const EventManagement = require('./eventManagement');


const myEvent = new EventManagement('Sample Event');


myEvent.on('start', (eventName) => {
  console.log(`Listener: The event "${eventName}" has started.`);
});


myEvent.on('in-progress', (eventName, progress) => {
  console.log(`Listener: The event "${eventName}" is ${progress}% complete.`);
});

myEvent.on('completed', (eventName) => {
  console.log(`Listener: The event "${eventName}" is completed.`);
});

myEvent.startEvent();
