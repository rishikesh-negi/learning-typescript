// Satisfies:
// It's a relatively new TS feature that can be used with object types as well as the "as const" objects. It is used to ensure that a value satisfies an explicitly defined type without changing its original/inferred type and behavior. Ex:
type A = { name: string };

// This feature solves a common pain point of TS's type system. Before "satisfies", we had to choose between:
// 1) Letting TS infer types (provides flexibility, but might miss errors)
// 2) Using explicit type annotations (catches errors, but disallows literal information)
// For example:
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",

  // Property with typo:
  yelow: "#ffff00",
};
// Here, type inference misses the "yelow" typo and doesn't raise an error. So, we would create an explicit type that catches such errors:
type ColorMap = {
  red: string;
  green: string;
  blue: string;
  yellow: string;
};

const colorsTypes: ColorMap = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",

  // Typo raises a TS compile-time error:
  // yelow: "#ffff00",

  yellow: "#ffff00",
};
// But the problem is that literal types are lost because ColorMap values are of "string" type. Ex:
const RedHex = typeof colorsTypes.red;
// Here, RedHex should be the literal "#ff0000" value, but is any "string" instead.

// The "satisfies" opertor gives us the best of both worlds:
const colorsSatisfies = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",

  // Typo raises a TS error:
  // yelow: "#ffff00",

  yellow: "#ffff00",
} satisfies ColorMap;

// The literal types are kept (other "color" types need to be commented out first to prevent them from being inferred)
type RedHexSatisfies = typeof colorsSatisfies.red;

// Below, if we hover over "a", we can see that the "as const" assertion is not being applied because we've set "a" to the type "A":
const a: A = { name: "John" } as const;

// So, we can instead use the 'satisfies' clause to tell TS that the object should satisfy a type without losing its original behavior or characteristics that the type doesn't have:
const b = { name: "Ada" } as const satisfies A;
// Here, if we hover over "b", we can see that it is read-only as specified. This makes it so that if type A changes, then "b", too, has to get updated to adhere to the changes.

// In a nutshell, the "satisfies" clause allows us to make sure that a value matches a type without changing the inferred type of the value. It is useful when we want an object to adhere to a type while having its own extra content, characteristics, or behavior.

type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
};

const newMailPreferences = {
  doNotDisturb: false,
  outOfOffice: false,
  signature: "Boots, Support.ai Wizard Bear",
  theme: "dark",
} satisfies MailPreferences;
