const Person = {
    name: "Abhinay",
    age: 21,
    f: function greet() {
        console.log(`Hi,  ${this.name}.`);
    },
    g: function isAdult() {
        if (this.age >= 18) {
            console.log("adult");
        } else {
            console.log("not adult");
        }
    }
};
console.log(Person.name);
console.log(Person.age);
Person.f();
Person.g();
