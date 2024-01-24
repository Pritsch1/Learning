function mutation(arr) {
  for (let i = 0; i < arr[1].length; i++)
  {
    let hasLetter = 0;
    for (let j = 0; j < arr[0].length; j++)
    {
      if (arr[1][i].toLowerCase() === arr[0][j].toLowerCase())
      {hasLetter++;}
    }
    if (hasLetter <= 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));