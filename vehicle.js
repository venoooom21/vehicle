// Implement the Car class that implements the Vehicle interface
var Car = /** @class */ (function () {
    // Constructor to initialize properties
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Implementation of the start method
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Corolla", 2022);
// Call the start method on the Car instance
myCar.start(); // Output: Car engine started
