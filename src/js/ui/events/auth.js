import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";
import { validatePassword } from "./index.js";
import { generalErrorContainer } from "../../constants.js";
import { displayErrorMessage } from "../../templates/errorMessage/index.js";

let errorMessage;

export async function loginAuth(event) {
  event.preventDefault();

  const email = event.target.loginEmail.value;
  const password = event.target.loginPassword.value;

  await login(email, password);
}

export async function registerAuth(event) {
  event.preventDefault();

  const name = event.target.registerUsername.value;
  const email = event.target.registerEmail.value;
  const firstPassword = event.target.registerPassword.value;
  const passwordRepeat = event.target.registerRepeatPassword.value;
  
  if (!name || !email || !firstPassword || !passwordRepeat) {
    errorMessage = "Please fill in all the registration fields.";
    displayErrorMessage(errorMessage, generalErrorContainer);
  } else {
    validatePassword(firstPassword, passwordRepeat);
    if (passwordRepeat === firstPassword) {
      await register(name, email, firstPassword);
    }
  }
}
