function updateEmployeeDetails(...args){
   args[0].role=args[1];
    console.log(employee);
}

const employee = {name: 'Afroz', role: 'Developer', age: 28, location: 'IN'} 
console.log(employee);
updateEmployeeDetails (employee, 'Senior Developer')