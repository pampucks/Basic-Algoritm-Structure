// dirty solution
function titleCase(str) {
  let word = str.split(" ");
  let firstLetter = "";
  let index = "";
  let capitalizedFirstLetter = "";
  let theRestOfLetter = "";
  let lowerCaseLetter = "";
  let newFirstLetter = "";
  let newTheRestOfLetter = "";
  let newArr = [];

  for (let i = 0; i < word.length; i++) {
    index = word[i].split("");
    firstLetter = index[0];
    capitalizedFirstLetter = firstLetter.toUpperCase();

    theRestOfLetter = word[i].slice(1);
    lowerCaseLetter = theRestOfLetter.toLowerCase();

    newFirstLetter = word[i].replace(firstLetter, capitalizedFirstLetter);

    newTheRestOfLetter = newFirstLetter.replace(
      theRestOfLetter,
      lowerCaseLetter
    );
    newArr.push(newTheRestOfLetter);
  }

  return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// clean solution
// function titleCase(str) {
//   const newTitle = str.split(" ");
//   const updatedTitle = [];
//   for (let st in newTitle) {
//     updatedTitle[st] =
//       newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }

// better solution
// function titleCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
//     .join(" ");
// }

// regex solution
// function titleCase(str) {
//   return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
// }

// Regex explanation:

// Find all non-whitespace characters (\S)
// At the beginning of string (^)
// Or after any whitespace character (\s)
// The g modifier searches for other such word pattern in the whole string and replaces them.
// This solution works with national symbols and accented letters as illustrated by following examples
// international characters: ‘бабушка курит трубку’ // → ‘Бабушка Курит Трубку’
// accented characters: ‘località àtilacol’ // → ‘Località Àtilacol’
