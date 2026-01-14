// Mapped Types With Conditionals:
// This feature can lead to some really hard-to-read code, so it must be used carefully and wisely:
type Soldier = {
  name: string;
  age: number;
  branch: "garrison" | "military police" | "survey corps";
};

type OptionalSoldier = {
  [K in keyof Soldier]?: Soldier[K];
};
// What if instead of making all properties optional, we instead wanted to filter any non-string properties? We can do that with a conditional mapped type:
type FilteredSoldier = {
  [K in keyof Soldier]: Soldier[K] extends string ? Soldier[K] : never;
};
// The conditional: (Soldier[K] extends string) only evaluates to true (and thus the property is included as Soldier[K]) if the proeprty is assignable to string. Otherwise, it evaluates to 'never', and the property is excluded. One interesting thing to note, is that because we used Soldier[K] in the conditional, the more specific type of the 'branch' property is preserved, resulting in a type of:
/*
type FilteredSoldier = {
  name: string;
  // age: never;
  branch: "garrison" | "military police" | "survey corps";
};
*/

// ------------------------------------------
type EditableFields<T> = {
  [K in keyof T]: T[K] extends object | Function ? never : T[K];
};
