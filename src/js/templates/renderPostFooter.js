import { displayCommentsAccordion, displayReactionsAccordion } from "./index.js";

export function cardFooter(postData) {
  const accordionItemReactions = displayReactionsAccordion(postData);
  const accordionItemComments = displayCommentsAccordion(postData);

  const accordion = document.createElement("div");
  accordion.classList.add("accordion");
  accordion.id = "view-likes-and-comments";
  accordion.append(accordionItemReactions, accordionItemComments);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-muted");
  cardFooter.append(accordion);

  return cardFooter;
}
