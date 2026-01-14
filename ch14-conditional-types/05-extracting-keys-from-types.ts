// Extracting Keys from Types:
// Mapped types don't just let us build new object types - they can also be used to extract keys. Say we have this object type:
type Soldier = {
  name: string;
  age: number;
  branch: "garrison" | "military police" | "survey corps";
};
// Now, imagine we want to get just the string-based keys of the fields - maybe for a filter, a dropdown, or feeding to an LLM that summarizes records. First, we create an object where each key returns its name or 'never':
type StringKeys<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
};

// We get something like this:
type Result = {
  name: "name";
  age: never;
  branch: "branch";
};

// Now, we index into that type using all of its keys:
type StringKeyUnion<T> = StringKeys<T>[keyof T];

// We've made an object into a union of its values:
type Keys = StringKeyUnion<Soldier>; // "name" | "branch"

// ---------------------------------
type NumberKeys<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];
