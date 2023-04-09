function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// Change the inputs below to test your code
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(0));
console.log(convertCtoF(20));
console.log(convertCtoF(30));

// convertCtoF(-30) should return a value of -22
// convertCtoF(-10) should return a value of 14
// convertCtoF(0) should return a value of 32
// convertCtoF(20) should return a value of 68
// convertCtoF(30) should return a value of 86
