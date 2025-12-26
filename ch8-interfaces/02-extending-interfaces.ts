// Extending Interfaces:
// When we need to extend types, it's better to use interfaces instead of types, even though we learned that we should almost always prefer types over interfaces. Interfaces are slightly better when it comes to extending other interfaces (inheriting properties):

// With types, we use the & (intersection) operator to extend types. With interfaces, we use the "extends" keyword:
interface Character {
  name: string;
  level: number;
}

interface Wizard extends Character {
  spellbook: string[];
  mana: number;
}

// Wizard now has all four properties: name, level, spellbook, mana

// Why interface extends are usually better:
// Source - Microsoft Wiki (https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections):
// Interfaces create a single flat object type that detects property conflicts, which are usually important to resolve! Intersections on the other hand just recursively merge properties, and in some cases produce 'never'. Interfaces also display consistently better, whereas type aliases to intersections can't be displayed in part of other intersections. Type relationships between interfaces are also cached, as opposed to intersection types as a whole. A final noteworthy difference is that when checking against a target intersection type, every constituent is checked before checking against the "effective"/"flattened" type.
// Interfaces are slightly more performant when large and complicated extends are needed. This is usually true for very large enterprise applications.
// For this reason, extending types with interfaces/extends is suggested over creating intersection types.
// With interfaces, the developer ergonomics are alightly better and compilation is slightly faster.

interface Message {
  id: string;
  sender: string;
  recepient: string;
  timestamp: number;
}

interface TextMessage extends Message {
  text: string;
  carrier: string;
}

interface EmailMessage extends Message {
  subject: string;
  body: string;
}

function getEmailDescription(email: EmailMessage): string {
  return `[EMAIL] ${email.subject}: ${email.body}`;
}

function getTextMessageDescription(text: TextMessage): string {
  return `[TEXT] ${text.text} - Sent via ${text.carrier}`;
}

// We can combine types and interfaces when extending them. We can have an interface extend a type alias, and a type intersect with an interface. TS doesn't care which is which, because BTS, they do the exact same thing. So, we can extend a type or an interface. However, it is not recommended to mix them, unless we specifically need a feature of one category in the other.
