# Password-Generator
This project generates a password based on user-selected criteria using JavaScript loops. The user is prompted to enter a password length and choose which character types to include. The generated password is then displayed on the page.

## Requirements
The password must meet the following criteria:

* Length: At least 8 characters but no more than 128.
* Character types: Lowercase, Uppercase, Numeric, Special characters ($@%&*, etc.)
* Code should validate for each input and at least one character type should be selected.

## Usage
* Open the index.html file in your web browser.
* Click the "Generate Password" button.
* Enter a password length between 8 and 128 characters when prompted.
* Choose which character types to include in the password.
* Once all prompts are answered, the generated password will be displayed on the page.

## Implementation
The password is generated using a generatePassword() function that utilizes JavaScript loops to choose random characters from the selected character types. The function also validates user input and ensures that at least one character type is selected.

The password is then displayed on the page using a writePassword() function that writes the generated password to the #password textarea element. The function is triggered by a button click event listener.

## Credits
This project was created by Atee Michael (for a Bootcamp Project). Feel free to use and modify the code as needed.
