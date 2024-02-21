import { getPostFromAPI } from "../../api/requests/index.js";
import { modalHeader, renderModalBody, renderModalFooter } from "./index.js";

export async function makeModal(id) {
  const modalContainer = document.querySelector(".modal-container");
  const modal = await makeModalByID(id);
  modalContainer.append(modal);
}

export async function makeModalByID(id) {
  const getParam = "_author=true&_comments=true&_reactions=true";
  const post = await getPostFromAPI(id, getParam);

  const header = await modalHeader(post);
  const body = renderModalBody(post);
  const footer = renderModalFooter(post);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.id = id;
  modalContent.append(header, body, footer);

  const modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog", "modal-dialog-centered");
  modalDialog.append(modalContent);

  const modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.id = `modal-${id}`;
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "post-preview-modal");
  modal.setAttribute("aria-hidden", "true");

  //disable the click backdrop to exit (this does not work with the funciton to remove the modal)
  //https://stackoverflow.com/questions/22207377/disable-click-outside-of-bootstrap-modal-area-to-close-modal
  modal.setAttribute("data-bs-keyboard", "false");
  modal.setAttribute("data-bs-backdrop", "static");

  modal.append(modalDialog);

  return modal;
}