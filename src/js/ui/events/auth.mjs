import { register, login } from "../../api/userAuthentication/index.mjs";
import { validatePassword } from "./index.mjs";
import { generalErrorContainer } from "../../constants.mjs";
import { displayMessage } from "../../templates/userFeedback/index.mjs";

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
    displayMessage(errorMessage, generalErrorContainer);
  } else {
    validatePassword(firstPassword, passwordRepeat);
    if (passwordRepeat === firstPassword) {
      await register(name, email, firstPassword);
    }
  }
}
