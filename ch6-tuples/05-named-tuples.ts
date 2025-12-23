// Named Tuples:
// Although tuples guarantee the order of values, position-based access isn't descriptive. Fortunately, TS supports tuples with labelled elements (commonly known as "named" tuples). This feature is useful only for documentation and intellisense purposes; it simply enhances the DX and has no impact on the compiler or runtime.
// So, instead of:
type UserData = [string, number, boolean];

// We can have:
type LabelledUserData = [name: string, age: number, isAdmin: boolean];
// These labels make our code more self-documenting

type Ticket = readonly [id: number, comment: string, label: string];

function formatTicket(ticket: Ticket) {
  const [id, comment, label] = ticket;
  return `#${id} ${comment} [${label}]`;
}
// NOTE: Despite the tuple elements having a label, they still need to be destructured in the order in which they appear in the tuple.
