// Readonly:
// TS Tuples are still arrays under the hood. So, we can still push to them and pop from them, which are invalid tuple operations in other languages with real tuples, because real tuples have a fixed length:
const nameAndAge: [string, number] = ["John Doe", 30];
nameAndAge.push("Joe Joseph"); // Should not be allowed, but works

// Fortunately, TS allows "readonly" tuples:
const nameAndAgeReadonly: readonly [string, number] = ["John Johnson", 30];
// nameAndAgeReadonly.push("Hello world"); // Error: Property 'push' does not exist on type 'readonly [string, number]'

// However, making the tuple readonly also makes its elements read-only. So, we cannot change the value of any of the elements even if we use the correct type:
// nameAndAgeReadonly[0] = "Hello Worlds"; // Cannot assign to '0' because it is a read-only property

// Conclusion: If a strictly immutable tuple with specific values is needed, make it read-only. If the elements' values need to change, use regular tuples and avoid adding or removing elements to or from it.

type Ticket = readonly [number, string, boolean, boolean];

function resolveTicket(ticket: Ticket) {
  // ticket[3] = true; // Doesn't work on readonly tuples

  // Pitfall of readonly tuple type:
  // return [ticket[0], ticket[1], ticket[2], true]; // Error: Type '(string | number | boolean)[]' is not assignable to type 'Ticket'

  // The above error got raised because we're assigning a regular, mutable array to the Ticket return type, which is readonly. So, we have to return an "as const" array:
  return [ticket[0], ticket[1], ticket[2], true] as const;
}
