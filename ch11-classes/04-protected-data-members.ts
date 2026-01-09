// Protected Data Members:
// We touched upon this in the previous lesson. The 'protected' keyword in unique to TS. It is not a part of the EcmaScript standard. It allows us to define members that are accessible within the class AND its subclasses, but not outside the class. It's "private but also accessible to subclasses".
class Character {
  protected health: number;

  constructor(health: number) {
    this.health = health;
  }

  protected takeDamage(amount: number): void {
    this.health -= amount;

    if (this.health < 0) this.health = 0;
  }
}

class Fighter extends Character {
  constructor(health: number) {
    super(health);
  }

  public fight(damage: number): void {
    this.takeDamage(damage);
    console.log(`Fighter took ${damage} damage. Health: ${this.health}`);
  }
}

const fighter = new Fighter(100);
fighter.fight(30);

// console.log(fighter.health); // Error: Property 'health' is protected and only accessible within class 'Character' and its subclasses.

class Customer {
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

  purchase(cost: number) {
    this.balance -= cost;
    return this.balance;
  }
}

class RegularCustomer extends Customer {
  constructor(firstName: string, lastName: string, balance: number) {
    super(firstName, lastName, balance);
  }

  getBalance() {
    return this.balance;
  }
}
