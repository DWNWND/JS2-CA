import { email, emailError, username, usernameError, password, passwordError, repeatPasswordError } from "../../constants.mjs";

export async function validateRepeatPassword(firstPasswordValue, repeatPasswordValue) {
  if (repeatPasswordValue === firstPasswordValue && repeatPasswordValue !== "") {
    repeatPasswordError.innerText = "The passwords match";
    repeatPasswordError.classList.add("success");
    repeatPasswordError.classList.remove("error");
    return firstPasswordValue;
  }
  if (firstPasswordValue === "" || repeatPasswordValue === "") {
    repeatPasswordError.classList.remove("error");
  } else if (repeatPasswordValue !== firstPasswordValue) {
    repeatPasswordError.innerText = "The passwords do not match";
    repeatPasswordError.classList.remove("success");
    repeatPasswordError.classList.add("error");
  }
}

export function validatePassword() {
  console.log(password.value);
  if (checkPassword(password.value, 8, 20) === true) {
    passwordError.style.display = "none";
  }
  if (password.value === "") {
    passwordError.classList.remove("error");
  } else {
    passwordError.style.display = "block";
    passwordError.classList.add("error");
  }
}
export function validateUsername() {
  if (checkUsername(username.value, 2, 10) === true) {
    usernameError.style.display = "none";
  }
  if (username.value === "") {
    usernameError.classList.remove("error");
  } else {
    usernameError.style.display = "block";
    usernameError.classList.add("error");
  }
}
export function validateEmail() {
  if (checkEmail(email.value) === true) {
    emailError.style.display = "none";
  }
  if (email.value === "") {
    emailError.classList.remove("error");
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
