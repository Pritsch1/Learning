function min(a, b)
{
    return a < b ? a : b;
}

console.log(min(10, 20)); //10
console.log(min(20, 10)); //10
console.log(min(-10, -20));//-20
console.log(min(-20, -10));//-20
console.log(min(10, -10));//-10
console.log(min(-10, 10));//-10