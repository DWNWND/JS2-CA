import { loginAuth, registerAuth } from "../events/index.js";

export function authListener() {
  document.forms.login.addEventListener("submit", loginAuth);
  document.forms.register.addEventListener("submit", registerAuth);
}
