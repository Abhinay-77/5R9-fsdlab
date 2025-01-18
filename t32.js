function calculateTotal(...args){
    let sum=0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    console.log(sum);
}
calculateTotal(1,2,3);