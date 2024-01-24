function spinalCase(str) {
  str = str.split(/\s|[^A-Za-z]/g).join(" ");
  let newStr = "";
  for (let i = 0; i < str.length; i++)
  {
    if (str[i] === str[i].toUpperCase() && i > 0) newStr += " ";
    newStr += str[i];
  }
  return newStr.split(/\s+/g).join("-").toLowerCase();  
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));