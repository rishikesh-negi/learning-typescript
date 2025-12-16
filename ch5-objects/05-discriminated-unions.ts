// Discriminated Unions:
// "Discriminant properties" are incredibly useful when we're dealing with a type union where one or more type options aren't primitive but complex types. These complex types are usually object types.
// Usually, the object types in the union will have a common property (same name) with a different type/value in each type (discriminant property / discriminating value). Ex:
type MultipleChoiceQuestion = {
  kind: "multiple-choice";
  question: string;
  studentAnswer: string;
  correctAnswer: string;
};

type CodingLesson = {
  kind: "coding";
  studentCode: string;
  solutionCode: string;
};

type Lesson = MultipleChoiceQuestion | CodingLesson;
// Here, both types have a "kind" property that has a different type/value in each object type and is the discriminating value between them.

// TS is smart enough to infer the correct type based on the value of the "kind" property in a Lesson type object:
function isCorrect(lesson: Lesson): boolean {
  switch (lesson.kind) {
    case "multiple-choice":
      return lesson.studentAnswer === lesson.correctAnswer;
    case "coding":
      return lesson.studentCode === lesson.solutionCode;
  }
}
// We can see how determining the value/type of the discriminating property can allow us to access and use the correct object properties

type InternalAddress = {
  kind: "internal";
  firstName: string;
  lastName: string;
};

type ExternalAddress = {
  kind: "external";
  username: string;
  domain: string;
};

type Address = InternalAddress | ExternalAddress;

function formatAddresses(addresses: Address[]) {
  let formatted = "";
  for (const address of addresses) {
    if (address.kind === "internal") {
      formatted += `${address.firstName}.${address.lastName}@superai.io, `;
    }

    if (address.kind === "external") {
      formatted += `${address.username}@${address.domain}, `;
    }
  }

  return formatted.slice(0, -2);
}
