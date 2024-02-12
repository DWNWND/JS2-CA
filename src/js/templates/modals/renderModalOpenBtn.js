import { makeModalByID } from "./index.js";

export function modalOpenBtn(id) {
  const modalBtn = document.createElement("button");
  modalBtn.classList.add("btn", "btn-primary");
  modalBtn.id = "modalBtn";

  modalBtn.setAttribute("data-bs-target", `#modal-${id}`);
  modalBtn.setAttribute("data-bs-toggle", "modal");
  modalBtn.innerText = "open as modal";

  modalBtn.addEventListener("mousedown", makeModalByID(id));
  return modalBtn;
}
