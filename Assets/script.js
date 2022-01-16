// Assignment code here

// i will create arrays to contain each charType and declare a var for them out of the function
// upperCase array
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

// lowerCase array
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// numbers array
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// spChar array
const spChar = ['#', '$', '^', ')', '@', '%', '+', '/', "'", '?', ':', ',', '!', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// var decalred
var selection;

// start generatePassword function
function generatePassword() {

// i will prompt the user to select a password length
    let number = 0
    while (number < 8 || number >128) {
      number = prompt("Choose a passowrd length: (8-128 characters");
      alert("Your password will be " + number + " characters long.");
    }


// i will prompt the user to select character types

    const yesUpper = confirm("Do you want UPPERCASE characters?");
    if (yesUpper) {
      alert("Your password will contain UPPERCASE characaters");
    }
    if (!yesUpper) {
      alert("Your password will not contain UPPERCASE characaters");
      }

    const yesLower = confirm("Do you want lowercase characters?");
    if (yesLower) {
      alert("Your password will contain lowercase characaters");
    }
    if (!yesLower) {
      alert("Your password will not contain lowercase characaters");
      }

    const yesNumber = confirm("Do you want numeric characters?");
    if (yesNumber) {
      alert("Your password will contain numeric characaters");
    }
    if (!yesNumber) {
      alert("Your password will not contain numeric characaters");
      }

    const yesSpecial = confirm("Do you want special characters (@, %, & etc)?");
    if (yesSpecial) {
      alert("Your password will contain special characaters");
    }
    if (!yesSpecial) {
      alert("Your password will not contain special characaters");
      }
};
// i will create variables for the password length and character arrays
// i will concat the arrays based on user choice and use if/else to select the correct array
// i will pull random selections from the user selected concat array for the length of password selected by the user

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
