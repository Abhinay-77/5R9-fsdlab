function delayedMessage(message, delay,callback) {
    setTimeout(() => {
        console.log(message)
        callback();
    }, delay);
}

function infomsg(){
    console.log(" message printed");
}

delayedMessage("hi",2000,infomsg)