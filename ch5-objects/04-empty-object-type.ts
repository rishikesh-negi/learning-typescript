// Empty Object Type:
// We saw that an empty array defaulted to the "any" type, and in some cases, to the "never[]" type. However, empty objects work differently in TS. In JS, almost everything (except for null & undefined types) is implemented as an object under the hood.
// For this reason, the type of a variable becomes "any" if we assign an empty object to it, because apart from null and undefined, all JS types are inherently objects BTS. Ex:
let a = {};

// This won't work:
// a.name = "John"; // Because there's no "name" property in the empty object type

// This works:
a = "asdf"; // Because "a" has an empty object type, which can translate to any type, except null & indefined

// So, when creating an empty object, we usually have to assign some type to it:
type Shinigami = {
  name: string;
  reiatsu: number;
  bankai?: string;
};

/*
let x: Shinigami = {};
x = "asdf"; // This doesn't work now since "x" has the Shinigami object type
*/

type Address = {
  name: string;
  domain: string;
};

type Mail = {
  from: Address;
  to: Address[];
  subject: string;
  body: string;
  urgent: boolean;
  cc?: Address[];
};

function processMail(mail: Mail) {
  let addresses = "";

  for (const address of mail.to) {
    addresses += `${address.name}@${address.domain}, `;
  }

  addresses = addresses.slice(0, -2);

  let copies = "";

  if (mail.cc) {
    copies = "\nCC:";
    for (const address of mail.cc) {
      copies += `${address.name}@${address.domain}, `;
    }

    copies = copies.slice(0, -2);
  }

  return `FROM: ${mail.from.name}@${mail.from.domain}
  TO: ${addresses}${copies}
  SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
  BODY: ${mail.body}`;
}
