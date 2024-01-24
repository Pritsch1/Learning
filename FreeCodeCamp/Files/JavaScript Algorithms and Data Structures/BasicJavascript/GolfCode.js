const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  let dif = strokes - par;
  if (strokes === 1) return "Hole-in-one!";
  if (dif <= -2) return "Eagle";
  if (dif >= 3) return "Go Home!"; 
  switch (dif)
  {
    case 0: return "Par";
    case 1: return "Bogey";
    case 2: return "Double Bogey"
    case -1: return "Birdie";
  }
}

console.log(golfScore(5, 4));//Birdie
console.log(golfScore(4, 1));//Hole-in-one!
console.log(golfScore(1, 1));//Hole-in-one!
console.log(golfScore(4, 2));//Eagle
console.log(golfScore(5, 2));//Eagle
console.log(golfScore(4, 3));//Birdie
console.log(golfScore(4, 4));//Par
console.log(golfScore(5, 5));//Par
console.log(golfScore(4, 5));//Bogey
console.log(golfScore(4, 6));//Double Bogey
console.log(golfScore(4, 7));//Go Home!
console.log(golfScore(5, 9));//Go Home!