function confirmEnding(str, target) {
  let arr = [], count = target.length;
  for (let i = str.length - 1; count > 0; i--)
  {
    arr = [str[i], ...arr];
    console.log(arr);
    count--;    
  }
  return arr.join("") === target ? true : false;
}

confirmEnding("Bastian", "n");
confirmEnding("He has to give me a new name", "name")