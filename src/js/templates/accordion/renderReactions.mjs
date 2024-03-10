/**
 * Generates HTML for each reaction and appends it to a container
 * @param {object} post An array of objects or a single object conatining of social media post(s)
 * @param {string} container The HTML parent element that appends the reaction
 */
async function reactionsHTML(post, container) {
  const reactionsArray = post.reactions;

  for (let i = 0; i < reactionsArray.length; i++) {
    const emoji = reactionsArray[i].symbol;
    const reaction = document.createElement("div");
    reaction.classList.add("d-flex", "gap-3");
    reaction.innerHTML = `
      <span>${emoji}</span>`;

    const users = reactionsArray[i].reactors;
    const listOfUsers = document.createElement("div");
    listOfUsers.classList.add("d-flex", "flex-column");
    reaction.append(listOfUsers);

    for (let i = 0; i < users.length; i++) {
      const user = document.createElement("strong");
      user.innerHTML = `
        <p class="like-username m-0">${users[i]}</p>`;
      listOfUsers.append(user);
    }
    container.append(reaction);
  }
}

/**
 * Appends a posts rections to a bootstrap accordion element
 *
 * @param {(object|object[])} postData An array of objects or a single object conatining of social media post(s)
 * @returns {string} A HTML element of the whole accordion containing the rections
 *
 * @uses reactionsHTML To generate the HTML for each rection
 *
 */
export function displayReactionsAccordion(postData, modalOrPost) {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");

  const accordionHeader = document.createElement("h4");
  accordionHeader.classList.add("accordion-header");
  accordionHeader.id = "headingLikes";

  const accordionCollapse = document.createElement("div");
  accordionCollapse.classList.add("accordion-collapse", "collapse", "detect-collapse");
  accordionCollapse.id = `likes-${postData.id}-${modalOrPost}`;
  accordionCollapse.setAttribute("aria-labelledby", "headingLikes");
  accordionCollapse.setAttribute("data-bs-parent", "#view-likes-and-comments");

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion-body", "d-flex", "flex-column", "gap-2");

  if (postData._count.reactions) {
    accordionHeader.innerHTML = `
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#likes-${postData.id}-${modalOrPost}" aria-expanded="false" aria-controls="likes-${postData.id}-${modalOrPost}">
      <i class="like full"></i>
      <span class="number-of-likes">${postData._count.reactions}</span> likes
    </button>`;
    reactionsHTML(postData, accordionBody);
  } else if (!postData._count.reactions) {
    accordionHeader.innerHTML = `
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#likes-${postData.id}-${modalOrPost}" aria-expanded="false" aria-controls="likes-${postData.id}-${modalOrPost}">
      <i class="like empty"></i>
      <span class="number-of-likes">${postData._count.reactions}</span> likes
    </button>`;
    accordionBody.innerText = "this post has no reactions";
  }

  accordionCollapse.append(accordionBody);
  accordionItem.append(accordionHeader, accordionCollapse);

  return accordionItem;
}
