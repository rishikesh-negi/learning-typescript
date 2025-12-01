// In the following function, even though we're not specifying an explicit return type, we don't get an error, because TypeScript infers the return type based on the value being returned. Here, TypeScript understands that because both parameters of the function are strings, and the return value is just a combination of them, the return value must also be a string; and not just any string but a string of the format: sustemPrompt string + new line + userPrompt string:
export function combinePrompts(systemPrompt: string, userPrompt: string) {
  return `${systemPrompt}\n${userPrompt}`;
}
