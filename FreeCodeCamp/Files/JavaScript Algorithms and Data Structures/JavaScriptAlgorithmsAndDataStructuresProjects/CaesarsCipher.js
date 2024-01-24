function rot13(str) 
{
  let alphU = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  str = str.split("");
  for (let i = 0; i < str.length; i++)
  {
    let start = 0, end = 0, index = 0;
    for (let j = 0; j < alphU.length; j++)
    {
      if (str[i] === alphU[j] && j < 14) {start++; index = j}
      if (str[i] === alphU[j] && j > 12) {end++; index = j}
    }
      if (start === 1) str[i] = alphU[index+13];
      if (end === 1) str[i] = alphU[index-13];
  }
  return str.join("");
}

console.log(rot13("SERR PBQR PNZC"));