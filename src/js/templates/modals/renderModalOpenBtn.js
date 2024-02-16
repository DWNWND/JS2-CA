// import { makeModalByID } from "./index.js";

export function modalOpenBtn(id) {
  const modalBtn = document.createElement("button");
  modalBtn.classList.add("btn", "btn-primary", "modalBtn");
  modalBtn.id = id;

  modalBtn.setAttribute("data-bs-target", `#modal-${id}`);
  // modalBtn.setAttribute("data-bs-toggle", "modal"); //removed to override bootstrap?
  modalBtn.innerText = "open";

  return modalBtn;
}
