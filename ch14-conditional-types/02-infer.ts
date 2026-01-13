// Infer:
// The 'infer' keyword, when used inside a conditional type, lets us use the type of a value from the true branch. For example:
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
// GetReturnType is a conditional utility type that extracts the return type of a function type T. We can use it like this:
function greet() {
  return "Hello, world!";
}

function sum(a: number, b: number) {
  return a + b;
}

type GreetReturnType = GetReturnType<typeof greet>; // string
type SumReturnType = GetReturnType<typeof sum>; // number
// In the above example, both type arguments, 'greet' and 'sum', make the conditional of GetReturnType true. They both accept an arbitrary number of arguments and return a value. And, because we're using the 'infer' keyword for the return type R of the function type in the conditional, TS knows that R is a type variable, remembers the type of R when GetReturnType is called, and returns the type when the conditional is true.
// We might wonder, "Why infer R instead of just R?" That's because TS syntax says so. R is the type that we're trying to match in the conditional, because the return value can be anything:
// (...args: any[]) => any;

// But we can't use 'any', because we're trying to capture the type in in a type variable, so we use R. But, TS needs to know that R is a type variable. That's that the 'infer' keyword does. It says, "I made this new type variable R, and I want you to remember that in the conditional's return statement, assuming that the conditional is true".

// NOTE: TS has a built-in Parameters<Fn> utility type that returns function Fn's parameter variables and their types:
function fullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`;
}

type P = Parameters<typeof fullName>;
// Hovering over P reveals its type as: [firstName: string, lastName: string]

// --------------------------------------
// Extracting the type of a function's argument:
type InputTypeOf<T> = T extends (input: infer A, ...args: any[]) => any
  ? A
  : unknown;

function cheer(enthusiasm: "moderate" | "high" | "highest"): string {
  switch (enthusiasm) {
    case "moderate":
      return "Yippie!";
    case "high":
      return "Hurray!";
    case "highest":
      return "Heck yeah!";
    default:
      throw new Error(
        `Unknown level of enthusiasm: ${enthusiasm satisfies never}`
      );
  }
}

type A = InputTypeOf<typeof cheer>; // "moderate" | "high" | "highest"
