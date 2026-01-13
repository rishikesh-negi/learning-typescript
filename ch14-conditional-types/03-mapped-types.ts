// Mapped Types:
// Mapped types are a way to create new types with dynamic properties based on existing types. For example, assume the following Soldier type:
type Soldier = {
  name: string;
  age: number;
  branch: "garrison" | "military police" | "survey corps";
};

// And we want to create a new type that has the same properties, but all of them are optional. We can do that with a mapped type:
type OptionalSoldier = {
  [K in keyof Soldier]?: Soldier[K];
};
// 1. The "keyof" operator gets the keys of the Soldier type.
// 2. The "in" keyword iterates over them.
// 3. The "?" makes each property optional.
// 4. The Soldier[K] gets the value type each property maps to.
// The obvious benefit is that if we update Soldier, OptionalSoldier automatically gets updated.

// Changing the Values:
// Mapped types are really useful for making properties optional or readonly, but it's an incredibly powerful (and potentially dangerously confusing) tool. We can use them to change hte value type of properties:
type StringifiedSoldier = {
  [K in keyof Soldier]: string;
};

// -------------------------------------
type Blank<T> = {
  [K in keyof T]: null;
};

function resetForm<T extends {}>(form: T): Blank<T> | undefined {
  if (Object.keys(form).length === 0) return;

  const res = {} as Blank<T>;

  for (const key in form) {
    res[key] = null;
  }

  return res;
}
// In the resetForm function, we're looping over the keys of "form" and adding them to "res" with their a null value. So, we're 100% certain that "res" will end up being an object of type Blank<T>, which is why the type assertion or "as casting" done above is fine. This is one of those rare situations where type assertion can be done.
