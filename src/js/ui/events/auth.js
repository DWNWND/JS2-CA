import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";
import { validatePassword } from "./index.js";
import { load } from "../../storage/index.js";

export async function loginAuth(event) {
  event.preventDefault();

  const email = event.target.loginEmail.value;
  const password = event.target.loginPassword.value;

  await login(email, password);
  const token = load("token");

  if (token) {
    location.pathname = "/feed";
  } else if (!token) {
    return;
  }
}

export async function registerAuth(event) {
  event.preventDefault();

  const name = event.target.registerUsername.value;
  const email = event.target.registerEmail.value;
  const firstPassword = event.target.registerPassword.value;
  const passwordRepeat = event.target.registerRepeatPassword.value;

 validatePassword(firstPassword, passwordRepeat);

  if (passwordRepeat === firstPassword) {
    await register(name, email, firstPassword);
    await login(email, firstPassword);
  }
}
