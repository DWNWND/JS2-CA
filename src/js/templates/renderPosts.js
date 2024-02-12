import { renderPostBody, renderPostFooter, renderPostHeader } from "./index.js";

export function postTemplate(postData) {
  const header = renderPostHeader(postData);
  const body = renderPostBody(postData);
  const footer = renderPostFooter(postData);

  const card = document.createElement("div");
  card.classList.add("card", "post-thread", "post-photo"); //DOUBLE CHECK THESE CLASSES
  card.append(header, body, footer);

  const col = document.createElement("div");
  col.classList.add("col");
  col.append(card);

  return col;
}

// SINGLE POST
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

// MULTIPLE POSTS
export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplate));

  //same same but different
  // postDataList.forEach(function (post) {
  //   postTemplateB(post);
  // });
}
