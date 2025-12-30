// Unknown Type:
// We know about the "any" type in TS, and that it represents anything. It is the "widest" type.
// The "unknown" type can also be used for similar purposes, but it's a much safer alternative because it forces us to explicitly assert the type before using it in a specific way:
let x: unknown;
let y: any;

// This isn't allowed:
// x.split(" "); // Error: 'x' is of type 'unknown'.

// This shouldn't be allowed, but is:
y.split(" ");

// To do the above operation on 'x', we need to narrow it down to a string:
if (typeof x === "string") {
  x.split(" ");
}
// Every time that we find ourselves needing the "any" type while writing our TS code, we should always stop to think if the "unknown" type can be used instead. It's better for type safety, forcing us to check for a specific type before doing any operation, instead of allowing us to do anything.

// The "any" Problem:
// The "any" type simply turns off TS's type checking:
function processData(data: any) {
  // TS allows this even though it might raise a runtime error:
  console.log(data.toLowerCase());

  // TS allows this too:
  return data.nonExistentMethod();
}

// No errors when calling the function:
processData(10);

// As we know by now, when we take plain JS code and run it through TS tooling, almost everythin is "any" by default.

// The "unknown" Solution:
// The "unknown" type doesn't allow that kind of degeneracy:
/* prettier-ignore */
function processUnknownData(data: unknown) {
  // Error: Object is of type 'unknown':
  // console.log(data.toLowerCase());

  // Same here:
  // data.nonExistentMethod();

  // With 'unknown', we can still assign any value to it, but we can't use that value in a meaningful way without first checking its type:
  if (typeof data === "string") {
    // Now TS knows data is a "string":
    console.log(data.toLowerCase());
    return data;
  }

  if (typeof data === "number") {
    // Now TS knows data is a "number":
    return data * 2;
  }

  // Throw an error for types that we cannot handle:
  throw new Error("Expected string data");
}

// When to Use 'unknown':
// The 'unknown' type is fantastic for dealing with values that come into our program from an external origin like user input, API responses, etc. It forces us to add type checks at that I/O boundary so that we can then be confident working with data inside our program.

type CustomerMessage = {
  content: string;
  source: "chat" | "email" | "unknown";
};

function parseCustomerMessage(input: unknown): CustomerMessage {
  if (typeof input === "string") return { content: input, source: "email" };

  if (Array.isArray(input))
    return { content: input.join("\n"), source: "chat" };

  return { content: "", source: "unknown" };
}
