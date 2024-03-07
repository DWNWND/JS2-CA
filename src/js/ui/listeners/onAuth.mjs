import { loginAuth, registerAuth } from "../events/index.mjs";

export function authentication() {
  document.forms.login.addEventListener("submit", loginAuth);
  document.forms.register.addEventListener("submit", registerAuth);
}
