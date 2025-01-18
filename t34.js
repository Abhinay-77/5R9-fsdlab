function mergeUserData(...args){
    let newObj={};
    for(let i=0;i<args.length;i++){
        newObj={...newObj,...args[i]};
    }
    console.log(newObj);
}

const userDetails = {name: 'CVR', age: 25} 
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'} 
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}
mergeUserData(userDetails,userAddress,userPreferences);