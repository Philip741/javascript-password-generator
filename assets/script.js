var passLen = 15;
var myPass = "";
var min = 1;
var max = 10;
var min_length = 8;
var max_length = 128;


// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 
function randomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  pickLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
  return pickLetter
}

function generatePassword(passwd_len) {
  confirm('Include numbers in password ? (press ok or cancel)');
  return "Mypassword"
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log('button clicked');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);;

