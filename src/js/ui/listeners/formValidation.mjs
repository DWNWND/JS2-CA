import { validateRepeatPassword, validateUsername, validatePassword, validateEmail } from "../events/validation.mjs";
import { email, username, password, repeatPassword, loginPassword, generalErrorContainer, loginEmail } from "../../constants.mjs";

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

  loginPassword.addEventListener("input", () => {
    if (loginPassword.value === "") {
      generalErrorContainer.innerText = "";
    }
  });
  loginEmail.addEventListener("input", () => {
    if (loginPassword.value === "" && loginPassword.value === "") {
      generalErrorContainer.innerText = "";
    }
  });
}
