// let p = Promise.reject("failed");
let p = Promise.resolve("succes")

let p1 = new Promise((resolve, reject) => {
    p.then(() => {
        resolve("successful");
    }).catch(() => {
        reject("failed");
    });
});

let p2 = new Promise((resolve, reject) => {
    p1.then(() => {
        resolve("successful");
    }).catch(() => {
        reject("failed");
    });
});

p.then(res => {
    console.log(res);
}).catch(err => {
    console.log("p Error:", err);
});

p1.then(res => {
    console.log(res);
}).catch(err => {
    console.log("p1 Error:", err);
});

p2.then(res => {
    console.log(res);
}).catch(err => {
    console.log("p2 Error:", err);
});
