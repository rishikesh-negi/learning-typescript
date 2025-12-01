// In TS, certain types are way too long to be written multiple times. For instance, a function type that has a return value of function type and has several parameters, one of which accepts a function value will be extremely complicated to type in TS. To simplify this messy typing, TS provides type aliases. A type alias is a type that is some other, already defined type, but with a new name. They are similar to reusable variables, in principle. If a variable x has the value of 2 + 2, we can use x wherever we need the value 2 + 2.
// So, type aliases are like variable that store type information instead of a specific value.
// Creating and using a type alias:
type LoggerCallback = (s1: string, s2: string) => string;

export function setLoggerTimeout(LoggerCallback: LoggerCallback) {
  // do something
}
// Here, the setLoggerTimeout function expects a callback function as an argument. By defining the type and structure of the callback function as the LoggerCallback type alias, the function type can be reused using the LoggerCallback alias wherever needed.
