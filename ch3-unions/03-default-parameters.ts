// Often, we want to give some parameters a default value. JS readily allows us to assign default values to parameters. In TS, the syntax is the same. Ex:
function newCharacter(name: string, role: string = "warrior"): string {
  return `${name} is a ${role}`;
}
// The parameters with a default value automatically become optional parameters because we don't have to pass an argument for them.
// Additionally, we don't have to specify the type of the default parameters because TS can infer the type based on the specified default value. We need to specify the a union only if the parameter is expected to accept values of different types.
// Ex: function someFn (x: string | number = "Hi"): string {...}

console.log(newCharacter("Harry Potter"));
console.log(newCharacter("Harry Potter", "wizard"));

// export function estimateResponseTime(promptLength = 100, modelType = "text") {
//   if (modelType === "image") return 5 + 0.02 * promptLength;
//   if (modelType === "code") return 5 + 0.05 * promptLength;
//   if (modelType === "text") return 2 + 0.01 * promptLength;

//   return 0;
// }

export function estimateResponseTime(promptLength = 100, modelType = "text") {
  let baseNum = 0;
  let rateNum = 0;

  if (modelType === "text") {
    baseNum = 2;
    rateNum = 0.01;
  }
  if (modelType === "image") {
    baseNum = 5;
    rateNum = 0.02;
  }
  if (modelType === "code") {
    baseNum = 3;
    rateNum = 0.05;
  }

  return Math.round(baseNum + rateNum * promptLength);
}
