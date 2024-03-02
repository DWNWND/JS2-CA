/**
 * Generates HTML for each comment and appends it to a container
 * @param {object} post An array of objects or a single object conatining of social media post(s)
 * @param {string} container The HTML parent element that appends the comments
 */
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

/**
 * Appends a posts comments to a bootstrap accordion element
 *
 * @param {array, object} postData An array of objects or a single object conatining of social media post(s)
 * @returns {string} A HTML element of the whole accordion containing the comments
 *
 * @uses commentsHTML To generate the HTML for each comment
 *
 */
export function displayCommentsAccordion(postData) {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");

  const accordionHeader = document.createElement("h4");
  accordionHeader.classList.add("accordion-header");
  accordionHeader.id = "headingComments";

  const accordionCollapse = document.createElement("div");
  accordionCollapse.classList.add("accordion-collapse", "collapse", "detect-collapse");
  accordionCollapse.id = `comments-${postData.id}`;
  accordionCollapse.setAttribute("aria-labelledby", "headingComments");
  accordionCollapse.setAttribute("data-bs-parent", "#view-likes-and-comments");

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion-body", "d-flex", "flex-column", "gap-2");

  if (postData._count.comments) {
    accordionHeader.innerHTML = `
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${postData.id}" aria-expanded="false" aria-controls="comments-${postData.id}">
     <i class="comment full"></i>
      <span class="number-of-comments">${postData._count.comments}</span> comments
    </button>`;
    commentsHTML(postData, accordionBody);
  } else if (!postData._count.comments) {
    accordionHeader.innerHTML = `
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#comments-${postData.id}" aria-expanded="false" aria-controls="comments-${postData.id}">
     <i class="comment empty"></i>
      <span class="number-of-comments">${postData._count.comments}</span> comments
    </button>`;
    accordionBody.innerText = "this post has no comments";
  }

  accordionCollapse.append(accordionBody);
  accordionItem.append(accordionHeader, accordionCollapse);

  return accordionItem;
}

//WAIT WITH THIS:

// async function newComment(event) {
//   event.preventDefault();

//   const title = event.target.title.value;
//   const body = event.target.body.value;

//   await sendPostToAPI(title, body);

//   if (sendPostToAPI) {
//     console.log("sendt?")
//     // location.reload()
//   }
//   //is this just for testing? right:
//   // const posts = await getPostsFromAPI();
//   // console.log(posts);
// }

//COMMENTS
//   <label for="new-comment" class="d-none"></label>
//     <strong><h5 class="username m-0">Username</h5></strong>
//     <div class="input-group">
//       <textarea class="form-control" aria-label="Add comment" id="new-comment" placeholder="Type your comment here"></textarea>
//       <button class="btn btn-outline-secondary" type="submit" id="submit-new-comment">Share</button>
//     </div>
