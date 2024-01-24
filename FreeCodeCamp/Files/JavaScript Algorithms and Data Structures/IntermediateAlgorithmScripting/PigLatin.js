//First Try (Just Trying To Get it Done)

function translatePigLatin(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++)
  {
    for (let j = 0; j < vowel.length; j++)
    {
      if (str[0] === vowel[j]) return str += "way";
      if (str[i] === vowel[j])
      {
        let end = str.slice(0, i), start = str.slice(i);
        return str = start+end+"ay";
      }
    }
  }
  return str+"ay";
}

translatePigLatin("consonant");
console.log(translatePigLatin("rhythm"));

//No Methods Way

function translatePigLatin(str) {
  const vowel = ["a", "e", "i", "o", "u"];
  let skip = 0, end = "", start = "";
  for (let i = 0; i < str.length; i++)
  {
    for (let j = 0; j < vowel.length; j++)
    {
      if (str[0] === vowel[j]) return str += "way";
      if (str[i] === vowel[j]) skip++;
    }    
      if (skip > 0) start += str[i];      
      if (skip === 0) end += str[i];
  }
  return str = start+end+"ay";
}

console.log(translatePigLatin("glove"));

//"Only" Methods Way

...