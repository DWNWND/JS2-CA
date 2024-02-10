import { removePostFromAPI } from "../api/requests/index.js";
import { load } from "../storage/load.js";

//this is the preferred by the teachers - ref. feedback on portfolio/exam1
export function postTemplateB(postData) {
  const post = document.createElement("div");
  post.classList.add("post");
  post.innerText = postData.title + postData.body;

  if (postData.media) {
    const img = document.createElement("img");
    img.src = postData.media.url;
    img.alt = `image from ${postData.title}`;
    post.append(img);
  }

  //get a delete btn on the posts that are yours
  const author = load("profile");
  if (author.name == postData.author.name) {
    console.log(author.name);

    const button = document.createElement("button");
    button.innerText = "delete post";
    post.append(button);
    button.addEventListener("click", removePostFromAPI(postData.id));
  }

  return post;
}

// SINGLE
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateB(postData));

  //same same but different
  //parent.innerHTML += postTemplateA(postData);
  // document.querySelector(".post#55 > button").addEventListener("click", () => console.log(postData));
}

// MULTIPLE
export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB));

  //same same but different
  // const postHTMLElements = postDataList.map((postData) => postTemplateB);
  // parent.append(...postHTMLElements);

  //same same but different
  // postDataList.forEach(function (post) {
  //   postTemplateB(post);
  // });
}
