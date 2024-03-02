export function displayErrorMessage(errorMessage) {
  const errorContainer = document.querySelector(".error-message");
  errorContainer.innerText = errorMessage;
}
