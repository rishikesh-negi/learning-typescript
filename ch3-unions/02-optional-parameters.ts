// In JS, we don't need to pass arguments for all function parameters. To achieve the same behavior in TS, we use optional parameters to explicitly specify which parameters are optional. To make a parameters optional, we simply add a question mark to the end of the parameter name in the function definition:
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }

  return `Hello, ${name}`;
}
// All optional parameters will have a union as their type with the union comprising of the explicitly specified type and an implicitly added "undefined" type. In the above example, although "title" has been assigned a string type, it is actually a union: string | undefined.
// All optional parameters should be declared after the required parameters in the parameters list because a required parameter cannot be written between two optional parameters since the arguments passed to the function will be mapped to the corresponding parameter variables in chronological order.

export function calculateApiCost(numReqs: number, tier?: string) {
  if (tier === "pro") return numReqs * 0.05;
  if (tier === "enterprise") return numReqs * 0.03;
  return numReqs * 0.1;
}
