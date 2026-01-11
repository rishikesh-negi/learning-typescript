// 'Pick' Utility Type:
// The Pick<T, K> utility type is probably the most commonly used one in TS. It creates a new type by selecting a subset of properties from an existing type. For example:
// Comprehensive type:
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  inStock: boolean;
  images: Array<string>;
  reviews: { user: string; rating: number; text: string }[];
}

// Derived type:
type ProductSummary = Pick<Product, "id" | "name" | "price">;

const productList: ProductSummary[] = [
  { id: "p1", name: "Keyboard", price: 79.99 },
  { id: "p2", name: "Mouse", price: 59.99 },
];

const invalidProduct: ProductSummary = {
  id: "p3",
  name: "Headphones",
  price: 99.99,

  // TSC Error: Object literal may only specify known properties, and 'description' does not exist in type 'ProductSummary'.:
  // description: "Noise-cancelling headphones",
};

// The Pick utility type is very useful because it allows us to narrow down a bigger type into various different derived types, making the bigger type a "single source of truth".

interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

type UserWithNoID = Pick<User, "name" | "email" | "age">;

function stripID(user: User): UserWithNoID {
  const { name, email, age } = user;

  return { name, email, age };
}
