async function reactionsHTML(post, container) {
  const reactionsArray = post.reactions;

  for (let i = 0; i < reactionsArray.length; i++) {
    const emoji = reactionsArray[i].symbol;
    const reaction = document.createElement("div");
    reaction.classList.add("d-flex", "gap-2", "align-items-center");
    reaction.innerHTML = `
      <span>${emoji}</span>`;

    const users = reactionsArray[i].reactors;
    const listOfUsers = document.createElement("div");
    listOfUsers.classList.add("d-flex", "gap-2", "align-items-center");
    reaction.append(listOfUsers);

    for (let i = 0; i < users.length; i++) {
      const user = document.createElement("strong");
      user.innerHTML = `
        <h5 class="username m-0">${users[i]}</h5>`;
      listOfUsers.append(user);
    }
    container.append(reaction);
  }
}

export function displayReactionsAccordion(postData) {
  const accordionItem = document.createElement("div");
  accordionItem.classList.add("accordion-item");

  const accordionHeader = document.createElement("h4");
  accordionHeader.classList.add("accordion-header");
  accordionHeader.id = "headingLikes";

  const accordionCollapse = document.createElement("div");
  accordionCollapse.classList.add("accordion-collapse", "collapse");
  accordionCollapse.id = `likes-${postData.id}`;
  accordionCollapse.setAttribute("aria-labelledby", "headingLikes");
  accordionCollapse.setAttribute("data-bs-parent", "#view-likes-and-comments");

  const accordionBody = document.createElement("div");
  accordionBody.classList.add("accordion-body", "d-flex", "flex-column", "gap-2");

  if (postData._count.reactions) {
    accordionHeader.innerHTML = `
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#likes-${postData.id}" aria-expanded="false" aria-controls="likes-${postData.id}">
      <i class="like full"></i>
      <span class="number-of-likes">${postData._count.reactions}</span> likes
    </button>`;
    reactionsHTML(postData, accordionBody);

  } else if (!postData._count.reactions) {
    accordionHeader.innerHTML = `
    <button class="accordion-button collapsed d-flex gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#likes-${postData.id}" aria-expanded="false" aria-controls="likes-${postData.id}">
      <i class="like empty"></i>
      <span class="number-of-likes">${postData._count.reactions}</span> likes
    </button>`;
    accordionBody.innerText = "this post has no reactions";
  }

  accordionCollapse.append(accordionBody);
  accordionItem.append(accordionHeader, accordionCollapse);

  return accordionItem;
}
