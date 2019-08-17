function palindrome(string) {

  if (typeof string !== "string") {
    return "is the input a string?";
  }

  if (typeof string === "string") {
    const newString = string.split("").reverse().join("")

    if (string === newString) {
      return newString;
    } else {
      return "is it a palindrome?";
    }
  }
}

//basic tests
console.log(palindrome('anna') === "anna")
console.log(palindrome('racecar') === "racecar")

//edge case input is not a palindrome
console.log(palindrome('palindrome') === "is it a palindrome?")
console.log(palindrome('string') === "is it a palindrome?")
//edge case input is not a string
console.log(palindrome(2) === "is the input a string?")
console.log(palindrome(true) === "is the input a string?")
