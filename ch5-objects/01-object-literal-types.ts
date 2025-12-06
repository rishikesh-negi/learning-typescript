// Object Literal Types:
// TS object literal types provide us with the ability to specify the structure, format, and the type of each object property. Ex:
type Shinigami = {
  name: string;
  reiatsu: number;
  bankai: string | null;
};

function logShinigami(shinigami: Shinigami) {
  console.log(
    `${shinigami.name} has a reiatsu level of ${shinigami.reiatsu}${
      shinigami.bankai ? ` and a bankai called ${shinigami.bankai}` : "."
    }`
  );
}
logShinigami({
  name: "Kurosaki Ichigo",
  reiatsu: 10_000_000,
  bankai: "Tensa Zangetsu",
});

logShinigami({
  name: "Hanataro Yamada",
  reiatsu: 10_000,
  bankai: null,
});
// Object literal types provide autocomplete and intellisense for objects of a specified type throughout our project and make refactoring much easier.

type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
};

function processMail(mail: Mail) {
  console.log(`FROM: ${mail.from}
    TO: ${mail.to}
    SUBJECT: ${mail.urgent ? "[URGENT] " : ""} ${mail.subject}
    BODY: ${mail.body}
    `);
}
// Here, because the Mail type is applied to the "mail" parameter, we get auto-complete while accessing the properties of "mail"
