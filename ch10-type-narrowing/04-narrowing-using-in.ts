// Narrowing Using "In"
// Here's where we start discussing some advanced type narrowing in TS. The 'in' operator is a JS feature to check if a property exists in an object, which is fantastic for type narrowing:
type TextMessage = {
  content: string;
  sentAt: Date;
};

type ImageMessage = {
  caption: string;
  sentAt: Date;
};

type VideoMessage = {
  duration: number;
  sentAt: Date;
};

type Message = TextMessage | ImageMessage | VideoMessage;

function displayMessage(message: Message) {
  if ("content" in message) {
    console.log(`Text content: ${message.content}`);
  }

  if ("caption" in message) {
    console.log(`Image caption: ${message.caption}`);
  }

  if ("duration" in message) {
    console.log(`Video duration: ${message.duration}`);
  }
}

// Discriminated Unions vs 'in' Checks:
// The above logic is very similar to using discriminated unions. The above types can also be written with an explicit discriminant property:
type TextMsg = {
  kind: "text";
  content: string;
  sentAt: Date;
};

type ImageMsg = {
  kind: "image";
  caption: string;
  sentAt: Date;
};

type VideoMsg = {
  kind: "video";
  duration: string;
  sentAt: Date;
};

// So, which one should we use for type narrowing?
// If we are creating our own types and have complete control over them, we should always prefer discriminated unions. The 'in' operator isn't ideal when multiple types have overlapping properties.
// If we're dealing with types from third-party libraries or with code that we have no control over, we can rely on the 'in' operator since we won't know about the discriminants, if any.

type ImageAttachment = {
  fileSize: number;
  width: number;
  height: number;
};

type DocumentAttachment = {
  fileSize: number;
  numPages: number;
};

type FileAttachment = {
  fileSize: number;
};

type Attachment = ImageAttachment | DocumentAttachment | FileAttachment;

function processAttachment(attachment: Attachment): string {
  if ("width" in attachment)
    return `Attached image, size: ${attachment.fileSize}, dimensions: ${attachment.width} x ${attachment.height}`;

  if ("numPages" in attachment)
    return `Attached document, size: ${attachment.fileSize}, pages: ${attachment.numPages}`;

  return `Attached file, size: ${attachment.fileSize}`;
}
