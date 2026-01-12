// Type Parameters for Types:
// We've already seen this in action. Type parameters aren't just limited to functions and methods. We can use type parameters to create generic types as well:
interface Store<T> {
  get(id: string): T;
  save(id: string, item: T): void;
  list(): T[];
}
// Not to mention, this also works with type aliases: type Store<T> = { ... }
// Now, a Store can be anything that implements the methods above, but what is stored doesn't matter. Next, we can create a function that uses the store, again, not caring what is stored in it:
function addAndGetItems<T>(store: Store<T>, id: string, newItem: T): T[] {
  store.save(id, newItem);
  return store.list();
}

// Finally, we can create a Store that specifically deals with Product types:
type Product = {
  name: string;
  price: number;
};

const productStore = {
  products: {} as Record<string, Product>,
  get(id: string): Product {
    if (!this.products[id]) throw new Error("No product with that ID found");
    return this.products[id];
  },
  save(id: string, item: Product): void {
    this.products[id] = item;
  },
  list(): Product[] {
    return Object.values(this.products);
  },
};

// And we can use it like this:
const newStore = addAndGetItems(productStore, "laneslaptop", {
  name: "Laptop",
  price: 999,
});
console.log(newStore); // [{ "name": "Laptop", "price": 999 }]

const finalStore = addAndGetItems(productStore, "joestoaster", {
  name: "Toaster",
  price: 50,
});
console.log(finalStore); // [{ name: "Laptop", price: 999 }, { name: "Toaster", price: 50 }]

// We could also create a store for something entirely different:
type Homunculus = {
  title: string;
  abilities: string[];
};

const homunculusStore = {
  homunculi: {} as Record<string, Homunculus>,
  get(id: string): Homunculus {
    if (!this.homunculi[id]) throw new Error("No product with that ID found");
    return this.homunculi[id];
  },
  save(id: string, item: Homunculus): void {
    this.homunculi[id] = item;
  },
  list(): Homunculus[] {
    return Object.values(this.homunculi);
  },
};

// and it will still work with addAndGetItems:
const newHomunculus = addAndGetItems(homunculusStore, "laneslaptop", {
  title: "Laptop",
  abilities: ["fast", "strong"],
});
console.log(newHomunculus); // [{ "title": "Laptop", "abilities": ["fast", "strong"] }]

// --------------------------------
type JobQueue<Job> = {
  push(job: Job): void;
  next(): Job | undefined;
};

function runNext<T>(JobQueue: JobQueue<T>) {
  return JobQueue.next();
}

function createQueue<T>(): JobQueue<T> {
  const jobs: T[] = [];

  return {
    push(job: T) {
      jobs.push(job);
    },
    next() {
      return jobs.shift();
    },
  };
}
