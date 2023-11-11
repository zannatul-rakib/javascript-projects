const getPassword = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=><?/{[}}~|";

// create password function
const allChar = upperCase + lowerCase + numbers + symbols;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }

  getPassword.value = password;
}

// Password copy function
function copyPassword() {
  getPassword.select();
  document.execCommand("copy");
}
