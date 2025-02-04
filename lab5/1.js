
const os = require('os');

function osdetails(){
    const memused = os.totalmem() - os.freemem();
    const per = os.freemem()*100/os.totalmem();

    console.log(`memeory used : ${memused}`)
    console.log(`percentage : ${per}`)
    
}

setInterval(osdetails,5000);