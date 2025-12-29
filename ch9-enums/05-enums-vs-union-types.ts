// Enums vs Union Types:
// This is the most important topic in the Enums section. This discussion reveals why we might not want to use Enums in TS. Enums and unions are two different TS features that have almost identical use cases:
type CardSuit = "Hearts" | "Diamonds" | "Clubs" | "Spades";

enum CardSuitEnum {
  Hearts = "Hearts",
  Diamonds = "Diamonds",
  Clubs = "Clubs",
  Spades = "Spades",
}
// The type and enum created above do the exact same thing.

// Enums are almost never used. The only reason we're discussing them is to know what they are if we ever encounter them in a code base not written by us. Even the creator of TS, Anders Heijlsburg, said that if they were to create TS again, they would skip adding enums to the language.

// Unions readily provide the functionality that enums do, and they can be used for much more powerful things like discriminated unions, and not just just enum-like code. Unions are completely erased during compilation. They don't add any extra JS code to the final bundle. We know that Enums, on the other hand, add a lot more JS code, adding some overhead to the code complexity.

// Refactoring Enums to Unios:
/*
enum ApiTier {
  Free = "Free",
  Basic = "Basic",
  Pro = "Pro",
  Enterprise = "Enterprise",
}

function getRateLimitForTier(tier: ApiTier) {
  switch (tier) {
    case ApiTier.Free:
      return 10;
    case ApiTier.Basic:
      return 100;
    case ApiTier.Pro:
      return 1000;
    case ApiTier.Enterprise:
      return 10000;
  }
}
*/

type ApiTier = "Free" | "Basic" | "Pro" | "Enterprise";

function getRateLimitForApiTier(tier: ApiTier) {
  switch (tier) {
    case "Free":
      return 10;
    case "Basic":
      return 100;
    case "Pro":
      return 1000;
    case "Enterprise":
      return 10000;
  }
}
