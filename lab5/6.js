const fs = require('fs');

fs.readFile('lab5/1.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
    } else {
        console.log(data);  
    }
});
