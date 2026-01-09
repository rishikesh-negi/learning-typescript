// TypeScript Public and Private:
// JS's '#' private fields didn't come until ES2022, but TS devs had wanted public/private/protected access modifiers for a long time. So, TS added support for 'private' and 'protected' before then. So, a lot of older TS code uses the keyword syntax.
// To create 'private' members the TS-only way, we use the 'private' keyword:
class SecretAgent {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  getCodeName(): string {
    const idToCodeNameMap: Record<string, string> = {
      "007": "James Bond",
      "006": "Alec Trevelyan",
    };

    return idToCodeNameMap[this.id] || "Unknown Agent";
  }
}

const bond = new SecretAgent("007");
console.log(bond.getCodeName());

// console.log(bond.id); // Error: Property 'id' is private and only accessible within class 'SecretAgent'.

// Which syntax to pick between the '#' private members and TS 'private' members:
// The only reason TS-specific syntax for private fields exists is because JS didn't have the '#' syntax until ES2022. The '#' is the way to go because it is the JS-native way to write private members.
// The only use case for TS-specific syntax is if we need to target an older version of JS that doesn't support the '#' syntax.

// The 'protected' Class Fields:
// Protected class fields are similar to private fields, in the sense that protected fields cannot be accessed outside the class. The difference is that an extended class can inherit the protected class fields of the parent class, but not the private class fields. For instance, if we have an "Animal" class which is extended by a "Whale" class, the Whale class can inherit the protected class fields of Animal, but it cannot inherit the private class fields. If the Whale class is further exntended by a "BlueWhale" class, the BlueWhale class can still inherit the protected fields of Animal through the Whale class.
