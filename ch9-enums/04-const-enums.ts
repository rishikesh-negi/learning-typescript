// Const Enums:
// Const Enums is a special variant of Enums that gets completely removed during compilation and is replaced with their literal values. Unlike regular enums, they don't ship extra mapping code:
const enum Direction {
  North = "NORTH",
  East = "EAST",
  West = "WEST",
  South = "SOUTH",
}

const windComesFrom = Direction.West;

// Const Enums are more performant, but come with limitations:
// 1. No computed values: They can reference other Enum members, but can't use arbitrary expressions:
const enum FavoriteActor {
  JohnKrasinsky = "John Krasinsky",
  EmilyBlunt = "Emily Blunt",

  // This is okay because it references Enum members:
  HollywoodCouple = FavoriteActor.JohnKrasinsky +
    " and " +
    FavoriteActor.EmilyBlunt,

  // This is not okay. Error: const enum member initializers must be constant expressions.
  // CoupleComputed = getHollywoodCouple(),
}

// 2. Mapping issues: Const Enums don't have runtime representation, so getting the name of the Enum member from the number is not possible:
const enum DirectionNumeric {
  North, // 0
  East, // 1
  South, // 2
  West, // 3
}

const directionValue = Direction.West;

// This doesn't work:
// const directionName = Direction[directionValue];// Error: A const enum member can only be accessed using a string literal.

// If we use a string literal, it just returns the value, not the member name:
const directionValue1 = Direction["West"]; // 3

// Const Enums are rarely used. The only time they may be used is if the bundle size is a big concern. Even then, the perfomance gain is minimal and insignificant.
