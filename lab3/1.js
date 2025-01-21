function greet(name,callback){
    return callback(name);

}

function c(meassge){
    return `hello ${meassge}`;
}

let a=greet("abhinay",c);
console.log(a)