async function commentsHTML(post, container) {
  const commentsArray = post.comments;

  for (let i = 0; i < commentsArray.length; i++) {
    const comment = document.createElement("div");
    comment.classList.add("d-flex", "gap-2", "align-items-center");
    comment.innerHTML = `
    <strong><h5 class="username m-0">${commentsArray[i].owner}</h5></strong>
    <p>${commentsArray[i].body}</p>`;
    
    container.append(comment);
  }
}

export function displayCommentsAccordion(postData) {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");

  const accordionHeader = document.createElement("h4");
  accordionHeader.classList.add("accordion-header");
  accordionHeader.id = "headingComments";
  accordionHeader.innerHTML = `
     <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${postData.id}" aria-expanded="false" aria-controls="comments-${postData.id}">
      <i class="fa-regular fa-comment"></i>
       <span class="number-of-comments">${postData._count.comments}</span> comments
     </button>`;

  const accordionCollapse = document.createElement("div");
  accordionCollapse.classList.add("accordion-collapse", "collapse");
  accordionCollapse.id = `comments-${postData.id}`;
  accordionCollapse.setAttribute("aria-labelledby", "headingComments");
  accordionCollapse.setAttribute("data-bs-parent", "#view-likes-and-comments");

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion-body", "d-flex", "flex-column", "gap-2");

  if (postData._count.reactions) {
    commentsHTML(postData, accordionBody);
  } else if (!postData._count.reactions) {
    accordionBody.innerText = "this post has no comments";
  }

  accordionCollapse.append(accordionBody);
  accordionItem.append(accordionHeader, accordionCollapse);

  return accordionItem;
}
