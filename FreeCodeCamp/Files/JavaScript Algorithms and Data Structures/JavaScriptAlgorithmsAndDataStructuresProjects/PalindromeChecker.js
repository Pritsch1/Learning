function palindrome(str) 
{
  const newStr = str.split(/\s+|[^A-Za-z0-9]+/g).join("").toLowerCase();
  for (let i = newStr.length - 1, j = 0; i >= 0; i--, j++)
  {
    if (newStr[i] !== newStr[j]) return false;
  }
  return true;
}

palindrome("A man, a plan, a canal. Panama");