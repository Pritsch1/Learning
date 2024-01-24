function frankenSplice(arr1, arr2, n) {
let start = arr2.slice(0, n), end = arr2.slice(n, arr2.length);
let newArr = [...start, ...arr1, ...end];
  return newArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));//[4, 1 ,2 ,3, 5, 6]);
console.log(frankenSplice([1, 2, 3], [4, 5], 1));//[4, 1, 2, 3, 5].
console.log(frankenSplice([1, 2], ["a", "b"], 1));//["a", 1, 2, "b"].

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));//["head", "shoulders", "claw", "tentacle", "knees", "toes"]

console.log(frankenSplice([1, 2, 3, 4], [], 0));//[1, 2, 3, 4]