// Double Assertion;
// TS doesn't allow for ridiculous assertions like:
const num = 42;

// const str = num as string; // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first.
// The 'number' and 'string' types have no overlap, making this assertion likely to be a mistake, so TS compains.

// We can get around this with a double assertion:
const id = 42;

// This works but is very unsafe:
const userId = id as unknown as string;
// This is something that we can use in development for debugging, testing sessions, or conversion of JS code to TS. We will virtually never do this or find this in production code, because this is equivalent to escaping TS's type system. But, should an extremely rare situation that demands a double assertion for the code to work arise, we know we can use it.
