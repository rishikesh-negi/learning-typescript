// JS allows for optional function parameters without any extra syntax. To create optional parameters in TS, we explicitly specify which function parameters are optional by adding a question mark to the end of the parameter's name in the function definition:
function greet(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}`;
  }

  return `Hello, ${name}`;
}
// All optional parameters have a union as their type, with the union comprising of the type explicitly specified by us, and an implicitly added "undefined" type. In the above example, although "title" has been explicitly assigned a string type, it is actually typed to a union: string | undefined.
// All optional parameters should be declared after the mandatory parameters in the parameters list because a mandatory parameter cannot be written between two optional parameters since the arguments passed to the function will be mapped to the corresponding parameter variables in a chronological order.

export function calculateApiCost(numReqs: number, tier?: string) {
  if (tier === "pro") return numReqs * 0.05;
  if (tier === "enterprise") return numReqs * 0.03;
  return numReqs * 0.1;
}
