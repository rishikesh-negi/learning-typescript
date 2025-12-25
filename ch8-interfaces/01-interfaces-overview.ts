// Interfaces Overview:
// In TS, 'type' and 'interface' keywords are often used interchangeably to give defined structure to an object.
type SuperheroType = {
  name: string;
  powers: string[];
  isImmortal: boolean;
};

interface SuperheroInterface {
  name: string;
  powers: string[];
  isImmortal: boolean;
}

// The above type and interface both contain identical descriptions of an object. In such cases, the 'type' keyword is prefereable ALMOST every single time.
// If we declare two types with the same name, TS will raise an error and tell us to solve the naming conflict. However, if we define multiple interfaces with the exact same name, TS will silently merge them into one larger interface at compile time.
// So, these interfaces:
interface Spaceship {
  name: string;
}
interface Spaceship {
  engines: number;
}
interface Spaceship {
  lightSpeed: boolean;
}

// Combine to turn into this interface at compile time;
interface Spaceship {
  name: string;
  engines: number;
  lightSpeed: boolean;
}
// 99% of the time, this behavior is not what we want. It can compromise type safety and introduce bugs that TS is supposed to eliminate at compile time, in the first place.

// There are two situations where using 'interface' instead of 'type' is ideal:
// ----- 1. When the declaration merging is intentional and deliberate. This happens when we need to augment a global base type. For instance, let's say we want to augment the global 'Window' object/namespace by adding some useful properties to it in out scripts:
declare global {
  interface Window {
    google: Google;
  }
}

interface Google {
  accounts: {
    prompt: () => void;
  };
}

window.google; // TS now sees this as type Google
// This technique is actually used by developers to allow users to sign in with Google on their platform
// The 'type' keyword cannot be used to augment the built-in "Window" type with it, but we can merge types into it using 'interface'
// -----

// ----- 2. The only other time we might need to use an interface is when we're extending it. With the 'type' keyword, we use intersections to add properties to an existing type. With interfaces, we instead use the 'extends' keyword:
interface Character {
  name: string;
  reiatsu: number;
}

interface Shinigami extends Character {
  zanpakutou?: string;
  kidoLevel: number;
  transformations: ["base", "shikai"?, "bankai"?];
}
// Type intersection and interface merging both work just fine, but TS wiki recommends using interface extends over type intersections, because interfaces create a single flat object type that detects property conflicts, which are usually important to resolve. Intersections simply recursively merge properties, and produce 'never' type for conflicting ones, just as we've learned. So, interface merging is a bit safer and compiles faster, which helps keep tooling performance snappy. There are more reasons why interfaces are preferred for merging, which can be read here:
// https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections

// So, apart from the above two cases discussed, we should always prefer 'type' over 'interface'.
