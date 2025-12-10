// PropertyKey:
// When we create and use dynamic property keys, the type of the keys is usually "string". However, JS also supports numbers and symbols as keys. A symbol is a unique, immutable data type that may be used as an object property name. It's similar to a string but is guaranteed to be unique.
// PropertyKey is a built-in type that can be used to define any type that an object key can be. Following is the built-in definition of the PropertyKey type:
// type PropertyKey = string | number | symbol;

// Ex:
type InfrastructureTags = {
  [key: PropertyKey]: any;
};
// In the above type, the key can be of (string | number | symbol) union type, which means that an object of type InfrastructureTags can contain properties of ([key: string]: any), ([key: number]: any), and ([key: symbol]: any) type. This can be confirmed by hovering over the InfrastructureTags type identifier.

const johnsServer: InfrastructureTags = {
  name: "John's Server",
  1: 420,
  [Symbol("role")]: "Admin",
};

const TWO_FACTOR = Symbol("twoFactor");
const BIOMETRIC_LOCK = Symbol("biometricLock");

type MailPreferences = {
  [key: PropertyKey]: boolean | string;
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [TWO_FACTOR]: boolean;
  [BIOMETRIC_LOCK]: boolean;
};

function isSecure(preferences: MailPreferences) {
  return preferences[TWO_FACTOR] ?? preferences[BIOMETRIC_LOCK];
}
