import { load } from "../../storage/load.js";
import { populateUpdateForm, updateForm } from "../forms/index.js";

//get a delete btn on the posts that are yours - this does not work yet - it deletes everything posted hehe
// const author = load("profile");
// if (author.name == postData.author.name) {
//   const button = document.createElement("button");
//   button.innerText = "delete post";
//   cardHeader.append(button);
//   button.addEventListener("click", removePostFromAPI(postData.id)); //rememeber to test if this works
// }
const author = load("profile");

export function renderModalBody(postData) {
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body", "position-relative");

  if (author.name === postData.author.name) {
    const form = updateForm();
    modalBody.append(form);
    populateUpdateForm();
  } else if (author.name !== postData.author.name) {
    if (postData.media) {
      const img = document.createElement("img");
      img.classList.add("card-img");
      img.src = postData.media.url;
      img.alt = `image from ${postData.title}`;

      const caption = document.createElement("p"); //maybe this can be in the footer or something? so it can be on both text and img posts
      caption.classList.add("card-text");
      caption.innerText = postData.body;

      modalBody.append(img, caption);
    } else {
      const quoteMarkLeft = document.createElement("i");
      quoteMarkLeft.classList.add("fa-solid", "fa-quote-left");

      const quoteMarkright = document.createElement("i");
      quoteMarkright.classList.add("fa-solid", "fa-quote-right", "position-absolute", "bottom-10", "end-5");

      const quote = document.createElement("p");
      quote.innerText = postData.title;

      const blockquote = document.createElement("blockquote");
      blockquote.classList.add("blockquote");
      blockquote.append(quote);

      modalBody.append(quoteMarkLeft, blockquote, quoteMarkright);
    }
  }
  return modalBody;
}
