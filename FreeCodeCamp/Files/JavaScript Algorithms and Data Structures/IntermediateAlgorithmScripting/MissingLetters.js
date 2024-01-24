function fearNotLetter(str) {
  let alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  if(str[0] !== "a")
    {
      for (let i = 0; i < alph.length; i++)
      {
        if (str[0] === alph[i]) alph = alph.splice(i);
      }
    }

  for (let i = 0; i < alph.length; i++)
  {    
    if (str[i] !== alph[i]) return alph[i];
  }
  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));