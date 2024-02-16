import { loginAuth, registerAuth } from "../events/index.js";

export function authentication() {
  document.forms.login.addEventListener("submit", loginAuth);
  document.forms.register.addEventListener("submit", registerAuth);
}
