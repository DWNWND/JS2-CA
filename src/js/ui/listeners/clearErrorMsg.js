export function clearErrorMessages(errorContainer) {
  window.addEventListener("click", () => {
    errorContainer.innerText = "";
  });
}
