// Extra Properties:
// This TS feature only improves the DX in the editor, but it has no utility when it comes to the logic and execution of TS code.
// In JS, if we have a function that takes an object as input and uses some of its properties, it doesn't matter if the input object has some extra properties that the function does not need.
// TS works in the same way for the most part. If a function parameter's object type specifies some required properties, we can pass an object containing those properties plus some other properties that the function doesn't need. However, the input object should have all the required properties.
// However, when we pass an object literal into a function, TS performs "excess property checking". This means it also will not allow extra properties into the function. Ex:
type Spaceship = {
  name: string;
  speed: number;
};
// and we create an object with an extra property:
const falcon = {
  name: "Millenium Falcon",
  speed: 75,
  weapons: 4,
};
// We can pass "falcon" into a function that expects a Spaceship object:
function pilot(ship: Spaceship) {
  console.log(`Piloting ${ship.name} at ${ship.speed}.`);
}

// This is fine because falcon inherits the Spaceship type since it meets the minimum requirements:
pilot(falcon);

// However doing the following will result in a TS error because the "weapons" property is not required, and TS is built to help developers avoid passing properties that aren't needed:
// pilot({ name: "Millenium Falcon", speed: 75, weapons: 4 });

// This makes sense because if we're passing an object that has other purposes, contains other properties that are useful elsewhere, or came from an external source, we have very little control over the object's contents. TS will allow us to pass such an object as function input if it meets the minimum requirements (has the required properties). However, if we're hard-coding the object by passing an object literal into the function, TS will tell us to get rid of the extra properties.
// In the above example, since "falcon" is a variable that holds an object, TS understands that the object may also be needed elsewhere, and the "weapons" property may be useful there. So, it allows us to pass "falcon" as function input. However, when we pass the exact same object as an object literal, TS tells us to get rid of the extra code because it knows that the object is not being used anywhere else.
// Another use case of this feature is that it can instantly detect a typo and let the developer know that they are including the wrong property in the input object.

type Mail = {
  from: string;
  to: string[];
  cc: string[];
  subject: string;
  body: string;
  urgent: boolean;
};

function proccessMail(mail: Mail) {
  return `FROM: ${mail.from}
  TO: ${mail.to.join(", ")}
  CC: ${mail.cc.join(", ")}
  SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
  BODY: ${mail.body}`;
}
