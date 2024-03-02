import { load } from "../../storage/index.js";

export function modalOpenBtn(id, loggedInUser) {
  const author = load("profile");

  const modalBtn = document.createElement("button");
  modalBtn.classList.add("btn", "modalBtn");
  modalBtn.id = id;

  if (author.name === loggedInUser) {
    modalBtn.innerText = "edit";
    modalBtn.classList.add("btn-warning");
  } else if (author.name !== loggedInUser) {
    modalBtn.innerText = "open";
    modalBtn.classList.add("btn-primary");
  }
  modalBtn.setAttribute("data-bs-target", `#modal-${id}`);
  // modalBtn.setAttribute("data-bs-toggle", "modal"); //removed to override bootstrap

  return modalBtn;
}
