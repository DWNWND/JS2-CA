import { modalOpenBtn } from "../modals/index.mjs";

/**
 * Generates an HTML element for the card/post HEADER of each social media post passed in
 * @param {array, object} postData An array of objects or a single object conatining of social media post(s)
 * @returns {string} Returns a HTML elemement for the card/post header
 *
 * @uses modalOpenBtn To generate the btn to open post as a modal
 */
export function renderPostHeader(postData) {
  const profilePicture = document.createElement("img");
  profilePicture.classList.add("img-fluid", "rounded-circle", "profile-img-nav");
  profilePicture.src = "../img/undraw_Drink_coffee_v3au.png"; //adding just a standard img
  profilePicture.alt = `The profile of: ${postData.author.name}`;

  const userLink = document.createElement("a");
  userLink.classList.add("nav-link"); //set href
  userLink.append(profilePicture);

  const userName = document.createElement("h3");
  userName.classList.add("username", "m-0");
  userName.innerText = postData.author.name;

  const user = document.createElement("div");
  user.classList.add("user", "d-flex", "align-items-center", "gap-2");
  user.append(userLink, userName);

  const modalBtn = modalOpenBtn(postData.id, postData.author.name);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "d-flex", "align-items-center", "justify-content-between");

  cardHeader.append(user, modalBtn);

  return cardHeader;
}
