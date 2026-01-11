// Record Utility Type:
// We briefly discussed and used this in an earlier lesson about defining objects with dynamic keys.
// Partial<T>, Required<T>, and Readonly<T> are useful for changing the characteristics of properties in a type, but Record<K, T> is one of the utility types that change the shape of the type, altogether. It creates a type with a set of "K-type" properties/keys having a type 'T' value:
// Using string as the key type:
type StringKeyDictionary = Record<string, number>;

const karateScores: StringKeyDictionary = {
  "Ralph Macchio": 60,
  "William Zabka": 100,
  "Jackie Chan": 82,
};

karateScores["Pat Morita"] = 85;

// Values must be numbers as per the Record:
// karateScores["Eve"] = "A+"; // Error: Type 'string' is not assignable to type 'number'.

// At this point, we have learned a few different ways to define key-value pairs in TS. However, one of the most practical use cases for the Record utility type is to ensure that all specified keys in a union are present in the objects. In other words, it supplements exhaustive types:
// A union of literal types as keys:
type PlayerRole = "tank" | "healer" | "dps";
type RoleCapacity = Record<PlayerRole, number>;

const partyRequirements: RoleCapacity = {
  tank: 1,
  healer: 2,
  dps: 3,
};

// TS error if any role is missing:
// const invalidRequirements: RoleCapacity = {
//   tank: 1,
//   healer: 2,
// };
// Error: Property 'dps' is missing in type '{ tank: number; healer: number; }' but required in type 'RoleCapacity'.:

// We can't add extra keys not present in the union:
// partyRequirements["warrior"] = 4; // Error: Property 'warrior' does not exist on type 'RoleCapacity'.

// This use case is fantastic for exhaustive lookup tables and configuration objects:
type HttpStatusCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

const statusMessage: Record<HttpStatusCode, string> = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
};

function getStatusMessage(code: HttpStatusCode): string {
  return statusMessage[code];
}

console.log(getStatusMessage(404));

// Another example:
type ModelStatus = "waiting" | "thinking" | "responding";

type ModelStatusMessage = "Awaiting prompt" | "Cooking" | "Sending response";

function getModelStatusMessage(status: ModelStatus) {
  const map: Record<ModelStatus, ModelStatusMessage> = {
    waiting: "Awaiting prompt",
    thinking: "Cooking",
    responding: "Sending response",
  };

  return map[status];
}
