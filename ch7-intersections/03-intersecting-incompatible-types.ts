// Intersecting Incompatible Types:
// What happens when we intersect types with overlapping properties:
type SoulReaper = {
  name: string;
  reiatsu: number;
};

type Human = {
  name: string;
  age: number;
};

type SubstituteSoulReaper = Human & SoulReaper;
// The SubstituteSoulReaper intersection type created above is the equivalent of:
/*
type SubstituteSoulReaper = {
  name: string;
  age: number;
  reiatsu: number
}
*/
// It merges the properties of SoulReaper and Human, and because the "name" property overlaps, it safely combines the two types and appears only once in the resulting type.

// When intersecting types with overlapping properties doesn't work:
type Shinigami = {
  name: "Ichigo" | "Kenpachi";
  age: number;
};

type Person = {
  name: "Kanonji" | "Karin";
  age: number;
};

type ShinigamiPerson = Shinigami & Person;
// Now, the 'name' property can't satisfy both types as it has mutually exclusive types in both. Persons must be "Kanonji" or "Karin", and Shinigami must be "Ichigo" or "Kenpachi". So, the 'name' property in ShinigamiPerson becomes 'never', which in turn turns the entire ShinigamiPerson type to the 'never' type. In this example, the intersection would have been successful if the "name" property in both types had at least one common literal type.
// This is something we always need to watch out for when intersecting types.

// What to do instead of intersecting individual types when you have conflicting properties in them:
type SentimentTag = {
  type: "positive" | "neutral" | "negative";
  score: number;
  flagged: boolean;
};

type ChannelType = {
  type: "chat" | "email" | "phone";
  receivedAt: string;
  verified: boolean;
};

type ReviewMethod = "manual_review" | "auto_process";

// type TicketMetadata = SentimentTag & ChannelType; // Becomes "never" due to property conflict
type TicketMetadata = {
  sentiment: SentimentTag;
  channel: ChannelType;
};

function getReviewMethod(metadata: TicketMetadata): ReviewMethod {
  const needsReview =
    metadata.sentiment.flagged ||
    !metadata.channel.verified ||
    metadata.channel.type === "phone";

  return needsReview ? "manual_review" : "auto_process";
}
