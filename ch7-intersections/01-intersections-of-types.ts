// Intersections of Types:
// An intersection type combines multiple types into one with the '&' oprator. The resulting intersection type satisfies ALL the component types simultaneously.
type IndividualContributor = {
  id: number;
  name: string;
  tasks: string[];
};

type Manager = {
  directReports: number[];
};

type GoodManager = IndividualContributor & Manager;

const yamamoto: GoodManager = {
  id: 1,
  name: "Genryusai Yamamoto",
  tasks: [
    "Protecting Seiretei",
    "Managing Seiretei",
    "Keeping order in Seiretei",
  ],
  directReports: [4, 5, 6],
};

// When we intersect object types, TS merges their properties:
type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

// The above is equivalent to writing:
/*
type Point3D = {
  x: number;
  y: number;
  z: number;
}
*/

type SupportBot = {
  id: string;
  name: string;
  status: string;
  language: string;
};

type TextBot = SupportBot & {
  messageLog: string[];
  sendMessage: (message: string) => string;
};

type VoiceBot = SupportBot & {
  callLog: string[];
  phoneNumber: string;
  dialnumber: (phoneNumber: string) => string;
};
