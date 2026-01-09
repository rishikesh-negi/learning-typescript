// Classes Implement Interfaces:
// In other object-oriented languages with strong type system, interfaces are used in a different context than that of TS. Interfaces in those languages act like a shell for what a class should contain.
// In TS, interfaces can be used as shells to define the structure of classes without any implementation details within them. TS classes can implement interfaces using the 'implements' clause. This enforces that the class adheres to the structure defined by the interfaces. Suppose we have two interfaces:
interface Vehicle {
  make: string;
  model: string;
}

interface Drivable {
  drive(distance: number): void;
}

// And we have a class that we want to implement (have properties and methods of) both interfaces:
// We can add a clause to the class definition to implement both interfaces. However, because the class doesn't yet have a 'drive' method, TS will throw an error:
// class ElectricCar implements Vehicle, Drivable {
//   make: string;
//   model: string;
// } // Error: Class 'ElectricCar' incorrectly implements interface 'Drivable'. Property 'drive' is missing in type 'ElectricCar' but required in type 'Drivable'.

// So, we're reminded bt TS to add the "drive" method to ElectricCar, and we can do so:
class ElectricCar implements Vehicle, Drivable {
  make: string;
  model: string;
  private isRunning: boolean = false;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
  }

  drive(distance: number): void {
    this.isRunning = true;
    console.log(`Driving ${distance} kilometers`);
  }
}

// IMPORTANT NOTE: Classes can implement not just interfaces but also types. In the above example, we could have made Vehicle a type instead of an interface, and it would've worked just fine.

type User = {
  firstName: string;
  lastName: string;

  getFullName(): string;
};

interface Customer {
  getBalance(): number;
}

class RegularCustomer implements User, Customer {
  firstName: string;
  lastName: string;
  protected balance: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getBalance(): number {
    return this.balance;
  }
}
