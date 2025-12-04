// Unions are used for a variable or return value that can have any type from an enumerated set of types. For example:
let userId: string | number;
userId = "user_42";
userId = 42;
// Here, we're confining userId to type "string" or "number"

export function getTicketInfo(id: string | number) {
  // some code
}

// Unions allow for type narrowing, where TS will dynamically infer the type whenever a variable, parameter, or return value in question is assigned a certain value. If the variable gets a string value, TS will infer its type as "string", and if the variable later gets a number value, TS will infer that it is now a number. Example:
function safeSquare(val: string | number): number {
  if (typeof val === "string") {
    val = parseInt(val, 10);
  }

  // Now, val is only a number
  return val * val;
}

let result = safeSquare("5");
console.log(result); // 25

result = safeSquare(5);
console.log(result); // 25

// Type narrowing also allows for calling the methods of the type's namespace on or with the corresponding value. Example:
export function getAndParseTicketInfo(id: string | number) {
  if (typeof id === "string") {
    const parsedId = id.split("-")[1] || "";
    const numberId = parseInt(parsedId);

    return `Processing ticket: ${numberId}`;
  }

  return `Processing ticket: ${id}`;
}
