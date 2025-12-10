// Readonly Modifier:
// This modifier is very similar to the "const" keyword in JS. It lets us mark object properties as read-only, meaning that they cannot be mutated after initialization. Ex:
type Point = {
  readonly x: number;
  y: number;
};

const point: Point = {
  x: 5,
  y: 10,
};

// point.x = "15"; // Generates a TS error, since x is read-only
point.y = 15; // Doesn't generate an error, since y is mutable

type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  readonly doNotDisturb: boolean;
  readonly outOfOffice: boolean;
};
