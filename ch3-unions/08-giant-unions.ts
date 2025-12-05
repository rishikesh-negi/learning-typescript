// A downside to using dynamic string template literal unions is if we have many enumerated values in each superset union to be combined, we would have many permutations and combinations to deal with. For instance:
type Distance = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Class =
  | "Warrior"
  | "Rogue"
  | "Mage"
  | "Cleric"
  | "Paladin"
  | "Druid"
  | "Hunter"
  | "Shaman";

/*
type MoveMessage =
  `The ${Class} moves ${Distance}, ${Distance}, ${Distance}, ${Distance}, then ${Distance} spaces.`;
// Here, the type MoveMessage has 8 possible options for the Class variable, and 9 possible options for each Distance variable. This makes MoveMessage too complex to be viable. TS also throws an error telling us that the type is too complex to represent.

const message: MoveMessage = "The Warrior moves 6, 2, 5, 4, then 7 spaces.";
*/

// Such huge and complex types will slow down TS and even cause TS compile time errors.
// Creating hyper-specific union types can have a negative impact on the editor responsiveness, compilation speed, and overall performance.
