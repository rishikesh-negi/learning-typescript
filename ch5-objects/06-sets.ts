// Sets
// In JS, we have a Set data structure. In TS, we can specify the type of sets. If we don't specify a type and the set has no elements for type inference, the default type is Set<unknown>.
// we can define the type of a set as follows:
const mySet = new Set<string>();
// mySet.add(1); // Error because of wrong element type
mySet.add("qwerty");

function findNumUniqueLabels(formattedAddresses: string[]) {
  const set = new Set(formattedAddresses);
  return set.size;
}
