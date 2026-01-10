// Partial Utility Type:
// All utility types have a very similar signature: Some sentence-cased keyword followed by a type enclosed within angle brackets. There are several built-in utility types that transform existing types into new ones. One of the most useful is Partial<T>, which makes all properties ofa type optional. For example:
type User = {
  id: string;
  name: string;
  email: string;
};

// Without Partial:
function updateUser(
  userId: string,
  userInfo: {
    id?: string;
    name?: string;
    email?: string;
  }
) {
  // Some logic...
}

// With Partial:
function updateUserWithPartial(userId: string, userInfo: Partial<User>) {
  /* Some logic... */
}
// Instead of copying and pasting the type definition, the Partial<T> utility type allows us to generate a new type based on the existing one. It also means that if the original got updated, the new type created with Partial<T> type will automatically relfect the changes.

// Partial utility type makes all the required properties of a type optional. A common use case for it would be in forms that we create for users to fill and submit, because the form is initially blank, and each field gets filled gradually.

// Nested Objects:
// Partial<T> only makes the top-level properties optional:
type UserNested = {
  id: string;
  name: string;
  preferences: {
    theme: string;
    notifications: boolean;
  };
};

// Using Partial<UserNested> will give us:
type LooseUserNested = {
  id?: string;
  name?: string;
  preferences?: {
    theme: string;
    notifications: boolean;
  };
};
// The 'theme' and 'notification' properties are still required, assuming 'preferences' is provided

interface UserInterface {
  id: string;
  email: string;
}

function updateUser1(user: Partial<UserInterface>) {
  if (user.id) return "The id cannot be changed";
  if (user.email) return `updating email to ${user.email}`;

  return `nothing to update`;
}
