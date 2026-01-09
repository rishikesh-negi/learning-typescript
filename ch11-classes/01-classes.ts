// Classes:
// TS classes add to JS classes what most other languages that support OOP already have but JS doesn't. It makes working with classes much more easier, especially for those migrating to JS from a language that supports true OOP. The syntax to implement classes in TS is mostly the same as JS classes. But we also get to do some extra things with them, as we'll see in the next several lessons about TS classes.
// TS classes work mostly the same way as JS classes, but with the added benefit of static typing. One of the biggest differences is the type annotations on all the class properties at the top elevel of the class declaration:
class Hero {
  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }

  attack(damage: number): void {
    console.log(`${this.name} attacks for ${damage} damage`);
  }

  getHealth() {
    return this.health;
  }
}

const geralt = new Hero("Geralt", 100);
geralt.attack(25);

console.log(geralt.getHealth());

class Customer {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
