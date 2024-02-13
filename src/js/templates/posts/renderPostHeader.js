import { modalOpenBtn } from "../modals/index.js";

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

  const date = document.createElement("p");
  date.classList.add("m-0");
  date.innerText = postData.updated;

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header", "d-flex", "align-items-center", "justify-content-between");
  // cardHeader.id = postData.id;

  const modalBtn = modalOpenBtn(postData.id)

  cardHeader.append(user, date, modalBtn);

  return cardHeader;
}