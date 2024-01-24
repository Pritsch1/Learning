function reverseString(str) 
{  
  const arr = str.split("");
  let newstr = "";
  for (let i = arr.length - 1; i >= 0; i--)
  {
    newstr += arr[i];        
  }
return newstr;
}

console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));
