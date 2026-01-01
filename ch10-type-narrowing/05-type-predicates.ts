// Type Predicates:
// It is an advanced TS feature that we don't use very often, but it can be very powerful in suitable situations. It allows us to create our own type narrowing in TS.
// Sometimes, the built-in JS guards like 'typeof', 'instanceof', etc., are not enough.
// TS allows us to create our own type guards using "type predicates". We do that by creating a function that:
// 1. Accepts a wide type that we want to narrow.
// 2. Returns a Boolean indicating if the value is of the desired type.
// 3. Uses the type predicate syntax "value is Type" in the return type.

// For instance, here's a function that reports if a value is a string:
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) console.log(value.toUpperCase());
}
// For this simple function, we could've used 'typeof'. But type predicates become really useful when the logic to check the type is more complex.

// So, we have a situation below where one type (ManagerAdmin) shares properties with both other types:
interface ManagerAdmin {
  accessLevel: number;
  numEmployees: number;
}

interface Admin {
  accessLevel: number;
  payrollDate: Date;
}

interface Manager {
  numEmployees: number;
}

// We can encapsulate the slightly more complex logic in a type predicate function:
function isManagerAdmin(
  boss: ManagerAdmin | Admin | Manager
): boss is ManagerAdmin {
  return "numEmployees" in boss && "accessLevel" in boss;
}

const boss = {
  accessLevel: 10,
  numEmployees: 20,
};

if (isManagerAdmin(boss)) {
  console.log(`Managing ${boss.numEmployees} employees`);
}

// -------------------------
type ModelSkippity = {
  version: "3.5" | "4" | "4s";
  search: boolean;
};

type ModelJean = {
  version: "2" | "3" | "3.14";
  think: boolean;
};

type Model = ModelSkippity | ModelJean;

function isModelSkippity(model: Model): model is ModelSkippity {
  return (
    "search" in model &&
    (model.version === "3.5" || model.version === "4" || model.version === "4s")
  );
}

function isModelJean(model: Model): model is ModelJean {
  return (
    "think" in model &&
    (model.version === "2" || model.version === "3" || model.version === "3.14")
  );
}

function activateModel(model: Model) {
  if (isModelSkippity(model))
    return `Activated model Skippity version ${model.version} with searching ${
      model.search ? "enabled" : "disabled"
    }`;

  if (isModelJean(model))
    return `Activated model Jean version ${model.version} with thinking ${
      model.think ? "enabled" : "disabled"
    }`;
}

// PITFALLS of Using Type Predicates:
// If we mess up the checks in the boolean expression returned by the type predicate function or accidentally reference the wrong type in its return type, TS will not know that we made a mistake. So, wherever in our code we use the type predicate, the type predicate function will provide incorrect information or indications, and TS will raise an error thinking that we used a value of the wrong type even if it's correct, which makes it difficult to work with our code.
// So, we should use type predicates sparingly, and whenever we do use them, we should be extra careful with their implementations. We also need to make sure that we have good testing around the functions to make sure they behave exactly as expected, because a single error in a function can propagate throughout our entire application, ruining our type safety.
