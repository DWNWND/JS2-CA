export function clearErrorMessages(errorContainer) {
  if (document.body.contains(document.querySelector(".update-post-error-message"))) {
    const updatePostErrorContainer = document.querySelector(".update-post-error-message");
    window.addEventListener("click", () => {
      updatePostErrorContainer.innerText = "";
    });
  }
  if (document.body.contains(errorContainer)) {
    window.addEventListener("click", () => {
      errorContainer.innerText = "";
    });
  } else {
    return;
  }
}
