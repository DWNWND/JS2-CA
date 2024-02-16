import { renderPostBody, renderPostFooter, renderPostHeader } from "./index.js";

export function postTemplate(postData) {
  const header = renderPostHeader(postData);
  const body = renderPostBody(postData);
  const footer = renderPostFooter(postData);

  const card = document.createElement("div");
  card.classList.add("card", "post-thread", "post-photo", "mb-4"); //DOUBLE CHECK THESE CLASSES
  // card.id = postData.id;
  card.append(header, body, footer);

  const col = document.createElement("div");
  col.classList.add("col-lg-4", "col-md-6", "col-6");
  col.append(card);

  return col;
}

// SINGLE POST
export function renderPostTemplate(postData, parent) {
  parent.append(postTemplate(postData));
}

// MULTIPLE POSTS
export function renderPostTemplates(postDataList, parent) {
  if (postDataList.length === 0 || !postDataList) {
    console.log("no posts in this search or filter");

  } else {
    //GENERATE A LOAD MORE BTN
    //     const loadMore = document.createElement("a");
    //     loadMore.classList.add("load-button", "black", "underline", "montserrat");
    //     loadMore.innerHTML += `Load more`;
    //     listSection.appendChild(loadMore);

    for (let i = 0; i < postDataList.length; i++) {
      parent.append(postTemplate(postDataList[i]));

      if (i === 8) {
        break;
      }
    }
  }

  // OTHER WAYS ::::
  // parent.append(...postDataList.map(postTemplate));

  //same same but different
  // postDataList.forEach(function (post) {
  //   postTemplateB(post);
  // });
}
