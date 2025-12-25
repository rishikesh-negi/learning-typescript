// Intersections vs Unions:
// We've learned how unions (|) and intersections (&) are both used to merge types together. But how to decide which of the two to use?

// Unions:
// 1. Use the | operator (similar to the logical OR)
// 2. Widen the resulting type (more possible values)
// 3. Useful when modeling mutually exclusive options and states

// Intersections:
// 1. Use the & operator (similar to the logical AND)
// 2. Narrow the resulting type (fewer possible values)
// 3. Useful for combining multiple constraints or adding more required/mandatory properties to existing types

// Example:
type Human = {
  name: string;
  age: number;
};

type Elf = {
  name: string;
  ears: "pointy";
};

// MUST have name, age, and pointy ears:
type HumanElf = Human & Elf;

// MUST have name (shared between Human and Elf). Can have either age or ears (not both). It's either an elf OR a human:
type HumanOrElf = Human | Elf;

type SupportAgent = {
  id: number;
  role: "agent";
  assignedTickets: number;
};

type SupportAdmin = {
  id: number;
  role: "admin";
  assignedTickets: number;
};

type EndUser = {
  id: number;
  role: "customer";
  submittedTickets: number;
};

type SupportAgentUser = SupportAgent | SupportAdmin | EndUser;

function getTicketCount(user: SupportAgentUser): number {
  if (user.role === "agent" || user.role === "admin")
    return user.assignedTickets;

  return user.submittedTickets;
}
