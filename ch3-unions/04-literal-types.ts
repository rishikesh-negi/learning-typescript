// Literal Types
// Literal types allow us to not just confine a variable to a type, but also to a specific value. Ex:
function move(direction: "north") {
  // direction = "south"; // throws TS compile-time error
  // Some code
}
// Here, the "direction" parameter is confined to the string value "north". It cannot accept or have any other value.
