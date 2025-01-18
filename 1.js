function mergeArrays(...args){
    let arr=new Array();

    let l=args.length;
    for(let i=0;i<l;i++){
        arr=[...arr,...args[i]];
    }
    console.log(arr);
}
mergeArrays([1,2],[3,4],[5,6]);