// Maps:
// Working with maps in TS is similar to working with TS sets. Since both, keys and values can be of any type in a map, we can specify the type of both using the format: new Map<keyType, valueType>();
// Ex:
const map = new Map<string, number>();
map.set("One", 1);
// If we pass a key-value pair as argument into the Map contructor, TS will infer the type of keys and values. Ex:
const inferredMap = new Map([["ten", 10]]);
console.log(inferredMap); // Hovering on inferredMap shows its type: <string, number>

function getFileLength(files: Map<string, string>, filename: string) {
  const file = files.get(filename);
  if (!file) return 0;

  return new TextEncoder().encode(file).length;
}
