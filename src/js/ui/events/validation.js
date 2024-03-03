import { email, emailError, username, usernameError, password, passwordError, repeatPasswordError } from "../../constants.js";

export async function validateRepeatPassword(firstPasswordValue, repeatPasswordValue) {
  const firstPassword = firstPasswordValue;
  const passwordRepeat = repeatPasswordValue;

  if (passwordRepeat === firstPassword) {
    repeatPasswordError.innerText = "The passwords match";
    repeatPasswordError.classList.add("success");
    repeatPasswordError.classList.remove("error");
    return firstPassword;
  } else if (passwordRepeat !== firstPassword) {
    repeatPasswordError.innerText = "The passwords do not match";
    repeatPasswordError.classList.remove("success");
    repeatPasswordError.classList.add("error");
  }
}

export function validatePassword() {
  if (checkPassword(password.value, 8, 20) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
    passwordError.classList.add("error");
  }
}
export function validateUsername() {
  if (checkUsername(username.value, 2, 10) === true) {
    usernameError.style.display = "none";
  } else {
    usernameError.style.display = "block";
    usernameError.classList.add("error");
  }
}
export function validateEmail() {
  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    emailError.classList.add("error");
  }
}

function checkPassword(password, minlen, maxlen) {
  if (password.trim().length > minlen && password.trim().length < maxlen) {
    const regEx = /^(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).+$/;
    const patternMatches = regEx.test(password);
    return patternMatches;
  }
}

function checkUsername(username, minlen, maxlen) {
  if (username.trim().length > minlen && username.trim().length < maxlen) {
    const regEx = /^[a-zA-Z0-9_]*$/;
    const patternMatches = regEx.test(username);
    return patternMatches;
  }
}

function checkEmail(email) {
  const regEx = /^[a-zA-Z0-9._-]+@(stud\.)?noroff\.no$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
