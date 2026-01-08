// Non-Null Assertion:
// It is common for TS libraries to assume that a value can null or undefined, even when we know it logically cannot be. We can assert that a value is not null or undefined, i.e., the value is not optional, using the non-null assertion '!' operator. It tells the compiler that a value cannot be null or undefined, even when the type sustem thinks it might be:

// Assume getCleanedText is a function that returns a string | null:
// import { getCleanedText, sendText } from "./text-utils";

// const cleanedText = getCleanedText("some text");
// Here, we know that the function cannot return null because we passed a valid string as argument.

// Assume sendText expects a string input. So, we use a non-null assertion:
// sendText(cleanedText!);

// This assertion is commonly used when working with optional properties that we know exist in the object:
interface User {
  id: string;
  name?: {
    first: string;
    last: string;
  };
}

function sentText(firstName: string) {
  return `Text sent to ${firstName}`;
}

const user: User = {
  id: "5nhkusghf78as",
  name: {
    first: "Jason",
    last: "Bourne",
  },
};

// Assume that the User type/interface comes from a library and we don't control it, but we do know that we always use the "name" property in all our objects of type User:
sentText(user.name!.first);

// The non-null assertion is similar to type assertion in the sense that we're overriding TS's default behavior in both cases. So, just like with type assertion, the use of non-null assertions requires caution and absolute confidence in the expected type of the value.

// If there's even a shred of uncertainty about the expected type of a value, use a conditional guard. It's always safer, albeit more verbose:
/*
function sendTextSafely(text: string | nul) {
  if (text === null) throw new Error("Text is required");
  sendText(text);
}
*/

type OrderData = {
  id: string;
  accountType: "free" | "premium";
  amount: number;
  contact: {
    email: string;
    phone: string;
  };
};

function sumOrders(orders: OrderData[]): number {
  return orders.reduce((sum, next) => sum + next.amount, 0);
}

function reportOrders(orders: OrderData[] | null): string {
  const totalAmount = sumOrders(orders!);

  return `Total amount for orders: ${totalAmount}`;
}
