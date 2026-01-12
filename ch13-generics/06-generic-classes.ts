// Generic Classes:
// We can add type parameters to almost anything in TS. So, classes can be generic too. To make it interesting, let's combine a few concepts:
// 1. InMemoryRepository is a generic class.
// 2. It implements a generic interface (Repository<T>).
// 3. T is constrained to have an 'id' property
interface Repository<T> {
  getAll(): T[];
  getById(id: string): T | undefined;
  save(item: T): void;
}

class InMemoryRepository<T extends { id: string }> implements Repository<T> {
  private items: T[] = [];

  getAll(): T[] {
    return [...this.items];
  }

  getById(id: string): T | undefined {
    return this.items.find((item) => item.id === id);
  }

  save(item: T): void {
    const index = this.items.findIndex((el) => el.id === item.id);

    if (index >= 0) this.items[index] = item;
    else this.items.push(item);
  }
}
// A few thingsto note about this example:
// 1. The purpose of using the 'implements' keyword is to ensure that the class adheres to the Repository<T> interface - TS will yell at us if our InMemoryRepository class can't be used as a Repository<T>.
// 2. While any Repository<T> doesn't need an 'id' property, out InMemoryRepository does.
// 3. An InMemoryRepository can be used to hold any type of object, as long as it has an 'id' property. And all the implementation logic is shared between all the different possible types.

// Let's create an InMemoryRepository for Shinigami:
interface Shinigami {
  id: string;
  name: string;
}

const deathNoteRepo = new InMemoryRepository<Shinigami>();
deathNoteRepo.save({ id: "1", name: "Ryuk" });
deathNoteRepo.save({ id: "2", name: "Rem" });

// Of course, if we try to create an InMemoryRepository for something that doesn't have an 'id' property, we will get compilation errors:
interface Psychopaths {
  name: "Light Yagami" | "L";
}

// const psychopathsRepo = new InMemoryRepository<Psychopaths>(); // Error: Type 'Psychopaths' does not satisfy the constraint '{ id: string; }'. Property 'id' is missing in type 'Psychopaths' but required in type '{ id: string; }'.

// ---------------------------------------
class FeatureFlag<T extends string> {
  #flags: Set<T>;

  constructor() {
    this.#flags = new Set();
  }

  enable(flag: T): void {
    !this.isEnabled(flag) && this.#flags.add(flag);
  }

  isEnabled(flag: T) {
    return this.#flags.has(flag);
  }
}
