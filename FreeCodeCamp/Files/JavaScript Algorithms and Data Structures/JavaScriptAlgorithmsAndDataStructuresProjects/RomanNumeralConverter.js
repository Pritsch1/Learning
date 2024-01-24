function convertToRoman(num) 
{
  const roman9 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const roman90 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const roman900 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const roman1000 = "M";
  const numStr = String(num);
  const lgh = numStr.length;
  let toRoman = ""; 
  for (let i = lgh-1; i >= 0; i--)
  {
    if (lgh - i === 1) toRoman = roman9[numStr[i]] + toRoman;
    if (lgh - i === 2) toRoman = roman90[numStr[i]] + toRoman;
    if (lgh - i === 3) toRoman = roman900[numStr[i]] + toRoman;
    if (lgh - i === 4) toRoman = roman1000.repeat([numStr[i]]) + toRoman;
  }
  console.log(toRoman);
 return toRoman;
}

convertToRoman(2014)
convertToRoman(3999)


//no repeat method
function convertToRoman(num) 
{
  const roman9 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  const roman90 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const roman900 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const roman1000 = "M";
  const numStr = String(num);
  const lgh = numStr.length;
  let toRoman = ""; 
  for (let i = lgh-1; i >= 0; i--)
  {
    if (lgh - i === 1) toRoman = roman9[numStr[i]] + toRoman;
    if (lgh - i === 2) toRoman = roman90[numStr[i]] + toRoman;
    if (lgh - i === 3) toRoman = roman900[numStr[i]] + toRoman;
    if (lgh - i === 4) toRoman = repeat(roman1000, [numStr[i]]) + toRoman;
  }
 return toRoman;
}

function repeat(string, x = 0)
{
  let newStr = "";
  for (let i = 0; i < x; i++)
  {
    newStr += string;
  }
  return newStr;
}

convertToRoman(2014)
convertToRoman(3999)