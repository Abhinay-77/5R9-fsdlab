const EventEmitter = require('events');


class EventManagement extends EventEmitter {
  constructor(eventName) {
    super();
    this.eventName = eventName;
    this.status = 'Not Started';
  }

  startEvent() {
    console.log(`${this.eventName} has started.`);
    this.status = 'In Progress';
    this.emit('start', this.eventName);  
    this.updateProgress();
  }

  updateProgress() {
    let progress = 0;

  
    const intervalId = setInterval(() => {
      if (progress < 100) {
        progress += 50; 
        this.emit('in-progress', this.eventName, progress);  
      } else {
        clearInterval(intervalId);
        this.emit('completed', this.eventName);  
      }
    }, 1000);  
  }
}

module.exports = EventManagement;  
