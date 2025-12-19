// "As Const" and Object.freeze()
// The "as const" assertion is one of the most overlooked but a very powerful feature of TS. It creates a read-only type using literal values.
// It makes even object-based data structures like arrays, sets, maps, etc., truly read-only and immutable at compile-time, unlike JS, which allows object-based values declared with 'const' to be immutable. Ex:
const constColors = ["red", "green", "blue"] as const;
// constColors.push("yellow"); // Error: Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'

// It works great with objects too, and unlike most utility types and Object.freeze(), it automatically makes all nested structures read-only as well. Ex:
const configConst = {
  apiUrl: "https://api.bleach.com",
  admins: {
    kyoraku: "shunsui",
    genryusai: "yamamoto",
  },
  features: ["bankai", "kido spells", "head captains"],
} as const;

// configConst.apiUrl = "https://api/tybw.com"; // Error: Cannot assign to 'apiUrl' because it is a read-only property.
// configConst.admins.kyoraku = "baka"; // Error: Cannot assign to 'kyoraku' because it is a read-only property.

// If the above configConst object was created in JS with the Object.freeze() method, the top level of the object would be immutable, and while we couldn't change the object-based value of "admins" and "features", we could still add to or remove elements from them, making the object only partially immutable

// All TS features are stripped away and removed at runtime, but Object.freeze() prevents modifications to the top level of an object even at runtime. It makes the object immutable but does not affect TS's type system:
const frozenConfig = Object.freeze({
  apiUrl: "https://api.bleach.com",
  admins: {
    kyoraku: "shunsui",
    genryusai: "yamamoto",
  },
  features: ["bankai", "kido spells", "head captains"],
});

// frozenConfig.apiUrl = "https://api.tybw.com"; // Error: Cannot assign to 'apiUrl' because it is a read-only property.

frozenConfig.features.push("age over 1000 years"); // This is fine because nested properties aren't frozen
// Object.freeze() is a runtime operation but TS is smart enough to recognize that Object.freeze() is being called, so it gives us a compile-time error when object mutation is attempted. Object.freeze works fine for objects that have no nested properties, by making them immutable at compile-time (because of TS) and runtime.
// Using the "as const" assertion is enough to avoid accidental object mutations, but, if for some reason, we need the object to be immutable at runtime, we can combine the "as const" assertion with Object.freeze()
