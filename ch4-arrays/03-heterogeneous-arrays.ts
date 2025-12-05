// Heterogeneous Arrays:
// These are simply arrays having a union type, which we've already covered. Ex:
const lightsaberStyles = [1, 2, "double", "shoto"];

function describe(styles: (string | number)[]): void {
  for (const style in styles) {
    console.log(`Weild ${style} lightsaber`);
  }
}

describe(lightsaberStyles);

function interpolateComment(
  id: number,
  comment: string,
  comments: (string | number)[]
) {
  const index = comments.findIndex((el) => el === id);
  if (index === -1) return;
  comments[index] = comment;
}
