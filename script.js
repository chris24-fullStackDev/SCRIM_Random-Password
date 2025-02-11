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

let userSelectedCharacters = "";
let randomPasswordResult = "";

function getUserOptions() {
  //^& UPDATE USER SELECTION
  if (inputNumeric.checked) {
    userSelectedCharacters += numericValue;
  }
  if (inputSymbols.checked) {
    userSelectedCharacters += symbolsValue;
  }
  if (inputUppercase.checked) {
    userSelectedCharacters += uppercaseValue;
  }
  if (inputLowercase.checked) {
    userSelectedCharacters += lowercaseValue;
  }
  if (userSelectedCharacters.length === 0) {
    alert("Please select at least one character type");
    return false;
  }
  return true;
}
function getLengthPassword() {
  //^& GET SETS AND LENGTH
  if (setOfPasswords.value === 0 || passwordLength.value > 6) {
    alert(
      "Please enter a valid number of sets and a password length between 1 and 6"
    );
    return false;
  }
  if (passwordLength.value < 5 || passwordLength.value > 14) {
    alert("Please enter a valid password length between 5 and 14");
    return false;
  }
  return true;
}
function generateRandomPassword() {
  getUserOptions();
  getLengthPassword();

  for (let i = 0; i < passwordLength.value; i++) {
    let randomPass = "";
    let randomIndex = Math.floor(Math.random() * userSelectedCharacters.length);
    randomPass += userSelectedCharacters[randomIndex];
  }
  return randomPass;
}
function getLengthSet() {
  generateRandomPassword();
  let passwordSetArray = [];
  for (let i = 0; i < setOfPasswords.value; i++) {
    passwordSetArray.push(generateRandomPassword());
  }
  return passwordSetArray;
}

function generateBtn() {
  userSelectedCharacters = "";
  let passwordSet = getLengthSet();

  resultButton1.textContent = passwordSet[0] || "-";
  resultButton2.textContent = passwordSet[1] || "-";
  resultButton3.textContent = passwordSet[2] || "-";
  resultButton4.textContent = passwordSet[3] || "-";
  resultButton5.textContent = passwordSet[4] || "-";
  resultButton6.textContent = passwordSet[5] || "-";
}
