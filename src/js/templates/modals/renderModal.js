import { getPostFromAPI } from "../../api/requests/index.js";
import { modalHeader, renderModalBody, renderModalFooter } from "./index.js";

export async function makeModalByID(id) {
  const getParam = "_author=true";
  const post = await getPostFromAPI(id, getParam);

  const header = await modalHeader(post);
  const body = renderModalBody(post)
  const footer = renderModalFooter(post)

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
  modal.append(modalDialog);

  const modalContainer = document.querySelector(".modal-container");
  modalContainer.append(modal);
}


