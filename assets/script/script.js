// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbol = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//Variables
let length = "";
let specialCharacter;
let numericCharacter;
let upperCase;
let lowerCase;

function generatePassword() {
  var length = (prompt("How many characters would you like your password to be?"));

  while(length <= 7 || length >= 129) {
      alert("Password length must be between 8-128 characters.");
      var length = (prompt("How many characters would you like your password to be?"));
      } 
  
      alert(`Your password will be ${length} characters long`);

      var lowerCase = confirm("Would you like to include lowercase characters?");
      var upperCase = confirm("Would you like to include uppercase characters?");
      var numericCharacter = confirm("Would you like to include numbers?");    
      var specialCharacter = confirm("Would you like to include special characters?");
 
      while(upperCase === false && lowerCase === false && specialCharacter === false && numericCharacter === false) {
        alert("Choose at least one");
        var lowerCase = confirm("Would you like to include lowercase characters?");
        var upperCase = confirm("Would you like to include uppercase characters?");   
        var numericCharacter = confirm("Would you like to include numeric characters?");    
        var specialCharacter = confirm("Would you like to include special characters?");
    }

      var passwordCharacters = []
      
    if (specialCharacter) {
      passwordCharacters = passwordCharacters.concat(symbol)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(letterLower)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(letterUpper)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < length; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordContent = document.querySelector("#password");

  passwordContent.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
