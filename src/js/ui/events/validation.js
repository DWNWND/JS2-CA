export async function validatePassword(firstPasswordValue, repeatPasswordValue) {
  const firstPassword = firstPasswordValue;
  const passwordRepeat = repeatPasswordValue;

  const repeatPasswordError = document.querySelector("#registerRepeatPasswordError");

  const registerForm = document.querySelector("#register");
  const button = registerForm.querySelector("button");

  if (passwordRepeat === firstPassword) {
    repeatPasswordError.innerText = "The passwords match";
    repeatPasswordError.classList.add("success")
    button.disabled = false;
    return firstPassword;
  } else if (passwordRepeat !== firstPassword) {
    repeatPasswordError.innerText = "The passwords do not match";
  }
}

const email = document.querySelector("#registerEmail");
const emailError = document.querySelector("#emailHelpBlock");

const username = document.querySelector("#registerUsername");
const usernameError = document.querySelector("#usernameHelpBlock");

const password = document.querySelector("#registerPassword");
const passwordError = document.querySelector("#passwordHelpBlock");

const registerForm = document.querySelector("#register");

function validateRegistrating(event) {
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

registerForm.addEventListener("input", validateRegistrating);

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
  console.log(patternMatches);
  return patternMatches;
}
