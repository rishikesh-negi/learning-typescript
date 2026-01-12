// Conditional Types:
// It is a very advanced features that, while useful in really tricky modelling situations, is rarely needed in application-level code.

// NOTE: As a general rule, advanced TS features are more useful in library code that needs to be more flexible, abstract, and reusable. Application-level TS code is generally much simpler and more concrete. When writing application code, aside from the primitive types, we usually stick to creating and using object types. There is a huge difference between the TS features frequently used by application developers vs those used by library authors. Application developers only need to know roughly 20% of all of TS. Library authors need to know the advanced nitty-gritty features of TS.

// Conditional types allow us to create new types based on conditions within the type system. They take this form:
// type NewType = SomeType extends OtherType ? TrueType : FalseType;

// It reads like a ternary expression: "If SomeType extends (satisfies) OtherType, then NewType is TrueType; otherwise, it's FalseType". Example:
type IsString<T> = T extends string ? true : false;

// Usage:
type Result1 = IsString<"hello">; // true
type Result2 = IsString<42>; // false
type Result3 = IsString<string>; // true

// TS actually ships with some built-in conditional types:
/*
type Extract<T, U> = T extends U ? T : never;
type Exclude<T, U> = T extends U ? never : T;
type NonNullable<T> = T extends null | undefined ? undefined : T;
*/

// When conditional types are useful:
// Assume we have an event that can fire in our front-end application:
type ClickEvent = { type: "click"; x: number; y: number };
type KeyEvent = { type: "key"; key: string };
type MouseMoveEvent = { type: "mousemove"; x: number; y: number };
type FormEvent = { type: "submit"; formId: string };

type Event = ClickEvent | KeyEvent | MouseMoveEvent | FormEvent;
// It may be useful to dynamically create a type that only includes "mouse-related" events: the ones that have an 'x' and 'y' property. We can use the Extract conditional type to do so:
type Extract<T, U> = T extends U ? T : never;

type MouseEvents = Extract<Event, { x: number; y: number }>;
// Now, MouseEvents is the same as: ClickEvent | MouseMoveEvent. The difference is that it's dynamic. If we add more events to the Event union, MouseEvents will automatically include them if they match the condition of 'x' and 'y' properties existing in the type.

// ------------------------------------
type SentimentString<T> = T extends { angry: true }
  ? "mad" | "furious"
  : "content" | "happy";
