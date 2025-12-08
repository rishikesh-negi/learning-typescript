// Optional Object Properties:
// This TS feature is incredibly useful and is used very often. Just like a function can have optional parameters, objects can have optional properties. Optional properties can be added to an object type with the '?' operator:
type Shinigami = {
  name: string;
  reiatsu: number;
  bankai?: string;
};
// This makes it so that the type of the "bankai" property is (string | undefined), just like optional parameters.

type Mail = {
  from: string;
  to: string[];
  subject: string;
  body: string;
  urgent: boolean;
  cc?: string[];
};

function processMail(mail: Mail) {
  return `FROM: ${mail.from}
  TO: ${mail.to.join(", ")}
  ${mail.cc ? mail.cc.join(", ") : ""}
  SUBJECT: ${mail.subject}
  BODY: ${mail.body}`;
}
