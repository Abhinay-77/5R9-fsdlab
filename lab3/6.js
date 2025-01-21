let p=Promise.resolve(5);
let p1=Promise.resolve(10);
let p2=Promise.resolve(15);
//let p3=Promise.reject("rejected");

let promises = [p, p1, p2];

Promise.all(promises)
    .then((results) => {
        const sum = results.reduce((a, num) => a + num, 0);
        console.log( sum);
    })
    .catch((error) => {
        console.log('Error:', error);
    });