/*
function numberSeparator(number) {
    if (number > 100) {
        bignumber();
    } else {
        smallnumber();
    }
}

*/
/*
funtion numberSeparator(number) {
    if (number <= 100) {
        smallNumber();
    } else {
        bigNumber();
    }
}
*/
/*
let index = 0

while (index <= 10) {
    console.log("The number is " + index + ".");
    index++;
}
*/
/*
let array = [0, 1, 2];
let index = 0;

while (index < array.length) {
    console.log()
}
*/
/*
let testString = "testing";

for (let index = 0; index < testString.length; index++) {
    let letter = testString[index];
    console.log(letter);
}
*/

function translatePigLatin(str) {

    // returns true only if the first letter in str is a vowel
    function isVowelFirstLetter() {
      var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
      for (i = 0; i < vowels.length; i++) {
        if (vowels[i] === str[0]) {
          return true;
        }
      }

    }

    // if str begins with vowel case
    if (isVowelFirstLetter()) {
      str += 'way';
    }
    else {
      // consonants to move to the end of string
      var consonants = '';

      while (isVowelFirstLetter() === false) {
        consonants += str.slice(0,1);
        // remove consonant from str beginning
        str = str.slice(1);
      }

      str += consonants + 'ay';
    }

    return str;
  }

  translatePigLatin("jstest");
