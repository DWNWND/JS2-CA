import { displayReactionsAccordion, displayCommentsAccordion } from "../index.mjs";

export function renderModalFooter(postData) {
  const accordionItemReactions = displayReactionsAccordion(postData, "modal");
  const accordionItemComments = displayCommentsAccordion(postData, "modal");

  const accordion = document.createElement("div");
  accordion.classList.add("accordion", "flex-grow-1", "w-100");
  accordion.id = "view-likes-and-comments";
  accordion.append(accordionItemReactions, accordionItemComments);

  const modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer", "text-muted", "flex-column");

  const date = document.createElement("p");
  date.classList.add("mt-2", "date", "flex-grow-1", "w-100");
  date.innerText = `Last updated: ${postData.updated}`;

  modalFooter.append(date, accordion);

  return modalFooter;
}
