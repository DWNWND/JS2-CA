import { displayReactionsAccordion, displayCommentsAccordion } from "../index.js";

export function renderModalFooter(postData) {
  const accordionItemReactions = displayReactionsAccordion(postData);
  const accordionItemComments = displayCommentsAccordion(postData);

  const accordion = document.createElement("div");
  accordion.classList.add("accordion");
  accordion.id = "view-likes-and-comments";
  accordion.append(accordionItemReactions, accordionItemComments);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer", "text-muted");

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("btn", "btn-secondary")
  closeBtn.setAttribute("data-bs-dismiss=", "modal");
  closeBtn.innerText = "close modal"

  // const saveBtn = document.createElement("div");
  // saveBtn.classList.add("btn", "btn-primary")
  // saveBtn.innerText = "save changes"
  
  modalFooter.append(accordion, closeBtn);

  return modalFooter;
}
