function myReplace(str, before, after) {
  let arr = str.split(" "), replace = after.split("");
  for (let i = 0; i < arr.length; i++)
  {
    if (before[0] === before[0].toUpperCase()) replace[0] = replace[0].toUpperCase();
    if (before[0] === before[0].toLowerCase()) replace[0] = replace[0].toLowerCase();
    if (arr[i] === before) arr[i] = replace.join("");    
  }
  return arr.join(" ");
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));