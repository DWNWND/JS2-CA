import { getPostFromAPI, removePostFromAPI } from "../api/requests/index.js";
import { load } from "../storage/load.js";

//DETTE ER SISTE STOPP:::
export async function displayComments(id) {
  const displayPostByID = await HTTPMethod.getPostFromAPI(id);
  const commentsArray = displayPostByID.comments;
  // const comment = document.createElement("div");
  const commentsContainer = document.querySelector(".accordionItemComments");

  console.log(commentsContainer);

  if (commentsArray.length === 0) {
    // comment.innerText = "no comments";
  } else if (commentsArray.length >= 0) {
    commentsArray.forEach((reply) => {
      const comment = document.createElement("div");
      comment.innerHTML = `
          <strong><h5 class="username m-0">${reply.owner}</h5></strong>
          <p>${reply.body}</p>`;
      console.log(comment);
      commentsContainer.append(comment);
    });
    // for (let i = 0; i < commentsArray.length; i++) {
    //   comment.innerHTML = `
    //   <strong><h5 class="username m-0">${commentsArray[i].owner}</h5></strong>
    //   <p>${commentsArray[i].body}</p>`;
    // }
  }
  // return comment;
}
displayComments(14);

// function renderComment(comment, divContainer) {
//   comment.forEach(generateComment => {
//     divContainer = document.createElement("div");
//     divContainer.innerHTML = `
//     <strong><h5 class="username m-0">${comment.owner}</h5></strong>
//     <p>${comment.body}</p>`;
//   });
// }

// const comment = displayComments(postData.id);

// const commentsArray = postData.comments;
// const comment = ""

// const com = renderComment(commentsArray, comment)

// if (commentsArray.length === 0) {
//   // comment.innerText = "no comments";
// } else if (commentsArray.length >= 0) {
//   for (let i = 0; i < commentsArray.length; i++) {
//     renderComment(commentsArray[i]);
//     // comment = document.createElement("div");
//     // comment.innerHTML = `
//     // <strong><h5 class="username m-0">${commentsArray[i].owner}</h5></strong>
//     // <p>${commentsArray[i].body}</p>`;
//   }
// }

export function cardFooter(postData) {
  const accordionItemLikes = document.createElement("div");
  accordionItemLikes.classList.add("accordion-item");

  accordionItemLikes.innerHTML = `
  <h4 class="accordion-header" id="headingLikes">
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#likes-${postData.id}" aria-expanded="false" aria-controls="likes-${postData.id}">
      <i class="fa-regular fa-heart"></i>
      <span class="number-of-likes">${postData._count.reactions}</span> likes
    </button>
  </h4>
  <div id="likes-${postData.id}" class="accordion-collapse collapse" aria-labelledby="headingLikes" data-bs-parent="#view-likes-and-comments">
    <div class="accordion-body d-flex flex-column gap-2">
      <div class="like d-flex gap-2 align-items-center">
        <i class="fa-solid fa-heart"></i>
        <strong><h5 class="username m-0">Username</h5></strong>
      </div>
    </div>
  </div>`;

  const accordionItemComments = document.createElement("div");
  accordionItemComments.classList.add("accordion-item", "accordionItemComments");

  accordionItemComments.innerHTML = `
  <h2 class="accordion-header" id="headingComments">
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${postData.id}" aria-expanded="false" aria-controls="comments-${postData.id}">
      <i class="fa-regular fa-comment"></i>
      <span class="number-of-comments">${postData._count.comments}</span> comments
    </button>
  </h2>`;

  const accordionItemCommentList = document.createElement("div");
  accordionItemCommentList.classList.add("accordion-collapse", "collapse");
  accordionItemCommentList.id = `comments-${postData.id}`;
  accordionItemCommentList.setAttribute("aria-labelledby", "headingComments");
  accordionItemCommentList.setAttribute("data-bs-parent", "#view-likes-and-comments");

  // accordionItemCommentList.append(com);
  accordionItemComments.append(accordionItemCommentList);

  // <div id="comments-${postData.id}" class="accordion-collapse collapse" aria-labelledby="headingComments" data-bs-parent="#view-likes-and-comments">
  //   <div class="accordion-body d-flex flex-column gap-2">`
  //   ${comment}
  //     `<div class="comment">
  //       <strong><h5 class="username m-0">Username</h5></strong>
  //       <p>comment comment comment comment</p>
  //     </div>
  //   <label for="new-comment" class="d-none"></label>
  //     <strong><h5 class="username m-0">Username</h5></strong>
  //     <div class="input-group">
  //       <textarea class="form-control" aria-label="Add comment" id="new-comment" placeholder="Type your comment here"></textarea>
  //       <button class="btn btn-outline-secondary" type="submit" id="submit-new-comment">Share</button>
  //     </div>
  //   </div>
  // </div>`;

  const accordion = document.createElement("div");
  accordion.classList.add("accordion");
  accordion.id = "view-likes-and-comments";
  accordion.append(accordionItemLikes, accordionItemComments);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-muted");
  cardFooter.append(accordion);

  return cardFooter;
}

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

  //get a delete btn on the posts that are yours
  const author = load("profile");
  if (author.name == postData.author.name) {
    const button = document.createElement("button");
    button.innerText = "delete post";
    cardHeader.append(button);
    button.addEventListener("click", removePostFromAPI(postData.id)); //rememeber to test if this works
  }

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

  //same same but different
  //parent.innerHTML += postTemplateA(postData);
  // document.querySelector(".post#55 > button").addEventListener("click", () => console.log(postData));
}

// MULTIPLE
export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));

  //same same but different
  // const postHTMLElements = postDataList.map((postData) => postTemplateB);
  // parent.append(...postHTMLElements);

  //same same but different
  // postDataList.forEach(function (post) {
  //   postTemplateB(post);
  // });
}
