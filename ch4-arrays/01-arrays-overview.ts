// Arrays in TS:
// To type arrays in TS, we simply need to write the expected type of the array elements, followed by square brackets. Ex:
function trainJedi(jediKnights: string[]) {
  for (const knight of jediKnights) {
    console.log(`Training ${knight}...`);
  }
}

trainJedi(["Dooku", "Qui-Gon", "Xanatos"]);

// To create an array that can hold elements of more than one type, we can wrap the type union in parentheses and add the square brackets after them. Ex:
function runsScoredInOver(runs: (number | string)[]) {
  for (const [i, score] of runs.entries()) {
    console.log(`Delivery #${i + 1}: ${score}`);
  }
}

runsScoredInOver([2, 1, "wicket", 4, 1, 4]);

function averageScore(ratings: number[]) {
  if (ratings.length === 0) return 0;
  return ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
}
