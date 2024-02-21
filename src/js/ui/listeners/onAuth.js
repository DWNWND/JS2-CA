import { load } from "../../storage/load.js";
import { loginAuth, registerAuth } from "../events/index.js";

export function authentication() {
  document.forms.login.addEventListener("submit", loginAuth);
  document.forms.register.addEventListener("submit", registerAuth);

  window.addEventListener("load", (event) => {
    const token = load("token");
    if (token) {
      location.pathname = "/feed";
    }
  });
}
