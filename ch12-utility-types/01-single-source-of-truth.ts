// Single Source of Truth:
// It's incredibly common for a TS codebase to amass a truly absurd number of custom type definitions - hundreds of interfaces and types, all with slightly different numbers of fields for a lot of the similar "entities". We might have something ridiculous like:
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

interface UserWithNoId {
  name: string;
  email: string;
  age: number;
}
// This is bad, because if we now want to change the definition or type of a property, we would have to make the change in every single type that has it. This makes our code error-prone, vulnerable to bugs, and difficult to refactor. We generally want to avoid redefining the same types over and over, and instead try to follow a "single source of truth" approach. For example, we do some refactoring:
interface UserWithoutId {
  name: string;
  email: string;
  age: number;
}

interface User extends UserWithoutId {
  id: string;
}

// In other words, we try to define our types once, and build type systems that rely on inference and type transformations to derive the types we need. Even better way to do this is by using TS's utility types.
