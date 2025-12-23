// Tuple Rest Elements:
// TS allows tuples to have an arbitrary number of contiguous elements of a specific type using rest elements. This is useful when we want a tuple to have a fixed initial length, but a flexible final length:
type NameAndScores = [string, ...number[]];

const nameAndScores: NameAndScores = ["Messi", 35, 38, 42, 45, 50, 55];
const nameAndScores1: NameAndScores = ["Haaland"];
// As can be observed, the rest elements of a tuple are optional, too.

// A great use case of rest elements would be to model a command line argument pattern:
type Command = [name: string, ...args: string[]];

const gitCommit: Command = [
  "git",
  "commit",
  "-m",
  "Add file about tuple rest elements",
];
const gitPush: Command = ["git", "push", "-u", "origin main"];

function executeCommands([cmd, ...args]: Command) {
  console.log(`Executing ${cmd} with arguments: ${args.join(", ")}`);
}

// The whole point of type system is to more accurately and narrowly model the valid states of our program. Tuple rest elements contribute to that.

function tokenize(input: string): [number, ...string[]] {
  const tokens = input.split(" ");
  return [tokens.length / 100, ...tokens];
}
