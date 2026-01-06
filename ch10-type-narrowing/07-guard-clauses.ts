// Guard Clauses:
// Guard clasues (conditional early returns) are already used in JS. In TS, they are a way to quickly narrow down types within a function. Peak production TS code is often riddled with 'undefined' and 'null' types due to the nature of I/O and external APIs. So, this is a classic pattern:
function processName(name: string | null | undefined) {
  if (name === null || name === undefined) return "";

  // TS knows 'name' is a string here:
  return name.toUpperCase();
}
// Here, an empty string keeps the function's behaviour consistent by having it return a string in all cases. But depending upon the situation, it might make more sense to throw an error instead:

function processName1(name: string | null | undefined) {
  if (name === null || name === undefined) throw Error("Name is required");

  return name.toUpperCase();
}
// Interestingly, throwing an error still narrows the type, but doesn't change the function signature - this function still only returns a string. That's because errors in JS and TS are control flow mechanisms, not a type mechanism. So, we do sort of need to be aware, "hey this function can throw an error, I need to handle that".

// In cases where returning an empty string doesn't break the program logic, we can simply coalesce to an empty string instead of throwing an error. This happens all the time with optional fields in web apps.

type UserFeedback = {
  email?: string;
  rating?: number;
};

function handleFeedback(feedback: UserFeedback) {
  if (feedback.rating == null || !isValidRating(feedback.rating))
    return "Provide a rating between 1 and 5";

  if (feedback.email == null || feedback.email.includes("@"))
    return "Provide a vlid email address";

  return `Thanks, ${getEmailUsername(
    feedback.email ?? ""
  )}! Rating: ${ratingToString(feedback.rating)}`;
}

function getEmailUsername(email: string): string {
  const atIndex = email.indexOf("@");

  return atIndex !== -1 ? email.slice(0, atIndex) : email;
}

function isValidRating(rating: number): rating is 1 | 2 | 3 | 4 | 5 {
  return [1, 2, 3, 4, 5].includes(rating);
}

function ratingToString(rating: 1 | 2 | 3 | 4 | 5): string {
  switch (rating) {
    case 1:
      return "Very Bad";
    case 2:
      return "Bad";
    case 3:
      return "Average";
    case 4:
      return "Good";
    case 5:
      return "Very Good";
    default:
      throw new Error(`Invalid rating provided: ${rating satisfies never}`);
  }
}
