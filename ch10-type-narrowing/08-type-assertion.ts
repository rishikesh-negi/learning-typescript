// Type Assertion:
// There are many ways we can mess up our TS code, but there are also ways in which TS can mess up and not know enough. Sometimes we know more about a value's type than TS, albeit it's a rare occurrence. That's where the 'as' keyword comes in.

// For example, there might be many instances where we might know for sure that a certain query parameter is always going to be a string (because we know how our backend is implemented). But our front-end code might have the type (string | string[]) for it, which also makes sense because query params can be arrays.

// So, we might want to do something like: const userId = route.query?.userId.toLowerCase();
// But the (string | string[]) type won't allow us to do so.
// So, because we know it's never going to be an array, we just use 'as string' to do the operation:
// const userId = (route.query?.userId as string).toLowerCase();

// The 'as' keyword allows us to tell TS that even though it thinks that a value is of a certain type, it should trust us when we tell it that the type is actually the one we're specifying.

// Example:
// We have the following variable in our code:
let x: number | string;

// At some point in our code, we know for a fact that 'x' is going to be a string:
x = "hello, world";
// So we might want to use some string methods on it. However, TS will prevent us from doing so because of the type assigned to 'x'. So, we would have to use type assertion in that situation:
const xUpperCase = (x as string).toUpperCase();

// We also use 'as' to assert a captured network response of "unknown" type into the expected "shape":
type User = {
  id: string;
  name: string;
};

async function getUserRaw(userId: string): Promise<unknown> {
  const res = await fetch(`/api/users/${userId}`);
  return res.json();
}

async function getUser(userId: string) {
  const data = await getUserRaw(userId);

  // Here, data still has the "unknown" type. So, we assert it to the "User" type:
  return data as User;
}

// Angle Bracket Syntax:
// The alternative syntax for type assertion using angle brackets and the type before the value:
// const userIdRaw = <string>route.query?.userId;
// const userId = userIdRaw.toLowerCase();
// This syntax is practically never used for type assertions (aka as-casting) because the angle bracket syntax is heavily used for generic types, which are to be covered in the upcoming sections. The 'as' keyword is far more readable and should be used for those reasons.

// Type assertion should be used carefully and mindfully because it is a potential source of errors and bugs in our code. If we use the 'as' keyword for type assertion and we turn out to be wrong about the type of the variable or value we're dealing with, TS will NOT throw a compile-time error. The errors and bugs would make their way to the run time. So, 'as' should be used only when necessary, which is not very often.
// A simple type narrowing using conditionals, switch statement, ternaries, short-circuiting, etc., is usually the way to go, unless we're extremely confident about the type of the value at a given point of the code. Conditional narrowing is safer because it doesn't involve assumptions.

type OrderData = {
  id: string;
  accountType: "free" | "premium";
  amount: number;
  contact: {
    email: string;
    phone: string;
  };
};

function handleSuccessfulOrder(orderResponse: unknown): string {
  const { accountType, contact } = orderResponse as OrderData;

  let welcome: string;

  switch (accountType) {
    case "free":
      welcome = "Welcome to Support.ai!";
      break;
    case "premium":
      welcome = "Welcome to Support.ai Pro!";
      break;
  }

  return `To ${contact.email}: ${welcome}`;
}
