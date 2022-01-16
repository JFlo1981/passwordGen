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

// i will prompt the user to select a password length and i will create var for the password length
    let number = 0
    while (number < 8 || number >128) {
      number = prompt("Choose a passowrd length: (8-128 characters");
      alert("Your password will be " + number + " characters long.");
    }


// i will prompt the user to select character types
//  and create vars for character arrays

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


// i will concat the arrays based on user choice and use if/else to select the correct array
// if all no
    if (!yesLower && !yesUpper && !yesNumber && !yesSpecial) {
      prompt = alert("You must choose at least one character style!");
    }
// if all yes
    if (yesLower && yesUpper && yesNumber && yesSpecial) {
      selection = spChar.concat(numbers, upperCase, lowerCase);
    }
// else if for 3 selections
    else if (yesLower && yesUpper && yesNumber) {
    selection = lowerCase.concat(numbers, upperCase);

  } else if (yesLower && yesUpper && yesSpecial) {
    selection = lowerCase.concat(spChar, upperCase);

  } else if (yesLower && yesSpecial && yesNumber) {
    selection = lowerCase.concat(numbers, spChar);

  } else if (yesSpecial && yesUpper && yesNumber) {
    selection = spChar.concat(numbers, upperCase);
  }

  // else if for 2 selection
   else if (yesSpecial && yesNumber) {
     selection = spChar.concat(numbers);

  } else if (yesSpecial && yesLower) {
     selection = spChar.concat(lowerCase);

  } else if (yesSpecial && yesUpper) {
     selection = spChar.concat(upperCase);

  } else if (yesLower && yesNumber) {
     selection = lowerCase.concat(numbers);

  } else if (yesLower && yesUpper) {
     selection = lowerCase.concat(upperCase);

  } else if (yesNumber && yesUpper) {
     selection = numbers.concat(upperCase);
  } 

  // else if for one selection
    else if (yesLower) {
      selection = lowerCase;

  } else if (yesUpper) {
      selection = upperCase;

  } else if (yesNumber) {
      selection = numbers;
      
  } else if (yesSpecial) {
      selection = spChar;
  }
};
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
