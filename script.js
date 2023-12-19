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

// Function to generate password with user input
function generatePassword() {
  const passwordOptions = getPasswordOptions();

  if (!passwordOptions) {
    return;
  }

  const { passwordLength, charOptions } = passwordOptions;
  let generatedPassword = "";

  // Generate password using a for loop
  for (let i = 0; i < passwordLength; i++) {
    // Get random index for the charOptions
    const randomIndex = Math.floor(Math.random() * charOptions.length);
    // Add selected character to the password
    generatedPassword += charOptions[randomIndex];
  }
  console.log("Generated Password:", generatedPassword);
  return generatedPassword;
}

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
