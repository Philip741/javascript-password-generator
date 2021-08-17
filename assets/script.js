var passLen = 15;
var min = 1;
var max = 10;
var min_length = 8;
var max_length = 128;


// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 

function randomLetter(upper) {
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  if (upper) {
    alphabet = alphabet.toUpperCase();
    pickLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return pickLetter
  }
  else {
    pickLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
    return pickLetter
  }
}

function randomSpecial() {
  const specChars = "#$%!";
  picChar = specChars[Math.floor(Math.random() * specChars.length)]
  return picChar
}

function generatePassword(passLen) {
  var myPass = '';
  var inclNum = confirm('Include numbers in password ? (press ok or cancel)');
  var inclLetter = confirm('Include letters in password ? (press ok or cancel)');
  var inclSpecial = confirm('Include special characters (eg. #!%$) in password ? (press ok or cancel)');
  while (myPass.length < passLen) {
      myPass += randomLetter(upper=true);
      myPass += randomNumber(1,10);
      myPass += randomSpecial();
      myPass += randomLetter(upper=false); 
  }
  console.log(myPass);
  return myPass
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(15);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log('button clicked');
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);;

