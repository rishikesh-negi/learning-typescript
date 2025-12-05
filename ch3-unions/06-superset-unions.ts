// Superset Unions
// They are not used very often but are useful for library authors. Superset unions allow us to define a set of literal values and add some other values to them. For instance, a set of values and some other values that fall within a specific range. Ex:
type ErrorCodes = 1 | 2 | 3 | number;
// Here, although we could've set ErrorCodes to just the 'number' type, adding value unions provides useful autocomplete when using this type alias. Ex:
type EmploymentStatus = "employed" | "unemployed" | "student" | string;

function updateEmploymentStatus(status: EmploymentStatus) {
  return `Employment status updated: ${status}`;
}

// Superset unions can be used in a situation where we have a function that accepts some metadata that can have a few specific values and some other custom values as well.
