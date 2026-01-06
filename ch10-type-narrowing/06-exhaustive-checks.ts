// Exhaustive Checks:
// We've already discussed and used this feature. It is readily baked into programming languages like Rust. It is a very useful feature when consuming union types:
type Notif = "email" | "sms" | "push";

function sendNotification(notif: Notif) {
  switch (notif) {
    case "email":
      return "Sending email...";
    case "sms":
      return "Sending SMS...";
    case "push":
      return "Sending push nitofication...";
  }
  return "Unknown notification type";
}
// This might be a reasonable way to write JS code, but that final return statement is actually redundant TS code. The swtch statement is exhaustive and TS is smart enough to know that (return "Unknown notification type";) is unreachable and gives us a compiler error if we've configured TS to do so.
// We must design our types to raise these kinds of useful errors.

type Topic = "question" | "complaint" | "upgrade" | "refund";

type Chat = {
  topic: Topic;
  userId: string;
};

type CountReport = {
  questions: number;
  complaints: number;
  upgrades: number;
  refunds: number;
};

function countComplaints(chats: Chat[]): CountReport {
  const counts = { questions: 0, complaints: 0, upgrades: 0, refunds: 0 };
  for (const chat of chats) {
    incrementCount(chat, counts);
  }

  return counts;
}

function incrementCount(chat: Chat, counts: CountReport): CountReport {
  switch (chat.topic) {
    case "question":
      counts.questions++;
      return counts;
    case "complaint":
      counts.complaints++;
      return counts;
    case "refund":
      counts.refunds++;
      return counts;
    case "upgrade":
      counts.upgrades++;
      return counts;
    default:
      throw new Error(`Unhandled topic: ${chat.topic satisfies never}`);
  }
}
