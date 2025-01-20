function createProfile({name,email}){
    return {name,email};
}

const person={
    name:"Abhishek",
    age:20,
    email:"abhishek@gmail.com",
    address:"HYderabad"
}
const updatePerson=createProfile(person);
console.log(updatePerson);
