// Extending Multiple Interfaces:
// We can extend multiple interfaces by imply separating the interface being extended, by a comma:
type Character = {
  name: string;
  level: number;
};

interface Magical {
  mana: number;
  castSpell(spell: string): void;
}

interface Physical {
  strength: number;
  attack(): void;
}

interface BattleMage extends Character, Magical, Physical {
  combineAttacks(): void;
}

interface CanReply {
  reply(text: string): string;
}

interface CanSummarize {
  summarize(conversation: string[]): string;
}

interface CanAct {
  takeAction(action: string): void;
}

interface SmartReplyBot extends CanReply, CanSummarize, CanAct {
  name: string;
  status: "online" | "offline" | "starting";
  shutdown(): string;
}
