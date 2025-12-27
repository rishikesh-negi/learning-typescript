// Enums (Overview):
// Enums are a set of defined constants. The simplest form of enums is a numeric enum:
enum Direction {
  North, // 0
  South, // 1
  East, // 2
  West, // 3
}

const myDirection: Direction = Direction.West;
console.log(myDirection); // Output: 3

// The amazing feature of enums, is that, in our code, we can have nicely named identifiers like Direction.West, and under the hood, we have simple values like 3.
// The use of Enums is not recommended because TS has union types, and Enums might be the least important topic to learn in TS, but more on this by the end of the "Enums" section.

// As we saw above, Enums allow us to map one value from a set of values to another value from a different set. We can also see from the above example that Enums default to zero-based number values, if no explicit value is specified.

// To explicitly set Enum values:
enum StatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalError = 500,
}
console.log(StatusCode.OK); // Logs: 200

// Enums are really useful in many languages, but TS provides such great type support for things like literal values, that Enums are much less needed in TS, which is why there are other ways of implementing Enum-like values (will be covered at the end of the section).

// Bidirectional Mapping:
// Numeric Enums are bidirectional, which just means that we can use any of the two mapped values as a key, and the other as the value:
const directionValue: number = Direction.South; // 2
const directionName: string = Direction[directionValue] || "None"; // "South"

// We've learned that every TS feature gets stripped away when TS code compiles to JS code. However, Enums are slightly different in that regard. Enums get converted to JS code that retains the original value mapping present within the Enum. This makes Enums a rare TS feature that generates more JS code than the orignal corresponding TS Enum code. This is one of the reason why many devs don't like Enums, as they want the final JS bundle to be as small as possible. If we observe the above two variable declarations, we can see that we're directly using the Enum in our JS code, which blurs the line between TS and JS because the corresponding TS code can no longer be just stripped away without modifying the underlying JS code during compilation. This violates the "Types get removed, JavaScript stays" notion.

type SupportRequest = {
  id: string;
  severity: RequestSeverity;
  description: string;
};

enum RequestSeverity {
  Low,
  Medium,
  High,
  Critical,
}

function isCritical(supportRequest: SupportRequest): boolean {
  return supportRequest.severity === RequestSeverity.Critical;
}
