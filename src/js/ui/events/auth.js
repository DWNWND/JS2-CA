import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";

export async function loginAuth(event) {
  event.preventDefault();

  const email = event.target.loginEmail.value;
  const password = event.target.loginPassword.value;

  await login(email, password);

  if (login) {
    location.pathname = "/feed";
  }
}

export async function registerAuth(event) {
  event.preventDefault();

  const name = event.target.registerUsername.value;
  const email = event.target.registerEmail.value;
  const password = event.target.registerPassword.value;
  const passwordRepeat = event.target.registerRepeatPassword.value;

  if (passwordRepeat === password) {
    validPassword = event.target.registerPassword.value;

    await register(name, email, validPassword);
    await login(email, validPassword);

  } else if (passwordRepeat !== password) {
    const passwordForm = document.querySelector(".password-form");
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("form-text", "mb-3");
    errorMessage.id = "passwordValid";
    errorMessage.innerHTML = "The passwords do not match";
    passwordForm.appendChild(errorMessage);
  }
}
