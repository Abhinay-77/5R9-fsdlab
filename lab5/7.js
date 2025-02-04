const fs = require('fs');

fs.appendFile('lab5/2.txt', 'sample 4', (err) => {
    if (err) {
        console.log("Error writing file:", err.message);
    } else {
        fs.readFile('lab5/2.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log("Error reading file:", err.message);
            } else {
                console.log(data);  
            }
        });
 
    }
});
