import { validatePassword } from "../events/index.js";

export function validation() {
  const repeatPassword = document.querySelector("#registerRepeatPassword");

  repeatPassword.addEventListener("input", () => {
    const firstPasswordValue = document.querySelector("#registerPassword").value;
    const repeatPasswordValue = document.querySelector("#registerRepeatPassword").value;

    validatePassword(firstPasswordValue, repeatPasswordValue);
  });
}
