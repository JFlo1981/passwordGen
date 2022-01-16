// Assignment code here
// i will prompt the user to select a password length
// i will prompt the user to select character types
// i will create arrays to contain each charType
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
