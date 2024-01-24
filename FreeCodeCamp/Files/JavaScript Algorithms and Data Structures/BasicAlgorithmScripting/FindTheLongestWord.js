function findLongestWordLength(str) 
{
  const arr = str.split(" ");
  let word = 0;
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i].length > word) word = arr[i].length;    
  }
  return word;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));