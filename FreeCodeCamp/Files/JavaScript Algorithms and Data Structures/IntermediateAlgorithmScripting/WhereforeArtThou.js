function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
const sourceArr = Object.keys(source);
for (let i = 0; i < collection.length; i++)
{
  let skip = 0;
  for (let j = 0; j < sourceArr.length; j++)
  {
      if (collection[i][sourceArr[j]] !== source[sourceArr[j]]) skip++;       
  }
  if (skip === 0) arr.push(collection[i]);
}
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));