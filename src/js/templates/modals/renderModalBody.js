import { removePostFromAPI } from "../../api/requests/index.js";
import { load } from "../../storage/index.js";
import { populateUpdateForm } from "../../ui/events/index.js";
import { updateForm } from "../forms/index.js";

const author = load("profile");

function makeDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn", "btn-primary", "btn-lg", "w-100");
  deleteBtn.innerText = "delete post";
  return deleteBtn;
}

export function renderModalBody(postData) {
  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body", "position-relative");

  //add possibility to add photo too maybe...
  if (author.name === postData.author.name) {
    const form = updateForm(postData.id);
    modalBody.append(form);
    populateUpdateForm(form);

    if (form) {
      const removePost = makeDeleteBtn();
      const containerForBtn = document.createElement("div");
      containerForBtn.classList.add("container", "mt-2");
      containerForBtn.append(removePost);
      modalBody.append(containerForBtn);

      removePost.addEventListener("click", async (event) => {
        await removePostFromAPI(postData.id);
      });
    }
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
      // const quoteMarkLeft = document.createElement("i");
      // quoteMarkLeft.classList.add("fa-solid", "fa-quote-left");

      // const quoteMarkright = document.createElement("i");
      // quoteMarkright.classList.add("fa-solid", "fa-quote-right", "position-absolute", "bottom-25", "end-5");

      const quote = document.createElement("p");
      quote.classList.add("text-center");
      quote.innerText = postData.title;

      const blockquote = document.createElement("blockquote");
      blockquote.classList.add("blockquote");
      blockquote.append(quote);

      modalBody.append(blockquote);
    }
  }
  return modalBody;
}
