import { validateRepeatPassword, validateUsername, validatePassword, validateEmail } from "../events/index.js";
import { email, username, password, repeatPassword } from "../../constants.js";

export function validation() {
  email.addEventListener("input", validateEmail);
  username.addEventListener("input", validateUsername);

  password.addEventListener("input", () => {
    validateRepeatPassword(password.value, repeatPassword.value);
    validatePassword();
  });
  repeatPassword.addEventListener("input", () => {
    validateRepeatPassword(password.value, repeatPassword.value);
    validatePassword();
  });
}
