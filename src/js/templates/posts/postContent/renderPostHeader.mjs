import { load } from "../../../storage/load.mjs";
import { openPostAsModal } from "../../../ui/listeners/feed/openModal.mjs";

/**
 * Generates an HTML element for the card/post HEADER of each social media post passed in
 * @param {array, object} postData destructured to {id, author: { name, avatar: { url }}}. An array of objects or a single object conatining of social media post(s)
 * @returns {string} Returns a HTML elemement for the card/post header
 * @uses load To fetch the userdetailes of the logged in user from localstorage
 * @uses openPostAsModal To add an eventlistener to the modalBtn that generates the post as a modal on click
 */
export function renderPostHeader({
  id,
  author: {
    name: postAuthor,
    avatar: { url: userAvatar },
  },
}) {
  const author = load("profile");

  const modalBtn = document.createElement("button");
  modalBtn.classList.add("btn", "modalBtn");
  modalBtn.id = id;

  if (author.name === postAuthor) {
    modalBtn.innerText = "edit";
    modalBtn.classList.add("btn-warning");
  } else if (author.name !== postAuthor) {
    modalBtn.innerText = "open";
    modalBtn.classList.add("btn-primary");
  }
  modalBtn.setAttribute("data-bs-target", `#modal-${id}`);
  openPostAsModal(modalBtn);

  const profilePicture = document.createElement("img");
  profilePicture.classList.add("img-fluid", "rounded-circle", "profile-img-nav");
  profilePicture.src = userAvatar;
  profilePicture.alt = `The profile of: ${postAuthor}`;

  const userLink = document.createElement("a");
  userLink.classList.add("nav-link");
  userLink.append(profilePicture);

  const userName = document.createElement("h3");
  userName.classList.add("username", "m-0");
  userName.innerText = postAuthor;

  const user = document.createElement("div");
  user.classList.add("user", "d-flex", "align-items-center", "gap-2");
  user.append(userLink, userName);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "d-flex", "align-items-center", "justify-content-between");

  cardHeader.append(user, modalBtn);

  return cardHeader;
}
