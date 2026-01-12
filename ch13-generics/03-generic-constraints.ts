// Generic Constraints:
// This feature of TS can be complicated to work with. Sometimes we do need our generic functions to have some information about the types it will receive. So far, we've seen examples where our generic functions knew nothing about the incoming types:
async function fetchFromApi<T>(url: string): Promise<T | undefined> {
  const res: Response = await fetch(`${url}`);
  if (!res.ok) throw new Error("Fetch failed");

  const data: T | undefined = await res.json();

  return data;
}
// In fetchFromApi, T could be anything.

// Constraints are just interfaces that allow us to write generics that only operate within the constraints of a given interface type. In the above example, the 'any' constraint is the same as an empty interface because it means the type in question can be anything.
// We can use the 'extends' keyword to constrain the type parameter to have certain properties, for example:
interface HasCost {
  cost: number;
}

function applyDiscount<T extends HasCost>(vals: T[], discount: number): T[] {
  const arr: T[] = [];

  for (const val of vals) {
    val.cost *= discount;
    arr.push(val);
  }

  return arr;
}
// The applyDiscount function works in a type-safe way on any type that has a .cost property. Because we're still using generics here, type information will be retained when the function returns.

const shoes = [
  {
    size: 12.5,
    country: "US",
    cost: 120,
  },
  {
    size: 12.5,
    country: "US",
    cost: 110,
  },
];

const tvs = [
  {
    framerate: 120,
    brand: "Samsung",
    cost: 500,
  },
  {
    framerate: 240,
    brand: "Vizio",
    cost: 300,
  },
];

const people = [
  {
    name: "Lane",
  },
  {
    name: "Brian",
  },
];

const discountedShoes = applyDiscount(shoes, 0.3);
const discountedTVs = applyDiscount(tvs, 0.5);

// const discountedPeople = applyDiscount(people, 0.2); // Error: Argument of type '{ name: string; }[]' is not assignable to parameter of type 'HasCost[]'. Property 'cost' is missing in type '{ name: string; }' but required in type 'HasCost'.

function pluckEmails<T extends { email: string }>(arr: T[]) {
  return arr.map((user) => user.email);
}
