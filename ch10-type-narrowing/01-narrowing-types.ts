// Narrowing Types:
// Type narrowing is the process of making a type more and more specific as we write our code. As a general rule (not to be abused), the more specific our types, the better they are. With narrower types:
// 1. Our editor tooling will be much more helpful.
// 2. Our code self-documents much better.
// 3. We catch more errors at compile time.

// Conditional Narrowing:
// TS is really smart when recognizing how types are narrowed in "regular" code. Example:
type WitcherCharacter = {
  type: "witcher";
  name: string;
  magicPower: boolean;
};

type StarWarsCharacter = {
  type: "star-wars";
  name: string;
  forceSensitive: boolean;
};

type Character = WitcherCharacter | StarWarsCharacter;

function fight(player1: Character, player2: Character) {
  if (player1.type === "witcher" && player2.type === "witcher") {
    // We son't need to type-cast (convert) player1 and player2 to WitcherCharacter. TS does that automatically because this branch of the conditional narrows the type:
    fightWitcher(player1, player2);
  } else if (player1.type === "star-wars" && player2.type === "star-wars") {
    // Same thing here:
    fightStarWars(player1, player2);
  } else {
    throw new Error("Can't fight characters from a different universe");
  }
}

function fightWitcher(player1: WitcherCharacter, player2: WitcherCharacter) {
  // witcher-specific logic
}

function fightStarWars(player1: StarWarsCharacter, player2: StarWarsCharacter) {
  // star-wars-specific logic
}

// ------------------------------------------------
type RegularCustomer = {
  plan: "regular";
  tickets: number;
  aboveLimit: boolean;
};

type PremiumCustomer = {
  plan: "premium";
  tickets: number;
};

type Customer = RegularCustomer | PremiumCustomer;

function openTicket(customer: Customer): number {
  // The following boolean expression generates errors: Property 'aboveLimit' does not exist on type 'Customer' & Property 'aboveLimit' does not exist on type 'PremiumCustomer'.
  // if (customer.aboveLimit) {
  //   return -1;
  // }

  // We can do this instead:
  // if ("aboveLimit" in customer) {
  //   return -1;
  // }

  // And also this (using type narrowing);
  if (customer.plan === "regular" && customer.aboveLimit) {
    return -1;
  }

  if (customer.plan === "premium") return customer.tickets + 1;

  return 0;
}
