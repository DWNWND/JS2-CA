import { load } from "../../../storage/index.mjs";
import { populateUpdateForm } from "../../../ui/events/index.mjs";
import { updateForm } from "../../forms/index.mjs";

export function renderModalBody({ id, author: { name: postAuthor }, title, body, media }) {
  const loggedInUser = load("profile").name;

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal-body", "position-relative");

  if (loggedInUser === postAuthor) {
    const form = updateForm(id);
    modalBody.append(form);
    populateUpdateForm(form);

    if (form) {
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-primary", "btn-lg", "w-100");
      deleteBtn.innerText = "delete post";

      const containerForBtn = document.createElement("div");
      containerForBtn.classList.add("container", "mt-2");
      containerForBtn.append(deleteBtn);

      const error = document.createElement("div");
      error.classList.add("update-post-error-message", "all-errors", "text-center");

      modalBody.append(containerForBtn, error);

      deleteBtn.addEventListener("click", async () => {
        const requestModule = "../../../api/httpRequests/index.mjs";
        const { removePostFromAPI } = await import(requestModule);
        await removePostFromAPI(id);
      });
    }
  } else if (loggedInUser !== postAuthor) {
    const caption = document.createElement("p");
    caption.classList.add("card-text");
    caption.innerText = body;

    if (media) {
      const img = document.createElement("img");
      img.classList.add("card-img");
      img.src = media.url;
      img.alt = `image from ${title}`;

      modalBody.append(img, caption);
    } else {
      const quote = document.createElement("p");
      quote.classList.add("text-center");
      quote.innerText = title;

      const blockquote = document.createElement("blockquote");
      blockquote.classList.add("blockquote");
      blockquote.append(quote);

      modalBody.append(blockquote, caption);
    }
  }
  return modalBody;
}
