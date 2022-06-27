const CHARS =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const randomCharacter = (chars) => () =>
chars[Math.floor(Math.random() * chars.length)];

const generatePassword = (chars) => (length) => () => [...Array(length)].map(randomCharacter(chars)).join("");

const passwordInput = document.querySelector("#password");
const generatePasswordChars = generatePassword(CHARS);
const generatePasswordChars12 = generatePasswordChars(12);

document.querySelector("#generate-button").addEventListener("click", () => {
    passwordInput.value = generatePasswordChars12();
  });

document.querySelector("#copy-button").addEventListener("click", () => {
    navigator.clipboard
      .writeText(passwordInput.value)
      .catch(() =>
        console.error("Can't copy (you need to open this in its own window).")
      );
  });