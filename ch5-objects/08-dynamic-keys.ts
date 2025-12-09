// Dynamic Keys:
// Enhanced object literals allowed JS to have dynamic keys with dynamically created key names. TS also allows dynamic keys using the following index signature:
type UserMetrics = {
  [key: string]: number;
};
// The above type means that any UserMetric type object can have any number of properties if the keys are strings and the value of each is a number. The "key" identifier in the above type is used only to name the variable. It could be anything, and it doesn't influence the names of the actual keys the objects of UserMetrics type. It's common to just call that variable "key" when typing dynamic keys.

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

// There's another way to create an object with dynamic keys using Records in TS. A Record is just an object in TS. We can specify the types of key and value in a Record:
type MailPreferences2 = Record<string, boolean>;
// In the above type, Record<string, boolean> simply means that values of MailPreferences2 type are objects with keys being string and values being boolean.
// MailPreferences and MailPreferences2 are exactly the same for all purposes
