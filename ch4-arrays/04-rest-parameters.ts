// Rest Parameters in TS:
// In TS, rest parameters work in the same way as JS. We just have to type the resultant array. Ex:
function gatherParty(partyName: string, ...adventurers: string[]): string {
  return `${partyName} consists of: ${adventurers.join(", ")}`;
}

const msg = gatherParty("The Fellowship", "Frodo", "Sam", "Gandalf");
console.log(msg);

function formatLabels(...labels: string[]) {
  if (!labels.length) return "No Labels";
  if (labels.length === 1) return `Label: ${labels[0]}`;

  return `Labels: ${labels.join(", ")}`;
}
