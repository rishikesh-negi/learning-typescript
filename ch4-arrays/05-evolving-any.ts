// Evolving Any:
// By default, an array can have elements of any type if the type is not specified explicitly. However, as an array gets populated with elements, its type automatically evolves and narrows down the different types based on the types of the added elements. Ex:
const inventory = []; // Array with the "any" type

inventory.push(10);
console.log(inventory); // Hovering over "inventory" in this line reveals its type as "number"

inventory.push("pen");
console.log(inventory); // Hovering over "inventory" here shows its type as (string | number)

function collectSupportData(id: number, resolved: boolean) {
  const supportData = [];
  supportData.push("Support session started");
  supportData.push(id);
  supportData.push(resolved);

  return supportData;
}
// Hovering over supportData in the line where it is being returned by the function shows the narrowed-down types the initial "any" type has evolved into

// Generally, it is ideal to avoid any-typed variables in code as much as possible.
// A potential undesirable outcome of using arrays with "any" type is that, sometimes, instead of the "any" type, we get a "never" type, depending upon TS configuration and the contents of the array in question. For instance, a variable could have the "never" type if we assign an array to it as a fallback value. Ex:
const expectedArr = undefined;
const arr = expectedArr ?? [];
console.log(arr);
// Here, the arr variable ends up with a "never[]" type because it is being assigned a fallback array based on another variable that may or may not be truthy.
// The "never" type is covered in one of the upcoming lessons, but it means that the variable or value MAY never get a valid type. In a way, "any" and "never" are opposites, with "any" meaning that the value could by of any type and "never" meaning that the value could have no valid type at all.
