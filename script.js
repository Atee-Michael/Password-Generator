// Get references to the elements
const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

// Sets for password criteria
const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChars = "0123456789";
const specialChars = "$@%&*()_+-=[]{}|<>?,.";



/*
function promptForPassword() {
  // Prompt the user for a password
  var password = prompt("Enter your password:");

  // Check that the password is at least 8 characters long
  if (password.length < 8) {
    alert("Error: Password must be at least 8 characters long.");
    return;
  }

  // Check that the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    alert("Error: Password must contain at least one uppercase letter.");
    return;
  }

  // Check that the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    alert("Error: Password must contain at least one lowercase letter.");
    return;
  }

  // Check that the password contains at least one number
  if (!/[0-9]/.test(password)) {
    alert("Error: Password must contain at least one number.");
    return;
  }

  // If all checks pass, print a success message
  alert("Success: Password is valid.");
}

*/



// Function for getting a random element from an array
function getRandom(possibleCharacters) {

  let practicePassword = ""
  for (let i = 0; i < lengthOfPassword; i++) {
    let randomCharacter =[Math.floor(Math.random() * possibleCharacters.length)];
    practicePassword = practicePassword + possibleCharacters[randomCharacter];
  }
  return finalPassword1;
};


// Function to generate password with user input
function generatePassword() {

  let finalPassword = "";
  for (let i = 0; i < 100; i++) {
    
    finalPassword += "jo"
    
  }
  return finalPassword;  

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}



// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);