const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails: function() {
        return `${this.year} ${this.make} ${this.model}`;
    }
};

const electricCar = Object.create(car);
electricCar.batteryCapacity = "75 kWh";
electricCar.getBatteryInfo = function() {
    return `Battery Capacity: ${this.batteryCapacity}`;
};

const myCar = Object.create(car);
myCar.make = "Tesla";
myCar.model = "Model 3";
myCar.year = 2021;

console.log(myCar.getDetails());
console.log(electricCar.getBatteryInfo());