// Overriding Interface Properties:
// We can override properties from the base interface, but the new type must be compatible with the original:
interface Character {
  rank: string | number;
  name: string;
  level: number;
}

interface Wizard extends Character {
  // Wizards only have a number rank, which is fine, as 'number' is assignable to 'string | number':
  rank: number;
  mana: number;
}

// But we cannot change to an incompatible type:
/*
interface InvalidWizard extends Character {
  // This breaks because "boolean" is nto assignable to "string":
  rank: boolean; // Error: Types of property 'rank' are incompatible. Type 'boolean' is not assignable to type 'string | number'.
  mana: number;
}
*/
// This is the interface equivalent of an invalid type intersection that results in "never". The difference is that invalid type intersection simply results in a "never" type, while an incompatible interface extend raises a TS error

interface SystemEvent {
  type: string;
  timestamp: number;
  payload: string | object;
  affectedService: string;
  severity: "low" | "medium" | "high" | "critical";
}

interface ErrorEvent extends SystemEvent {
  type: "error";
  payload: string;
  code: number;
}

interface OutageEvent extends SystemEvent {
  type: "outage";
  severity: "critical";
  durationSeconds: number;
}

function getHighPriorityEvents(systemEvents: SystemEvent[]): SystemEvent[] {
  return systemEvents.filter(
    (ev) => ev.severity === "high" || ev.severity === "critical"
  );
}
