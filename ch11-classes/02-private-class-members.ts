// Private Class Members:
// In the ES2022 release, JS added support for private class members, which it had been lacking for a long time. We use the '#' syntax for defining private class member. TS respects this syntax and gives us compilation errors if we try to access private members outside the class:
class SecretAgent {
  #id: string;

  constructor(id: string) {
    this.#id = id;
  }

  getCodeName(): string {
    const idToCodeNameMap: Record<string, string> = {
      "007": "James Bond",
      "006": "Alec Trevelyan",
    };

    return idToCodeNameMap[this.#id] || "Unknown Agent";
  }
}

const bond = new SecretAgent("007");
console.log(bond.getCodeName());

// console.log(bond.#id); // Error: Property '#id' is not accessible outside class 'SecretAgent' because it has a private identifier.

// In plain JS, we would get an error only at runtime if we tried to access a private class member outside the class. But with the same syntax in TS, we get the error at compile time, which is much better.

class Customer {
  firstName: string;
  lastName: string;

  #balance: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#balance = balance;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  purchase(cost: number): number {
    this.#balance -= cost;
    return this.#balance;
  }
}

// GOOD TO KNOW: In TS, we can also use the 'private' keyword instead of the '#' syntax keyword to mark a property as a private member. This is a TS-only feature, so the property will be private in TS, but after compilation, it becomes a regular property in JS. So, the use of a 'private' property outside the class will not throw runtime errors in JS.
