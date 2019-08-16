//check if a word is a palindrome

function palindrome(string) {

  const splitString = string.split('');
  const reverseString = splitString.reverse();
  const joinString = reverseString.join('');
  const newString = joinString;

  if ((string !== newString) || (isNaN(newString)) === false) {

    return "is not a palindrome";
  };

  if (string === newString) {

    return newString;
  };


};

//basic tests
console.log(palindrome('anna') === "anna");
console.log(palindrome('racecar') === "racecar");

//edge case is not a palindrome
console.log(palindrome('cool') === "is not a palindrome");
//edge case is a number
console.log(palindrome('2') === "is not a palindrome");
