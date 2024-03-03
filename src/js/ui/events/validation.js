import { registerForm, email, emailError, username, usernameError, password, passwordError, repeatPasswordError } from "../../constants.js";

export async function validatePassword(firstPasswordValue, repeatPasswordValue) {
  const firstPassword = firstPasswordValue;
  const passwordRepeat = repeatPasswordValue;
  const button = registerForm.querySelector("button");

  if (passwordRepeat === firstPassword) {
    repeatPasswordError.innerText = "The passwords match";
    repeatPasswordError.classList.add("success");
    button.disabled = false;
    return firstPassword;
    
  } else if (passwordRepeat !== firstPassword) {
    repeatPasswordError.innerText = "The passwords do not match";
    repeatPasswordError.classList.remove("success");
  }
}

export function validateRegistrating() {
  if (checkPassword(password.value, 8, 20) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }
  if (validateUsername(username.value, 2, 10) === true) {
    usernameError.style.display = "none";
  } else {
    usernameError.style.display = "block";
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

function checkPassword(password, minlen, maxlen) {
  if (password.trim().length > minlen && password.trim().length < maxlen) {
    const regEx = /^(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).+$/;
    const patternMatches = regEx.test(password);
    return patternMatches;
  }
}

function validateUsername(username, minlen, maxlen) {
  if (username.trim().length > minlen && username.trim().length < maxlen) {
    const regEx = /^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$/;
    const patternMatches = regEx.test(username);
    return patternMatches;
  }
}

function validateEmail(email) {
  const regEx = /^[a-zA-Z0-9._-]+@(stud\.)?noroff\.no$/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
