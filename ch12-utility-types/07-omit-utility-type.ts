// 'Omit' Utility Type:
// The Omit<T, K> utility type is the opposite of Pick<T, K>. It creates a new derived type by excluding a set of properties from an existing type. It is very useful for removing sensitive or unnecessary data from a type. For instance, we need to remove a password field from a user object before responding to an API request:
interface DatabaseUser {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}

type PublicUser = Omit<DatabaseUser, "passwordHash" | "updatedAt">;

function getUserProfile(userId: string): PublicUser {
  // User fetched from the DB:
  const dbUser: DatabaseUser = {
    id: userId,
    username: "johndoe",
    email: "john@example.com",
    passwordHash: "J0hnD03",
    createdAt: new Date("2022-01-15"),
    updatedAt: new Date(),
  };

  // const { id, username, email, createdAt } = dbUser;
  const { id, username, email, createdAt, passwordHash } = dbUser;

  // return { id, username, email, createdAt, passwordHash }; // Error: Object literal may only specify known properties, and 'passwordHash' does not exist in type 'PublicUser'.

  // return the public profile of the user:
  return { id, username, email, createdAt };
}

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

type UserWithNoID = Omit<User, "id">;

function stripID(user: User): UserWithNoID {
  const { name, email, age } = user;
  return { name, email, age };
}
