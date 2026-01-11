// Generics:
// Generics are one of TS' most difficult-to-grasp features for beginners, but are equally, if not more, powerful and useful as well. They allow us to create reusable logic that works with many types rather than a single one. Think of a data structure like a queue or a stack. They can hold any type of data, so it would be really annoying to separately reimplement them for every type (NumberQueue, StringQueue, UserQueue, etc.).
// Generics let us create a single Queue<T> type that can work with any type T. The best part is that when we use that queue with a specific type, TS won't lose that type information!
// Generics are a way to reuse behavior across types without resorting to 'any'.
// Built-in types like Array<T> and utility types are also generic types because we can use their logic and functionality with any type. Example: Omit<T, "key1" | "key2">
// We can also create our custom generic types:
type UserInfo<T1, T2> = {
  id: T1;
  name: T1;
  email: T1;
  age: T2;
};

type BasicUserInfo = UserInfo<string, number>;
// Here, UserInfo is a custom, reusable generic type with T1 and T2 as placeholders for specific types. By creating the UserInfo<string, number> type, we're simply replacing UserInfo's T1 and T2 with string and number, respectively.

// We can also create generic functions:
function getFirst<T>(arr: Array<T>): T | undefined {
  return arr.at(0);
}

const value = getFirst([1, 2, 3, 4, 5]);
// Here, getFirst is a generic function. We usually specify the specific type while calling a generic function: getFirst<T>([1, 2, 3, 4, 5]);
// However, in 99% cases, TS accurately infers the type.

// This is just scratching the surface of what generics can do. They are extremely powerful, but also very diffcult to master. However, when delaing with web development-related code, we don't often create custom generic types. We use the built-in TS generic types most of the time. But understanding what generics are and how they work deepens our proficiency in using TS effectively.
