// The "Never" Type:
// In TS, the "never" type represents values that cannot occur. The biggest use case of this type is that it helps us ensure that we have exhaustive checks in our 'if' and 'switch' statements. To understand its significance, let's look at the following functuion that should handle 3 cases:
function handleStatusCode(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }

  if (code === 404) {
    console.log("Not found");
    return;
  }

  throw new Error(`Unknown status code: ${code}`);
}
// Here, even though we're not handling the 500 status code, TS is not throwing any errors. But, we can configure it to do so. After each conditional, the type of 'code' is narrowed down by removing the handled literal type. So, after the first conditional in the above function, the type of code goes from (200 | 404 | 500) to just (404 | 500) because the code 200 got handled in the first 'if'. This means that by the time the execution reaches the 'throw' statement, 'code' still has an unhandled literal type of 500.
// If we assign 'code' to 'never', TS will raise an error until 'code' has been narrowed down to no possible values:
/*
function handleStatusCodeWithNever(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }

  if (code === 404) {
    console.log("Not found");
    return;
  }

  const err: never = code; // Error: Type '500' is not assignable to type 'never'
  return err;
}
*/

// So, now that TS tells us that 'code' still has a valid type of '500' remaining, we can handle the unhandled status code:
function handleStatusCodeWithNever(code: 200 | 404 | 500) {
  if (code === 200) {
    console.log("OK");
    return;
  }

  if (code === 404) {
    console.log("Not found");
    return;
  }

  if (code === 500) {
    console.log("Internal server error");
    return;
  }

  // Since all possible values were handled and the function was returned, the execution will "never" reach this line, thus allowing 'err' to be of 'never' type.
  const err: never = code;
  return err;
}

// Another trick to achieve the same type safety:
type SlashCommands = "greet" | "info" | "help";

const greetMessage = "Hello! How can I assist you?";
const infoMessage = "Sure! Here's a list of things I can do...";
const helpMessage = "I can help you with that!";

function handleSlashCommand(command: SlashCommands) {
  if (command === "greet") return greetMessage;

  if (command === "info") return infoMessage;
  if (command === "help") return helpMessage;

  throw new Error(`Unexpected command: ${command satisfies never}`);
}
// This approach eliminates the need to create a new variable just to check if all cases have been handled, and instead directly throws an error if an unexpected or unhandled case is encountered. it also demonstrates yet another brilliant use case of the 'satisfies' assertion.
