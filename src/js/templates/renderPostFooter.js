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


  //COMMENTS
  //   <label for="new-comment" class="d-none"></label>
  //     <strong><h5 class="username m-0">Username</h5></strong>
  //     <div class="input-group">
  //       <textarea class="form-control" aria-label="Add comment" id="new-comment" placeholder="Type your comment here"></textarea>
  //       <button class="btn btn-outline-secondary" type="submit" id="submit-new-comment">Share</button>
  //     </div>
