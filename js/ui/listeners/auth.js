import { onLoginAuth, onRegisterAuth } from "../events/onAuth.js";

export function setAuthListener() {
  document.forms.login.addEventListener("submit", onLoginAuth);
  document.forms.register.addEventListener("submit", onRegisterAuth);
}
