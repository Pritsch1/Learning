function repeatStringNumTimes(str, num) {
  let arr = "";
  for (let i = 0; i < num; i++) arr += str;
  return arr;
}

console.log(repeatStringNumTimes("abc", 3));