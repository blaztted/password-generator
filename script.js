const charOptions = [];
const generatedPassword = "";

var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = prompt(
    "Enter the desired password length (between 8 and 128 characters):"
  );

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid number between 8 and 128.");
    return getPasswordOptions();
  }

  // Ask which character sets to use
  const includeUppercase = confirm("Include uppercase letters?");
  const includeLowercase = confirm("Include lowercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecialCharacters = confirm("Include special characters?");

  //Check if user gave false for all character sets
  if (
    !(
      includeUppercase ||
      includeLowercase ||
      includeNumbers ||
      includeSpecialCharacters
    )
  ) {
    alert("Please select at least one character set.");
    return getPasswordOptions();
  }

  // Generate random char for each selected character set
  let charOptions = "";
  if (includeNumbers) charOptions += getRandomCharacter(numericCharacters);
  if (includeUppercase) charOptions += getRandomCharacter(upperCasedCharacters);
  if (includeLowercase) charOptions += getRandomCharacter(lowerCasedCharacters);
  if (includeSpecialCharacters)
    charOptions += getRandomCharacter(specialCharacters);

  // Check if one character set is selected min
  if (charOptions.length === 0) {
    alert("Error: No character set selected.");
    return "";
  }

  // Return an object with user-selected options
  return {
    passwordLength,
    charOptions,
  };
}

// Generate random char from set
function getRandomCharacter(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet[randomIndex];
}

getPasswordOptions();

// const charOptions = [];
// const generatedPassword = "";
// You can store the generatedPassword as a string and concat each character OR
// as an array and push each character, then join once you have enough characters

//function getPasswordOptions() {
// Prompt for password len32gth
// At least 8 characters, no more than 128 characters
// Conditional to check that the number that was entered is in range
// Prompts store data as strings, so need to parse into a number
// If the user's input is out of range, either return out of the function or call the function again

// Confirm which character sets to use
// If the user answers false for all, either return out of the function or call the function again

// Once they select a character set:
// Generate a random character for each selected character set
// Either push selected character sets to a mega-array of all selected characters
// OR you can keep the arrays separate and generate a random number to select the array and another to select the index

// Once character sets are selected, move on to generating random characters
//}

// Function for getting a random element from an array
//function getRandom(arr) {
// Need a variable to hold the password as it's being generated
// Need a variable to hold the index that's being generated

// For loop that loops the number of times that matches the length the user chose
// Generate a random number
// That number is the index for a character in the mega-array
// So then, mega-array[generated-index] is the actual character
// Add that character to the password

// Once we finish the for loop, return the generated password
//}

// Function to prompt user for password options
//function getPasswordOptions() {}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

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
