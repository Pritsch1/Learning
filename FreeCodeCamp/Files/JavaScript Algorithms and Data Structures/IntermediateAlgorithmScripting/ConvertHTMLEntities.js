function convertHTML(str) 
{
  const chars = ["&", "<", ">", "\"", "\'"];
  const html = ["&amp;", "&lt;", "&gt;", "&quot;","&apos;"];
  let newStr = "";
  for (let i = 0; i < str.length; i++)
  {
    let skip = 0;
    for (let j = 0; j < chars.length; j++)
    {
      if (str[i] === chars[j]) 
      {
        newStr += html[j];
        skip++; 
      }
    }
    if (skip === 0)newStr += str[i];
  }
return newStr;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));