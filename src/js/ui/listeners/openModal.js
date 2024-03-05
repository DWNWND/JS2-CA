import { makeModal } from "../../templates/modals/index.js";
import { insertUrlParam } from "../urlParams/index.js";
import { removeModals } from "./index.js";

/**
 * Selects all btns with the class ".modalBtn" (open modal btns) that have been generated.
 * Loops through them, and makes an id-spesific modal if the btn is clicked.
 *
 * @uses makeModal To generate a new modal-element to be passed it into a bootstrap modal element
 * @uses insertUrlParam To add the id of the post to the url param when modal is open
 * @uses removeModals To add a close btn that removes the generated modal from the DOM and the url param with the spesific post id from the url.
 */
export async function openPostAsModal() {
  const modalBtn = document.querySelectorAll(".modalBtn");

  for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener("click", async (event) => {
      modalBtn[i].innerText = "loading";

      const id = event.target.id;
      await makeModal(id);
      let myModal = new bootstrap.Modal(document.getElementById(`modal-${id}`), {});
      myModal.toggle();

      modalBtn[i].innerText = "open";

      insertUrlParam(id);
      removeModals();
    });
  }
}
