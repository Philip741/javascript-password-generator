// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomNumber(min, max) { 
  return Math.floor(Math.random() * (max - min) + min);
} 

function randomLetter(upper) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
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
  //generate random character from string and return
  const specChars = "#$%!";
  picChar = specChars[Math.floor(Math.random() * specChars.length)]
  return picChar
}

function userPrompts() {
  let genPass = '';
  promptCheck = [];
  userParams = [];
  var passLen = prompt("Please enter the length of your password (between 8 and 128 characters)");
  // Check pass length and accept or reject
  if (passLen < 8 || passLen > 128) {
    alert("Password length must be greater than 8 characters and less than 128 Characters")
    return "Please try again"
  } 
  else {
      passLen = parseInt(passLen);
  }
  //parameter prompts
  var Num = confirm('Include numbers in password ? (press ok or cancel)');
  var Letter = confirm('Include letters in password ? (press ok or cancel)');
  var Special = confirm('Include special characters in password(eg. #!%$) in password ? (press ok or cancel)');
  var LetterUpper = confirm('Include upper case Letters in password ? (press ok or cancel)');
  if (Num){ 
    userParams.push('randomNumber');
    genPass += randomNumber(1,9);
   }
  if (Letter){ 
    userParams.push('randomLetter'); 
    genPass += randomLetter(upper=false);
  }
  if (Special){ 
    userParams.push('randomSpecial'); 
    genPass += randomSpecial();
  }
  if (LetterUpper){ 
    userParams.push('randomLetterUpper'); 
    genPass += randomLetter(upper=true);
  }
  console.log(genPass)
  promptCheck.push(Num,Letter,Special,LetterUpper);
  // check if all prompt values are false if so prompt that at least one choice has to be made
  if (promptCheck.every(function(item){ return item == false;})) {
    alert("Please choose at least one type for your password. (eg. Include numbers and letters")
    return "Please try again"
  }
  else{
    var myPass = generatePassword(userParams,passLen,genPass);
    return myPass
  }
}
function generatePassword(params,passLen,genPass) {
     //append required parameters to the front of the password
     passLen = passLen - genPass.length;
     console.log(passLen);
     for (i=0; i< passLen; i++) {
       randNum = randomNumber(0,params.length);
       randFunc = params[randNum];
       if (randFunc === 'randomNumber') {
           genPass += randomNumber(1,9);
       }
       else if (randFunc === 'randomLetter') {
           genPass += randomLetter(upper=false);
       }
       else if (randFunc === 'randomSpecial') {
           genPass += randomSpecial();
       }
       else if (randFunc === 'randomLetterUpper') {
           genPass += randomLetter(upper=true);
       }
       else {
         console.log('Problem getting parameters in generatePassword function');
       }
     } 
     return genPass
}
// Write password to the #password input
function writePassword() {
  var password = userPrompts();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log('button clicked');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

