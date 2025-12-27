// Declaration Merging:
// Here's the quirk that makes devs prefer types over interfaces. Declaration merging, while useful in niche cases (like modifying or augmenting the global Window type on the front-end), often leads to confusing and difficult-to-solve bugs.

// We know that different interfaces declared with the same name get merged into one by TS.
// We cannot declare a type with the same name as that of an existing one. We get an error, preventing us from introducing confusing bugs in our code.
// For this reason, types are much safer to use, and should be preferred over interfaces in 95-99% of the cases
