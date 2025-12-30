// Type Hierarchy:
// All the types in TS can be arranged into a hierarchy of sorts. On the top, we have the widest types 'any' and 'unknown'. They branch off to all the possible non-never types (string, number, boolean, void, etc.), which, in turn, branch off to more specific types, like literal types. At the very bottom, we have the 'never' type that all the bottom-most branches converge into.

// Some key points:
// 1. Types at the top of the hierarchy are the widest and can encompass any possible values. Very little is known about them (ex: unknown or any).
// 2. Types at the bottom are teh "narrowest". They encompass the fewest possible values, and a lot is known about them (ex: never).
// 3. The 'any' type essentially turns of type checking and allows us to do anything with the value. It is like an escape hatch built into TS.
// 4. The 'never' type is at the bottom of the hierarchy because it represents values that can never occur.
// 5. Type assignment is lexical in type hierarchy, with each level assignable only to the above type, and not the other way round. Example:
// The type "Ichigo" is assignable to "Ichigo" | "Kenpachi", which is assignable to 'string', which is assignable to 'any'.
// "Ichogi" | "Kenpachi" is not assignable to "Ichigo" because what would happen if the value happens to be "Kenpachi"?

// 6. Interestingly, 'undefined' and 'null' are assignable to 'void' (only when strictNullChecks are disabled in TS configuration), but not the other way around.

type PositiveSentiment = "happy" | "satisfied";
type NegativeSentiment = "dissatisfied" | "angry";

type Sentiment = PositiveSentiment | NegativeSentiment;
type Response = { message: string; notify: boolean };

function respondToSentiment(sentiment: Sentiment): Response {
  switch (sentiment) {
    case "happy":
    case "satisfied":
      return handlePositiveSentiment(sentiment);
    case "angry":
    case "dissatisfied":
      return handleNegativeSentiment(sentiment);
    default:
      return { message: "We don't understand.", notify: true };
  }
}

function handlePositiveSentiment(sentiment: PositiveSentiment): Response {
  return sentiment === "happy"
    ? { message: "Hooray!", notify: false }
    : { message: "We are glad", notify: false };
}

function handleNegativeSentiment(sentiment: NegativeSentiment): Response {
  return sentiment === "angry"
    ? {
        message: "We apologize. A manager will contact you",
        notify: true,
      }
    : { message: "We are sorry", notify: false };
}
