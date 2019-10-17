//passing
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

//refactored
function _remainder(num, mod) {
  return (num % mod) === 0;
}

function _checkNum() {

  for (let i = 1; i <= 100; i++) {
    let output = "";
    switch(true) {
      case _remainder(i, 15):
        output += "FizzBuzz"
      break;
      case _remainder(i, 3):
        output += "Fizz"
      break;
      case _remainder(i, 5):
        output += "Buzz"
      break;
      default:
        output += i;
      break;
    }
    console.log(output);
  }
}

_checkNum();
