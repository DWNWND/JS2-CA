import { validatePassword, validateRegistrating } from "../events/index.js";
import { registerForm, password, repeatPassword } from "../../constants.js";

export function validation() {
  registerForm.addEventListener("input", validateRegistrating);

  password.addEventListener("input", () => {
    validatePassword(password.value, repeatPassword.value);
  });
  repeatPassword.addEventListener("input", () => {
    validatePassword(password.value, repeatPassword.value);
  });
}
