// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Variables
let confirmLength = "";
let confirmSpecialCharacter;
let confirmNumericCharacter;
let confirmUpperCase;
let confirmLowerCase;

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to be?"));

  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters.");
      var confirmLength = (prompt("How many characters would you like your password to be?"));
      } 
  
      alert(`Your password will be ${confirmLength} characters long`);

      var confirmLowerCase = confirm("Would you like to include lowercase characters?");
      var confirmUpperCase = confirm("Would you like to include uppercase characters?");
      var confirmNumericCharacter = confirm("Would you like to include numbers?");    
      var confirmSpecialCharacter = confirm("Would you like to include special characters?");
 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("Choose at least one");
        var confirmLowerCase = confirm("Would you like to include lowercase characters?");
        var confirmUpperCase = confirm("Would you like to include uppercase characters?");   
        var confirmNumericCharacter = confirm("Would you like to include numeric characters?");    
        var confirmSpecialCharacter = confirm("Would you like to include special characters?");
    }

      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(alphaUpper)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
