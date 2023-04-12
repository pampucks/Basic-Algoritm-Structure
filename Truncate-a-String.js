function truncateString(str, num) {
  let truncateStr = "";
  if (str.length <= num) {
    return str;
  } else {
    truncateStr = str.slice(0, num);
    return truncateStr + "...";
  }
}
// Solution 2
// function truncateString(str, num) {
//   // Clear out that junk in your trunk
//   if (str.length > num) {
//     return str.slice(0, num) + "...";
//   } else {
//     return str;
//   }
// }

// Solution 3
// function truncateString(str, num) {
//   return str.length > num ? str.slice(0, num) + "..." : str;
// }

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
