// Definition of variables for password

  // Array of special characters to be included in password
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

  // Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  // Array of lowercase characters to be included in password
let lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // Array of uppercase characters to be included in password
let upperCasedCharacters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let possibleCharacters = [...lowerCasedCharacters, ...upperCasedCharacters, ...numericCharacters, ...specialCharacters];
console.log(possibleCharacters)

// Function to prompt user for password options
function getPasswordOptions() {
  let lengthOfPassword = prompt("Enter your password: Please choose between 10 and 64 characters");

// Check that the password is at least 10 characters but no more than 64
if (lengthOfPassword.length < 10 || lengthOfPassword.length > 64);
  return ("Error: Password should not exceed 64 characters but should be at least 10 characters long");

}



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