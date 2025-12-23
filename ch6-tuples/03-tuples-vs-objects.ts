// Tuples vs Objects:
// Why we sometimes need tuples instead of objects:
function getCoordinates(): [number, number] {
  return [40.5865, -75.9237]; // [lat, lng]
}

// Instead of:
function getCoordinatesAsObject(): { lat: number; lng: number } {
  return { lat: 40.5865, lng: -75.9237 };
}
// Here, the order of elements/properties is important to distinguish between latitude and longitude. Although object keys are clear and descriptive, the object properties lack order. So, in such situations a tuple is perfect as it helps us know exactly what value exists at what index. This simple example doesn't fully demonstrate the benefits of having values arragned in a specific order, but we frequently encounter situations where the order of values/elements is extremely important and useful. Tuples are sematically ordered, objects are not.

// For example, to model the distances of segments in a path, a tuple is the ideal choice over objects because tuples will guarantee the order of those values, whereas the order of object properties with keys like "segment1", "segment2", etc., is not set in stone or guaranteed. A team member might unknowingly break the code by shuffling the order of such object properties, if the object values are being looped over. Also, looping over a tuple is far easier and concise than looping over object properties.

// On the other hand, while consuming a function that returns an object, we can desctructure only the properties that we need. If we want to consume a function that returns a tuple or array, we would have to use blacnk spaces with commas to skip the values that we don't need. Ex:
function returnObject() {
  return { name: "Joe", age: 25, occupation: "Developer" };
}
function returnTuple(): [string, number, string] {
  return ["Joe", 25, "Developer"];
}

const { name, age } = returnObject();
const [, , occupation] = returnTuple();
console.log(name, age, occupation);

// Most of the times, objects are the way to go, but there are times when tuples are more ideal. Based on the above information and the use cases, we can now make a better decision while choosing between the two data structures.
