// Dynamic Keys:
// Enhanced object literals allowed JS to have dynamic keys with dynamically created key names. TS also allows dynamic keys using the following index signature:
type UserMetrics = {
  [key: string]: number;
};
// The above type means that any UserMetric type object can have any number of properties as long as each property's key is a string and the value is a number. The identifier "key" in the above type is used only to name the variable in the type definition. It could be anything, and it doesn't influence the names of the actual keys UserMetrics type objects. It's common and intuitive to just call that variable "key" when typing dynamic keys.

type MailPreferences = {
  [key: string]: boolean;
};

function setPreference(
  preferences: MailPreferences,
  key: string,
  value: boolean
) {
  const exists = key in preferences;
  preferences[key] = value;

  return exists;
}

// There's another way to create an object with dynamic keys using Records in TS. A Record is just an object in TS. We can specify the types of keys and values in a Record:
type MailPreferences2 = Record<string, boolean>;
// In the above type, Record<string, boolean> simply means that values having the MailPreferences2 type are objects with the keys being strings and values being boolean.
// MailPreferences and MailPreferences2 are exactly the same for all purposes
