// Template Literal Type
// These are also not used often for writing application code/logic. They are useful for library authors. They allow us to use template literals to create derived literal value unions and even combine literal type to form consolidated literal types. Ex:
type Class = "wizard" | "warrior" | "rogue";
type Hero = `elf ${Class}`;

// Here, by combining the Class value union with "elf " in a template literal, the type Hero becomes a value union of the values "elf wizard", "elf warrior", and "elf rogue".

// We can even combine two value unions to get a third, derived value union. Ex:
type Flavors = "chocolate" | "vanilla" | "strawberry";
type DessertType = "ice cream" | "milkshake" | "cake";
type Dessert = `Dessert: ${Flavors} ${DessertType}`;

// A template literal type can also contain a primitive type as a placeholder for any input value of that primitive type. Example:
type LogLevel = "info" | "warn" | "error";
type LogSourceType = "api" | "database" | "auth";

type LogMessage = `${LogLevel}: ${string}`;
type LogSource = `${LogSourceType}_${number}`;
// Here, LogMessage is a template literal type that combines one of the values of the LogLevel value union with any input string. Similarly, LogSource combines any of the values of the LogSourceType value union with any input number:

function createLogEntry(message: LogMessage, source: LogSource) {
  return `[${source}] LOG - ${message}`;
}
