function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Solution 2
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// Change the inputs below to test your code
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));

// reverseString("hello") should return the string olleh.
// reverseString("Howdy") should return the string ydwoH.
// reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
