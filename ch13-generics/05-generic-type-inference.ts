// Generic Type Inference:
// This lesson is pretty much redundant because we have already seen and talked about how generic types have inference. In most contexts, TS can infer type parameters by the actual arguments passed in, so we won't need to specify them. Let's look at a familiar example:
function transform<InputType, OutputType>(
  inputs: InputType[],
  update: (item: InputType) => OutputType
): OutputType[] {
  const outputs: OutputType[] = [];

  for (const input of inputs) {
    const output = update(input);
    outputs.push(output);
  }

  return outputs;
}

type Human = { name: string; age: number };

const humans: Human[] = [
  { name: "Eren", age: 15 },
  { name: "Mikasa", age: 16 },
  { name: "Armin", age: 15 },
];

const titanTransformer = (human: Human): string =>
  `${human.name} is now a titan`;

// Previously, we explicitly passed in <Human, string> as the type parameters:
const titanNames = transform<Human, string>(humans, titanTransformer);
console.log(titanNames);
// But in this case, there's no need because TS knows that our 'humans' variable is an array of 'Human' objects, and the titanTrnasformer function takes a Human and returns a string. So we can just call:
const titanNamesInferred = transform(humans, titanTransformer);
console.log(titanNamesInferred);

// ----------------------------------
function summarizeFeedback<T extends { text: string }>(data: T[]): string[] {
  return transformer(data, (item) => item.text);
}

function transformer<T, R>(inputs: T[], fn: (item: T) => R): R[] {
  const results: R[] = [];
  for (const item of inputs) {
    results.push(fn(item));
  }

  return results;
}
