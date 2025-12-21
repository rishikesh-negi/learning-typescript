// Tuples:
// Tuples are very similar to arrays with the "as const" directive. They are used a lot in TS, especially when writing libraries. A tuple is a special kind of array where each index position has a specific, known type. Ex:
const nameAndAge: [string, number] = ["John Doe", 30];
// Here, nameAndAge is a tuple that willl always have a string value at the first index position and a number at the second.
// We have to provide explicit typing with tuples. If we remove the type, nameAndAge will become an array with an inferred type of (string | number)[]. In that case, we could do this:
// nameAndAge[1] = "Hello World";
// But since the type of each index position is explicitly specified, the above operation raises an error.

function createTicket(
  prevTicket: number,
  comment: string
): [number, string, boolean] {
  return [++prevTicket, comment, comment.toLowerCase().includes("critical")];
}

// Why tuples are useful:
const a = createTicket(1, "qwerty"); // "a" has the type [number, string, boolean]
const [num, str, bool] = createTicket(1, "qwerty"); // Each destructured variable has the correct corresponding type. No explicit variable typing needed.
