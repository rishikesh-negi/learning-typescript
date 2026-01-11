// Multiple Type Parameters:
// We already used this in the previous lesson and when we used utility types like Record. TS generic types are not limited to just one type parameter - we can have as many as we want (but we have to be mindful about their number). Most generic types have 1 or 2, or at most 3 type parameters. Even though the type parameters can have any name, short capital letters like T, U, V, etc., are the most common convention for generic type parameters. However, when creating a complex generic type, it's ideal to use full-length, descriptive names for readability:
function transform<InputType, OutputType>(
  inputs: InputType[],
  update: (item: InputType) => OutputType
): Array<OutputType> {
  const outputs: Array<OutputType> = [];

  for (const input of inputs) {
    const output = update(input);
    outputs.push(output);
  }

  return outputs;
}
// The huge length of the function's signature is hard to miss. That's why single-letter names for generic type parameters are so popular.
// With the above function, we basically built our own version of the Array.prototype.map method

// Now, we can use our own custom transformations with out custom transform function:
type Human = {
  name: string;
  age: number;
};

const humans: Array<Human> = [
  { name: "Eren", age: 15 },
  { name: "Mikasa", age: 16 },
  { name: "Armin", age: 15 },
];

const titanTransformer = (human: Human) => `${human.name} is a titan`;

const titanNames = transform<Human, string>(humans, titanTransformer);
console.log(titanNames);

// Without changing the implementation of out 'transform' function, we can use it to transform different types of data:
const numbers = [1, 2, 3, 4, 5];
const double = (num: number): number => num * 2;

const doubledNumbers = transform<number, number>(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

function pair<A, B>(a: A[], b: B[]): [A, B][] {
  if (a.length === 0 || b.length === 0)
    throw new Error("One of the data sets is empty");

  const tuplesArray: [A, B][] = [];

  for (let i = 0; i < a.length && i < b.length; i++) {
    tuplesArray.push([a[i]!, b[i]!]);
  }

  return tuplesArray;
}

const numbersToWords = pair([1, 2, 3], ["one", "two", "three", "four"]);
console.log(numbersToWords);
// If we hover over "pair", we can see that TS correctly infers the generic type parameters
