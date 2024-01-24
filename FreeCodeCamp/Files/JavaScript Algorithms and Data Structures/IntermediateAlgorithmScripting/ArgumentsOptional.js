function addTogether(x, y) 
{
  if (typeof x === "string" || typeof y === "string") return undefined;
  if (typeof x === "number" && typeof y === "number") return x + y;
  return function(y)
  {
    if (typeof y !== "number") return undefined;
    return x + y;
  }
}

addTogether(2)(3);
console.log(addTogether(2, 3));
console.log(addTogether(2, "3"));