// The 'this' Type:
// Fortunately, TS is smart enough to handle the otherwise-tricky 'this' keyword for us, because as JS devs we often struggle with the question, "what is the value of 'this' in this context?". TS is very good at inferring types, so it can infer what the 'this' keyword is, pretty much every single time:
class Counter {
  private count: number = 0;

  increment(): void {
    this.count++;
  }

  getCount(): number {
    return this.count;
  }
}

// Explicit 'this' Parameters:
// Even with TS's smart 'this' keyword inference, we sometimes need to override or explicitly control the type of 'this'. To do so, we use the special 'this' parameter in function definitions:
class CounterExplicitThis {
  private count: number = 0;

  increment(this: CounterExplicitThis, n: number): void {
    // Here, 'this' is explicitly types as CounterExplicitThis. The 'this' parameter is not available at runtime. It is only used for type checking:
    this.count += n;
  }

  getCount(this: CounterExplicitThis): number {
    return this.count;
  }
}

const counter = new CounterExplicitThis();
counter.increment(5);
console.log(counter.getCount());

// The explicit 'this' parameter overwrites the value of the 'this' keyword in that particular function. It needs to be the first parameter in the function definition.
// The explicit 'this' parameter is never used in production, as TS accurately infers it for us. In very rare instances, we may need to explicitly set the value of 'this', so it's good to know about it.

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
  #balanceQueries: number;

  constructor(firstName: string, lastName: string, balance: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
    this.#balanceQueries = 0;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getBalance(): number {
    this.#balanceQueries++;
    return this.balance;
  }

  getBalanceQueryCount(): number {
    return this.#balanceQueries;
  }
}
