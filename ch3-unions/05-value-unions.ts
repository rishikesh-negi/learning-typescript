// Value Unions:
// Literal types can also be used to enumerate a set of possible values that a variable should be confined to. Ex:
function bricsCountries(
  country: "Brazil" | "Russia" | "India" | "China" | "South Africa"
) {
  return country;
}

console.log(bricsCountries("India"));

// We can create a reusable type alias for the enumerated set of values:
type Priority = "low" | "medium" | "high" | "critical";

function setPriority(level: Priority) {
  switch (level) {
    case "low":
      return 0;
    case "medium":
      return 1;
    case "high":
      return 2;
    case "critical":
      return 3;
    default:
      return 0;
  }
}
