// Abstract Classes and Methods:
// These are not used very often, but are very useful for specific use cases. An abstract class is a class that cannot be instantiated directly. It's a template for inheritance, forcing subclasses to implement specific methods or properties:
abstract class Shape {
  size: "small" | "medium" | "large";

  constructor(size: "small" | "medium" | "large") {
    this.size = size;
  }

  abstract calculateArea(): number;

  displayArea(): void {
    console.log(`The area of this shape is ${this.calculateArea()}`);
  }
}

// We can't do this:
// const shape = new Shape("small"); // Error: Cannot create an instance of an abstract class.

// Within an abstract class, 'abstract' methods (like the calculateArea() method above) do not have an implementation because the implementation must be provided by the subclass. However, it can still have regular methods (like the displayArea() method above) which are then shared by all subclasses

// So, we can create a Circle class that extends Shape and implements the calculateArea() method:
class Circle extends Shape {
  radius: number;

  constructor(size: "small" | "medium" | "large") {
    super(size);

    switch (size) {
      case "small":
        this.radius = 5;
      case "medium":
        this.radius = 10;
      default:
        this.radius = 15;
    }
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// Circle can be instantiated:
const smallCircle = new Circle("small");
smallCircle.displayArea();

// We can say that Circle is a "concrete" version of the abstract class Shape.
// Abstract classes provide a foundational structure to subclasses while leaving some implementation details up to the subclasses.

abstract class Customer {
  firstName: string;
  lastName: string;
  protected balance: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getBalance() {
    return this.balance;
  }
}
