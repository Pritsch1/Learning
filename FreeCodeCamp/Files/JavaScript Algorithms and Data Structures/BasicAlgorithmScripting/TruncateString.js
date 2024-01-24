function truncateString(str, num) {
  let trc = "";
  let range = num >= str.length ? str.length : num;
  for (let i = 0; i < range; i++) trc += str[i];
  return trc >= str ? trc : trc += "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));