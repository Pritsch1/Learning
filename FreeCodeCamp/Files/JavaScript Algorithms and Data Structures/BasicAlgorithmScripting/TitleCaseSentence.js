function titleCase(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++)
  {
    for (let j = 0; j < arr[i].length; j++)
    {
      arr[i] = arr[i].toLowerCase();
      arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
    }
  }
  return arr.join(" ");
}

console.log(titleCase("tEa pot"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));