function fetchData(url) {
    let p = new Promise((resolve, reject) => {
        if (url.includes("error")) {
            reject("Error");
        } else {
            resolve("Data fetched successfully");
        }
    });
    return p;
}

 fetchData("error").then((res) => {
    console.log(res);
})
.catch((err) => {  
    console.log(err);  
});


 fetchData("https://www.example.com").then((res) => {
    console.log(res);  
})
.catch((err) => {
    console.log(err);  
});
