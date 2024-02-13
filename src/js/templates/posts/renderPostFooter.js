import { displayReactionsAccordion, displayCommentsAccordion } from "../index.js";

export function renderPostFooter(postData) {
  const date = document.createElement("p");
  date.classList.add("mt-2", "date");
  date.innerText = `Last updated: ${postData.updated}`;

  const accordionItemReactions = displayReactionsAccordion(postData);
  const accordionItemComments = displayCommentsAccordion(postData);

  const accordion = document.createElement("div");
  accordion.classList.add("accordion");
  accordion.id = "view-likes-and-comments";
  accordion.append(accordionItemReactions, accordionItemComments);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-muted");
  cardFooter.append(date, accordion);

  return cardFooter;
}
