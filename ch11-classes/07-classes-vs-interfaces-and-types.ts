// Classes vs Interfaces & Types:
// Knowing about classes, interfaces, and types begs the question: When should we use classes to create reusable object types over interfaces and type aliases. Here are three ways to model the same thing:
class HeroClass {
  name: string;
  health: number;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
  }
}

interface HeroInterface {
  name: string;
  health: number;
}

type HeroType = {
  name: string;
  health: number;
};

// The major difference between classes and the other two ways is that classes are built into JS and they are runtime-focused. Type aliases and interfaces are TS-specific. Classes provide extra utility like pre-built functions with implementation compared to the other two ways. Generally, type aliases are used most often (more than 90% of the time), and classes are used rarely. Classes are ideal when OOP is needed, because they enable subclasses, abstract classes, and other powerful OOP features.
// The main benefit of types and interfaces is that they don't add any extra overhead on the runtime and are lightweight and easier to use.
