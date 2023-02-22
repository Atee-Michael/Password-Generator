// Array of character types
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

// Function to generate password
function generatePassword() {
let password = "";
let passwordLength = parseInt(prompt("How many characters would you like your password to be? (8-128)"));

// Validate password length
while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
passwordLength = parseInt(prompt("Invalid input. Please enter a number between 8 and 128."));
}

// Character type prompts
let includeLowerCase = confirm("Click ok if you want to include lowercase characters?");
let includeUpperCase = confirm("Click ok if you want to include uppercase characters?");
let includeNumbers = confirm("Click ok if you want to include numbers?");
let includeSpecialChars = confirm("Click ok if you want to include special characters?");

// Validate at least one character type selected
while(!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialChars) {
alert("Please select at least one character type.");
includeLowerCase = confirm("Click ok if you want to include lowercase characters?");
includeUpperCase = confirm("Click ok if you want to include uppercase characters?");
includeNumbers = confirm("Click ok if you want to include numbers?");
includeSpecialChars = confirm("Click ok if you want to include special characters?");
}

// Loop to generate password
let possibleChars = "";
if(includeLowerCase) {
possibleChars += lowerCase;
}
if(includeUpperCase) {
possibleChars += upperCase;
}
if(includeNumbers) {
possibleChars += numbers;
}
if(includeSpecialChars) {
possibleChars += specialChars;
}

for(let i = 0; i < passwordLength; i++) {
password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
}

return password;
}

// Function to write password to the page
function writePassword() {
let passwordText = document.querySelector("#password");
let password = generatePassword();
passwordText.value = password;
}

// Event listener to generate password on button click
document.querySelector("#generate").addEventListener("click", writePassword);