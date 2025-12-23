// Destructuring Tuples:
// We've already discussed this in the previous tuples-vs-objects lesson. Tuples can be used to return multiple values from a function without having to create an object type just for that purpose. A tuple, along with destructuring, is a handy way to return "positional" data:
function getName(fullName: string): [string, string] {
  const parts = fullName.split(" ");
  return [parts[0] || "Hello", parts[1] || "World"];
}

const [firstName, lastName] = getName("Ichigo Kurosaki");
console.log(firstName, lastName);

// Nested Desctructuring:
// We can destructure nested tuples and objects, all at once:
type UserWithAddress = [string, { city: string; country: string }];

const userData: UserWithAddress = [
  "Ichigo",
  { city: "Karakura", country: "Japan" },
];

const [userName, { city, country }] = userData;
console.log(userName, city, country);
