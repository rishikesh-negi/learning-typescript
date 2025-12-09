// Dynamic Default Properties:
// Sometimes, we need an object type where some properties are required, and the remaining properties are dynamic. Ex:
type FormData = {
  [field: string]: string;
  email: string;
  password: string;
};
// Here, "email" and "password" are the mandatory fields, and the object can have other dynamic (and optional) properties with string-type key and value.
// Dynamic properties should not be overused, especially with mandatory properties. Usually we should opt for a fully specific object or a fully dynamic one. There are very few niche use cases where dynamic and mandatory properties need to be used together in the same object.

type MailPreferences = {
  doNotDisturb: boolean;
  outOfOffice: boolean;
  [field: string]: boolean | string;
};

function canContact(preferences: MailPreferences) {
  return !(preferences.doNotDisturb || preferences.outOfOffice);
}
