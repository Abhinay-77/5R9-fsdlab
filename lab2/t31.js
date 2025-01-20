function merge(...args){

    let arr = new Array();

    let l=args.length;

     for(let i=0;i<l;i++){
     

    
    arr=[...arr,...args[i]]
    
      }
      console.log(arr);


}

merge([1,2],[3,4]);
merge([1,2],[3,4],[5,6]);
