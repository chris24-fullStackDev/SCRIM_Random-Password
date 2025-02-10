//* INPUT VALUES
const setOfPasswords = document.getElementById("set-of-passwords");
const passwordLength = document.getElementById("password-length");

//* CHECKBOXES

const inputNumeric = document.getElementById("input-numeric");
const inputSymbols = document.getElementById("input-symbols");
const inputUppercase = document.getElementById("input-uppercase");
const inputLowercase = document.getElementById("input-lowercase");

//*OUTPUT ELEMENTS
const resultButton1 = document.getElementById("result-button1");
const resultButton2 = document.getElementById("result-button2");
const resultButton3 = document.getElementById("result-button3");
const resultButton4 = document.getElementById("result-button4");
const resultButton5 = document.getElementById("result-button5");
const resultButton6 = document.getElementById("result-button6");

//* PASSWORDS CHARACTERS
let numericValue = "0123456789";
let lowercaseValue = "thequickbrownfoxjumpsoverthelazydog";
let uppercaseValue = "THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG";
let symbolsValue = "!@#$%^&*()_+=-{}[]|;:,.<>?/~`";

//* ADD EVENT LISTENERS FOR CHECKBOXES
inputNumeric.addEventListener("change", getUserOptions);
inputSymbols.addEventListener("change", getUserOptions);
inputUppercase.addEventListener("change", getUserOptions);
inputLowercase.addEventListener("change", getUserOptions);

let userSelection = "";

function getUserOptions() { //^& UPDATE USER SELECTION
  if (inputNumeric.checked) {
    userSelection += numericValue;
  }
  if (inputSymbols.checked) {
    userSelection += symbolsValue;
  }
  if (inputUppercase.checked) {
    userSelection += uppercaseValue;
  }
  if (inputLowercase.checked) {
    userSelection += lowercaseValue;
  }
  if (userSelection.length === 0) {
    alert("Please select at least one character type");
    return;
}
}
function getSetLength() { //^& GET SETS AND LENGTH

}

function generateBtn () {
  getUserOptions();
}