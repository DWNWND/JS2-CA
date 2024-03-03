import { validatePassword } from "../events/index.js";

export function validation() {
  const firstPasswordValue = document.querySelector("#registerPassword");
  const repeatPassword = document.querySelector("#registerRepeatPassword");

  firstPasswordValue.addEventListener("input", () => {
    const firstPasswordValue = document.querySelector("#registerPassword").value;
    const repeatPasswordValue = document.querySelector("#registerRepeatPassword").value;

    validatePassword(firstPasswordValue, repeatPasswordValue);
  });
  repeatPassword.addEventListener("input", () => {
    const firstPasswordValue = document.querySelector("#registerPassword").value;
    const repeatPasswordValue = document.querySelector("#registerRepeatPassword").value;

    validatePassword(firstPasswordValue, repeatPasswordValue);
  });
}
