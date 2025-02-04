const os = require('os');

const time=os.uptime();


    const days = Math.floor(time/ 86400);  
    const hours = Math.floor((time % 86400) / 3600);  
    const minutes = Math.floor((time % 3600) / 60);  
    const rs = Math.floor(time % 60);  
  
    console.log(  `${days} days, ${hours} hours, ${minutes} minutes, and ${rs} seconds`);