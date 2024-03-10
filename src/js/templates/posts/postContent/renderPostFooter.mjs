import { displayReactionsAccordion, displayCommentsAccordion } from "../../accordion/index.mjs";

/**
 * Generates an HTML element for the card/post FOOTER of each social media post passed in
 * @param {(object|object[])} postData An array of objects or a single object conatining of social media post(s)
 * @returns {string} Returns a HTML elemement for the card/post footer
 *
 * @uses displayReactionsAccordion To generate a bootstrap accordion element that displays the posts REACTIONS
 * @uses displayCommentsAccordion To generate a bootstrap accordion element that displays the posts COMMENTS
 */
export function renderPostFooter(postData) {
  const date = document.createElement("p");
  date.classList.add("mt-2", "date");
  date.innerText = `Last updated: ${postData.updated}`;

  const accordionItemReactions = displayReactionsAccordion(postData, "post");
  const accordionItemComments = displayCommentsAccordion(postData, "post");

  const accordion = document.createElement("div");
  accordion.classList.add("accordion");
  accordion.id = "view-likes-and-comments";
  accordion.append(accordionItemReactions, accordionItemComments);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-muted");
  cardFooter.append(date, accordion);

  return cardFooter;
}
