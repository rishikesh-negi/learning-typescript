// Enum Compilation:
// We've discussed that unlike most TS features, Enums generate more JS code than the original Enum code at runtime. An example of Enum compilation from TS to JS:
// TS Enum:
enum Class {
  Rogue,
  Mage,
  Warrior,
  Priest,
}

// JS Object:
/*
var Class;
(function (Class) {
  Class[(Class["Rogue"] = 0)] = "Rogue";
  Class[(Class["Mage"] = 1)] = "Mage";
  Class[(Class["Warrior"] = 1)] = "Warrior";
  Class[(Class["Priest"] = 1)] = "Priest";
})(Class || (Class = {}));
*/
// This generated JS code creates the bidirectional mapping we discussed earlier:
// From name to value: Class["Rogue"] = 0
// From value to name: Class[0] = "Rogue"

// String Enum Compilation:
enum ClasString {
  Rogue = "Rogue",
  Mage = "Mage",
  Warrior = "Warrior",
  Priest = "Priest",
}

// Compiled JS Object:
/*
var ClassString;
(function (ClassString) {
  ClassString["Rogue"] = "Rogue";
  ClassString["Mage"] = "Mage";
  ClassString["Warrior"] = "Warrior";
  ClassString["Priest"] = "Priest";
});
*/
// String Enums don't support reverse mapping. The compiled JS only maps from name to string, not the other way round

enum InternalErrors {
  InvalidPrompt = 1001,
  ContextWindowOverflow = 1004,
  ModelOverload = 1420,
  EthicalGuardrailTriggered = 2233,
  TokenLimitExceeded = 2401,
  SelfAwarenessAchieved = 9999,
}

function getErrorLabel(errorCode: InternalErrors): string {
  const errorName = InternalErrors[errorCode];

  if (errorName) {
    return `${errorCode}: ${errorName}`;
  }

  return `${errorCode}: Unknown Error`;
}
