import { makeModal } from "../../templates/modals/index.js";
import { insertUrlParam } from "../urlParams/index.js";

export async function openPostAsModal() {
  const modalBtn = document.querySelectorAll(".modalBtn");

  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener("mousedown", async (event) => {
      const id = event.target.id;

      await makeModal(id);
      let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
      myModal.toggle();

      insertUrlParam(id);
      removeModals();
    });
  }
}