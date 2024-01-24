function telephoneCheck(str) 
{
  if (/[^0-9()-\s]/g.test(str)) return false;
  const str2 = str.split(/[()-\s]/g).join(""), lgt = str2.length;
  if (lgt > 11 || lgt < 10) return false;
  if (lgt === 11 && str2[0] !== "1") return false;
  if (/^[^0-9(]/g.test(str)) return false;
  const str3 = str.split(" ").join("");
  console.log(str3);
  let dash = 0, prts = 0;
  for (let i = 0; i < str3.length; i++)
  {
    if (str3[i] === "-") dash++;
    if (str3[i] === "(" || str3[i] === ")") prts++;
    if (str3[i] === ")" && i > 5) prts++;
  }
  if (dash > 2 || prts !== 2 && prts !== 0) return false;

  return true;
}

console.log(telephoneCheck("(6054756961)"));