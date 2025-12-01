// We know that JS provides us with the types null and undefined for values that amount to "nothing". TS provides a similar type called "void", which is specifically used for functions that have no return value. In JS, if a function returns undefined, there's no way of knowing if the functions returns nothing or if it specifically returns undefined, without reading the function. So, to make this distinction clear, the void type is specified as the return value for functions that don't have one. Ex:
export function logSystemEvent(
  event: string,
  severity: "info" | "warning" | "error"
): void {
  console.log(`SYSTEM ${severity.toUpperCase()}: ${event}`);
}

// The void return type is also assigned implicitly to a function by TypeScript if the function has no return value.
