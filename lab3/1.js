let p= Promise((resolve,reject)=>{
    resolve(100);
})

p.then((res)=>{
    console.log(res);
})