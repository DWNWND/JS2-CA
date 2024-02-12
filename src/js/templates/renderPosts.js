import { removePostFromAPI } from "../api/requests/index.js";
import { load } from "../storage/load.js";
import { cardFooter } from "./index.js";

//this is the preferred by the teachers - ref. feedback //double check the feedback and ref it here
export function postTemplate(postData) {
  // CREATE CARD HEADER
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
  cardHeader.append(user, date);

  //get a delete btn on the posts that are yours - this does not work yet - it deletes everything posted hehe
  // const author = load("profile");
  // if (author.name == postData.author.name) {
  //   const button = document.createElement("button");
  //   button.innerText = "delete post";
  //   cardHeader.append(button);
  //   button.addEventListener("click", removePostFromAPI(postData.id)); //rememeber to test if this works
  // }

  //CREATE CARD BODY
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body", "position-relative");

  if (postData.media) {
    const img = document.createElement("img");
    img.classList.add("card-img");
    img.src = postData.media.url;
    img.alt = `image from ${postData.title}`;

    const caption = document.createElement("p"); //maybe this can be in the footer or something? so it can be on both text and img posts
    caption.classList.add("card-text");
    caption.innerText = postData.body;

    cardBody.append(img, caption);
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

    cardBody.append(quoteMarkLeft, blockquote, quoteMarkright);
  }

  const footer = cardFooter(postData);

  const card = document.createElement("div");
  card.classList.add("card", "post-thread", "post-photo"); //DOUBLE CHECK THESE CLASSES
  card.append(cardHeader, cardBody, footer);

  const col = document.createElement("div");
  col.classList.add("col");
  col.append(card);

  return col;
}

// SINGLE
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

// MULTIPLE
export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));

  //same same but different
  // postDataList.forEach(function (post) {
  //   postTemplateB(post);
  // });
}
