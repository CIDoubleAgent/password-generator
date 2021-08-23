// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Variables
let passwordLength;
let confirmSymbols;
let confirmNumbers;
let confirmUpper;
let confirmLower;

function generatePassword() {
  var passwordLength = (prompt("How many characters would you like your password to be?"));

  while(passwordLength <= 7 || passwordLength >= 129) {
      alert("Password length must be between 8-128 characters.");
      var passwordLength = (prompt("How many characters would you like your password to be?"));
      } 
  
      alert(`Your password will be ${passwordLength} characters long`);

      var confirmLower = confirm("Would you like to include lowercase characters?");
      var confirmUpper = confirm("Would you like to include uppercase characters?");
      var confirmNumbers = confirm("Would you like to include numbers?");    
      var confirmSymbols = confirm("Would you like to include special characters?");
 
      while(!confirmNumbers && !confirmLower && !confirmUpper  && !confirmSymbols) {
        alert("Choose at least one");
        var confirmLower = confirm("Would you like to include lowercase characters?");
        var confirmUpper = confirm("Would you like to include uppercase characters?");   
        var confirmNumbers = confirm("Would you like to include numeric characters?");    
        var confirmSymbols = confirm("Would you like to include special characters?");
    }

      var passwordContent = []
      
      if (confirmNumbers) {
        passwordContent = passwordContent.concat(numbers)
      }
      if (confirmLower) {
        passwordContent = passwordContent.concat(lettersLower)
      }
      if (confirmUpper) {
        passwordContent = passwordContent.concat(lettersUpper)
      }
      if (confirmSymbols) {
        passwordContent = passwordContent.concat(symbols)
      }

      var newPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        newPassword = newPassword + passwordContent[Math.floor(Math.random() * passwordContent.length)];
      }
      return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
