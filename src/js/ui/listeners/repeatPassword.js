export async function checkRepeatPassword(firstPasswordValue, repeatPasswordValue) {
  const firstPassword = firstPasswordValue;
  const passwordRepeat = repeatPasswordValue;

  const repeatPasswordError = document.querySelector("#registerRepeatPasswordError");

  const registerForm = document.querySelector("#register");
  const button = registerForm.querySelector("button");

  if (passwordRepeat === firstPassword) {
    repeatPasswordError.innerText = "The passwords match";
    button.disabled = false;
    return firstPassword;
  } else if (passwordRepeat !== firstPassword) {
    repeatPasswordError.innerText = "The passwords do not match";
  }
}

export function repeatPassword() {
  const repeatPassword = document.querySelector("#registerRepeatPassword");

  repeatPassword.addEventListener("input", () => {
    const firstPasswordValue = document.querySelector("#registerPassword").value;
    const repeatPasswordValue = document.querySelector("#registerRepeatPassword").value;

    checkRepeatPassword(firstPasswordValue, repeatPasswordValue);
  });
}
repeatPassword();
