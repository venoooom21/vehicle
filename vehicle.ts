interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implement the Car class that implements the Vehicle interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    // Constructor to initialize properties
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    // Implementation of the start method
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2022);
  
  // Call the start method on the Car instance
  myCar.start(); // Output: Car engine started