// Assignment code here

// i will create arrays to contain each charType and declare a var for them out of the function --- arrays no longer needed here

// array declared
let selection = [];

// start generatePassword function
function generatePassword() {

// i will prompt the user to select a password length and i will create var for the password length
   let userNumber;
   
   do {
       userNumber = prompt("Choose a password length: (8-128 character)");
       userNumber = Number(userNumber);
   }
   while (userNumber < 8 || userNumber > 128 || isNaN(userNumber)) {
   
   alert("Your password will be " + userNumber + " characters long.");
       }

// i will prompt the user to select character types
// and create vars for character arrays --- character arrays no longer used
// added function to return to prompt if no character values are chosen
// added push to eliminate the heavy if and else if code section

ask(); 
function ask () {
    const yesUpper = confirm("Do you want uppercase characters?");
    if (yesUpper) {
      alert("Your password will contain uppercase characaters.");
      selection.push('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
    }
    if (!yesUpper) {
      alert("Your password will NOT contain uppercase characaters.");
      }

    const yesLower = confirm("Do you want lowercase characters?");
    if (yesLower) {
      alert("Your password will contain lowercase characaters.");
      selection.push('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    }
    if (!yesLower) {
      alert("Your password will NOT contain lowercase characaters.");
      }

    const yesNumber = confirm("Do you want numeric characters?");
    if (yesNumber) {
      alert("Your password will contain numeric characaters.");
      selection.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
     }
    if (!yesNumber) {
      alert("Your password will NOT contain numeric characaters.");
      }

    const yesSpecial = confirm("Do you want special characters (@, %, & etc)?");
    if (yesSpecial) {
      alert("Your password will contain special characaters.");
      selection.push('#', '$', '^', ')', '@', '%', '+', '/', "'", '?', ':', ',', '!', '(', '}', '{', ']', '[', '~', '-', '_', '.') ;
    }
    if (!yesSpecial) {
      alert("Your password will NOT contain special characaters.");
      }

// i will concat the arrays based on user choice and use if/else to select the correct array -- concat and if/else were ommited with the array.push method
// if all no
    if (!yesLower && !yesUpper && !yesNumber && !yesSpecial) {
      prompt = alert("You must choose at least one character style!");
      ask();
    }
};

// i will pull random selections from the user selected array for the length of password selected by the user
    let randomize = [];
    for (let i =0; i < userNumber; i++) {
      randomize += selection[Math.floor(Math.random() * selection.length)]
    }
// selection array declared empty before next generateBtn click
    selection = [];
    return randomize;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);